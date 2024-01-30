const express = require('express');
const bodyParser = require('body-parser');
const ChatModel = require('../models/chatModel');

const router = express.Router();

router.use(bodyParser.json());

// Handle incoming messages
router.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  // Query MongoDB for a matching question
  const chatEntry = await ChatModel.findOne({ question: userMessage });

  // Return the corresponding answer or a default response
  const response = chatEntry ? chatEntry.answer : 'I don\'t understand that question.';

  res.json({ response });
});

module.exports = router;
