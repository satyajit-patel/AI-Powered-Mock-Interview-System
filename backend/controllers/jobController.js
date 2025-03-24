// controllers/jobController.js
const Job = require('../models/Job');
const mongoose = require('mongoose');

// Get all jobs
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().select('title company location'); // Only return necessary fields
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get job by ID
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    
    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }
    
    res.json(job);
  } catch (err) {
    console.error(err.message);
    
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Job not found' });
    }
    
    res.status(500).send('Server Error');
  }
};

// Get coding questions for a specific job
exports.getJobQuestions = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    
    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }
    
    // Return questions without test cases (to prevent cheating)
    const questions = job.codingQuestions.map(q => ({
      _id: q._id,
      title: q.title,
      difficulty: q.difficulty
    }));
    
    res.json(questions);
  } catch (err) {
    console.error(err.message);
    
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Job not found' });
    }
    
    res.status(500).send('Server Error');
  }
};

// Get a specific coding question for a job
exports.getQuestionById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    
    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }
    
    const question = job.codingQuestions.id(req.params.questionId);
    
    if (!question) {
      return res.status(404).json({ msg: 'Question not found' });
    }
    
    // Return question without actual test cases (just sample)
    const questionData = {
      _id: question._id,
      title: question.title,
      description: question.description,
      difficulty: question.difficulty,
      sampleInput: question.sampleInput,
      sampleOutput: question.sampleOutput
    };
    
    res.json(questionData);
  } catch (err) {
    console.error(err.message);
    
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Invalid ID' });
    }
    
    res.status(500).send('Server Error');
  }
};