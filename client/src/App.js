import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/* COMPONENTS */
import Intro from './Components/Intro'
import Quiz from './Components/Quiz'
import QuizEnd from './Components/QuizEnd'
import Results from './Components/Results'

function App() {
  return (
    <div id="main">
      <Router>
        <Switch>
          <Route path="/" exact component={Intro} />
          <Route path="/quiz/:id" exact component={Quiz} />
          <Route path="/quiz-end" exact component={QuizEnd} />
          <Route path="/results" exact component={Results} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
