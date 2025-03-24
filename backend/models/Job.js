// models/Job.js
const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  skills: {
    type: [String]
  },
  codingQuestions: [{
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    difficulty: {
      type: String,
      enum: ['Easy', 'Medium', 'Hard'],
      default: 'Medium'
    },
    sampleInput: {
      type: String
    },
    sampleOutput: {
      type: String
    },
    testCases: [{
      input: String,
      output: String
    }]
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Job', JobSchema);