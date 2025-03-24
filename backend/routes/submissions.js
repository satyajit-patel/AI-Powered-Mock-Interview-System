const express = require('express');
const router = express.Router();
const submissionController = require('../controllers/submissionController');

router.post('/', submissionController.submitCode);
router.get('/:id', submissionController.getSubmissionById);
router.get('/user/:userId', submissionController.getUserSubmissions);

module.exports = router;