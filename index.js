/*** EXPRESS ***/
const express = require('express');
const app = express();

/* MIDDLEWARE */
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('client'));

/*** ENVIRONMENT VARIABLES ***/
require('dotenv').config();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

/*** DATABASE ***/
const mongoose = require('mongoose');
const Question = require('./models/questions');
const QuizData = require('./models/quizdata');
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

/*** ROUTES ***/
app.get('/quiz-start', (req, res) => {

});

app.post('/quiz-end', (req, res) => {

});


/*** RUNTIME ***/
app.listen(PORT, () => console.log("mixing things up at port " + PORT));