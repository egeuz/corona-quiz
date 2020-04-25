/*** EXPRESS ***/
const express = require('express');
const app = express();

/* QUESTION DATA */
const questions = require('./data.json')

/* MIDDLEWARE */
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

/*** DEPENDENCIES ***/
const axios = require('axios');

/*** ENVIRONMENT VARIABLES ***/
require('dotenv').config();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const GOOGLE_ENGINE_ID = process.env.GOOGLE_ENGINE_ID;
 
/*** DATABASE ***/
const mongoose = require('mongoose');
const Question = require('./models/questions');
const QuizData = require('./models/quizdata');
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

/*** ROUTES ***/

//Search highlighted text from an article
app.post('/highlight-search', async (req, res) => {
  const query = req.body.query;
  //make api call to google
  const searchURL = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${GOOGLE_ENGINE_ID}&q=${query}`
  
  try {
    const search = await axios(searchURL);
    res.send(search.data.items);
  } catch (err) {
    console.log(err);
  }
})


app.get('/quiz-start', async (req, res) => {
  res.json(questions);
});

app.post('/quiz-end', (req, res) => {

});

//catch-all route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

/*** RUNTIME ***/
app.listen(PORT, () => console.log("mixing things up at port " + PORT));