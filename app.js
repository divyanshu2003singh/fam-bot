const express = require('express');
const mongoose = require('mongoose');
const chatRoutes = require('./routes/chatRoutes');
const ChatModel = require('./models/chatModel');

const app = express();
const port = 4000;

mongoose.connect('//your mongo url', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  console.log('MongoDB connected successfully');

  // Example data
  const initialData = [
    { question: 'What is your name?', answer: 'I am a chatbot.' },
  { question: 'How are you?', answer: 'I don\'t have feelings, but I\'m here to help!' },
  { question: 'What is the meaning of life?', answer: 'The meaning of life is subjective and varies for each person.' },
  { question: 'Tell me a joke.', answer: 'Why don\'t scientists trust atoms? Because they make up everything!' },
  { question: 'Who is the president of the United States?', answer: 'I don\'t have real-time information. Please check the latest news.' },
  { question: 'What is the capital of France?', answer: 'The capital of France is Paris.' },
  { question: 'Can you help me with programming?', answer: 'Of course! What specific programming question do you have?' },
  { question: 'What is the weather like today?', answer: 'I don\'t have real-time weather data. Please check a weather website or app.' },
  { question: 'How tall is Mount Everest?', answer: 'Mount Everest is approximately 29,032 feet (8,848 meters) tall.' },
  { question: 'What is the largest mammal?', answer: 'The blue whale is the largest mammal on Earth.' },
  // Add more data as needed
  ];

  try {
    await ChatModel.insertMany(initialData);
    console.log('Initial data inserted successfully');
  } catch (error) {
    console.error('Error inserting initial data:', error);
  }
});

// Use routes
app.use('/', chatRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
