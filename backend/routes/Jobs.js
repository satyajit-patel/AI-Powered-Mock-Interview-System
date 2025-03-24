const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.get('/', jobController.getAllJobs);
router.get('/:id', jobController.getJobById);
router.get('/:id/questions', jobController.getJobQuestions);
router.get('/:id/questions/:questionId', jobController.getQuestionById);

module.exports = router;