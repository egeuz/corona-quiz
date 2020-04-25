const mongoose = require('mongoose');

const quizDataSchema = new mongoose.Schema({
  userId: Number
});

module.exports = mongoose.model('QuizData', quizDataSchema);