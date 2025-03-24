const Submission = require('../models/Submission');
const Job = require('../models/Job');
require('dotenv').config()
const axios = require('axios');
const codeReviewService = require('../llm_model/codeReviewService');
const {judgeSahab} = require('../Judge0/judgeSahab');

// Submit code for evaluation
exports.submitCode = async (req, res) => {
  // console.log(req.body);

  const { userId, jobId, questionId, code, language } = req.body;
  
  // Validate request
  if (!userId || !jobId || !questionId || !code || !language) {
    return res.status(400).json({ msg: 'Please provide all required fields' });
  }
  
  try {
    // Create new submission record
    const submission = new Submission({
      user: userId,
      job: jobId,
      questionId,
      code,
      language,
      status: 'Pending'
    });
    
    await submission.save();
    
    // Get the job and question details
    const job = await Job.findById(jobId);
    const question = job.codingQuestions.id(questionId);
    
    if (!question) {
      return res.status(404).json({ msg: 'Question not found' });
    }
    
    // Execute code using Judge0 API
    const executionResult = await executeCode(code, language, question.testCases);
    
    // Get AI code review
    const aiReview = await codeReviewService.reviewCode(code, language, question.description);
    
    // Update submission with results
    submission.executionResult = executionResult;
    submission.aiReview = aiReview;
    submission.status = 'Completed';
    
    await submission.save();
    
    res.json(submission);
  } catch (err) {
    console.error('Submission error:', err.message);
    res.status(500).send('Server Error');
  }
};

// Get submission by ID
exports.getSubmissionById = async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id);
    
    if (!submission) {
      return res.status(404).json({ msg: 'Submission not found' });
    }
    
    res.json(submission);
  } catch (err) {
    console.error(err.message);
    
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Submission not found' });
    }
    
    res.status(500).send('Server Error');
  }
};

// Get all submissions by a user
exports.getUserSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find({ user: req.params.userId })
      .sort({ createdAt: -1 });
    
    res.json(submissions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Helper function to execute code using Judge0 API
async function executeCode(code, language, testCases) {
  try {
    const testCase = testCases[0];
    const result = await judgeSahab(code, language, testCase);
    return result;
  } catch (err) {
    console.error('Code execution error:', err);
    return {
      status: 'Runtime Error',
      message: 'Error executing code'
    };
  }
}