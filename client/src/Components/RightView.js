import React, { useContext } from 'react'
import { QuizContext } from '../App'

import Questions from './Questions'
import Search from './Search'
import Results from './Results'
import QuizControls from './QuizControls'

function RightView() {
  const { state, dispatch } = useContext(QuizContext);
  return (
    <div id="right-view">

      <div id="prompt-right">
        {
          (state.view === "question" || state.view === "result") ?
          <h2 id="question-number">#{state.currentArticleID}</h2> :
          (state.view === "factcheck") ?
          <h2>After reading the fact-check, have you changed your mind on these answers?</h2> :
          ""
        }
      </div>

      {
        (state.view == "question") ?
        <Questions /> :
        (state.view == "search") ?
        <Search /> :
        (state.view == "factcheck") ?
        <Questions factcheck={true} /> :
        (state.view == "result") ?
        <Results /> :
        ""
      }

      <QuizControls />
      
    </div>
  )
}

export default RightView
