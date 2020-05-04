import React, { useState, useReducer, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import data from './Dataset/data.json'

/* COMPONENTS */
import Intro from './Components/Intro'
import Quiz from './Components/Quiz'
import QuizEnd from './Components/QuizEnd'
import Results from './Components/Results'

export const QuizContext = React.createContext();

const initialState = {
  articles: data,
  currentArticle: data[0],
  currentArticleID: 1,
  view: "question",
  userData: []
}

const quizReducer = (state, action) => {
  switch (action.type) {
    case "set-current-article":
      return {
        ...state,
        currentArticleID: action.id,
        currentArticle: state.articles[action.id - 1]
      }
    case 'load-next-question':
      return {
        ...state,
        currentArticleID: state.currentArticleID + 1,
        currentArticle: state.articles[state.currentArticleID - 1] 
      }
    case 'set-view':
      return { ...state, view: action.view }
    default:
      return state
  }
}

function App() {

  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <div id="main">
      {
        state.articles &&
        <QuizContext.Provider value={{ state, dispatch }}>
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
