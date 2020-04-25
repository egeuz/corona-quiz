import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'

/* COMPONENTS */
import Intro from './Components/Intro'
import Quiz from './Components/Quiz'
import QuizEnd from './Components/QuizEnd'
import Results from './Components/Results'

export const QuizContext = React.createContext();

function App() {

  const [questions, setQuestions] = useState("");

  useEffect(() => {
    async function fetchQuestions() {
      const response = await axios.get('/quiz-start');
      const questions = response.data;
      setQuestions(questions);
    }

    fetchQuestions();
  }, []);

  return (

    <div id="main">
      {
        questions &&
        <QuizContext.Provider value={questions}>
          <Router>
            <Switch>
              <Route path="/" exact component={Intro} />
              <Route path="/quiz/:questionID" exact component={Quiz} />
              <Route path="/quiz-end" exact component={QuizEnd} />
              <Route path="/results" exact component={Results} />
            </Switch>
          </Router>

        </QuizContext.Provider>
      }

    </div>


  )
}

export default App
