const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const ChatModel = mongoose.model('Chat', chatSchema);

module.exports = ChatModel;
