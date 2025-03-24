// models/Submission.js
const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Completed', 'Error'],
    default: 'Pending'
  },
  executionResult: {
    status: {
      type: String,
      enum: ['Pending', 'Accepted', 'Wrong Answer', 'Runtime Error', 'Time Limit Exceeded', 'Compilation Error'],
      default: 'Pending'
    },
    stdout: String,
    stderr: String,
    compile_output: String,
    message: String,
    time: String
  },
  aiReview: {
    feedback: String,
    suggestions: [String],
    improvedSolution: String,
    explanation: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Submission', SubmissionSchema);