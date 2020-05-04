import React, { useState, useContext } from 'react'
import { QuizContext } from '../App'
import {Link} from 'react-router-dom'

function QuizControls() {
  const { state, dispatch } = useContext(QuizContext);
  const [factcheckMode, setFactcheckMode] = useState(false);


  const toSearch = () => {
    setFactcheckMode(state.view === "factcheck");
    dispatch({ type: "set-view", view: "search" });
  }

  const backSearch = () => {
    dispatch({ type: "set-view", view: factcheckMode ? "factcheck" : "question" });
  }

  const toFactcheck = () => {
    dispatch({ type: "set-view", view: "factcheck" });
  }

  const toResult = () => {
    dispatch({ type: "set-view", view: "result" });
  }

  const toNextQuestion = () => {
    dispatch({type: "set-view", view: "question"});
    window.href = `/quiz/${state.currentArticleID}`
  }

  return (
    <div id="quiz-controls">
      {
        (state.view === "question") ?
          <div id="quiz-button-grid">
            <button onClick={toSearch}>SEARCH THE WEB</button>
            <button id="button-right" onClick={toFactcheck}>NEXT →</button>
          </div> :
          (state.view === "search") ?
            <div id="quiz-button-grid">
              <button onClick={backSearch}>← BACK TO QUESTIONS</button>
            </div> :
            (state.view === "factcheck") ?
              <div id="quiz-button-grid">
                <button onClick={toSearch}>SEARCH THE WEB</button>
                <button id="button-right" onClick={toResult}>NEXT →</button>
              </div> :
              (state.view === "result") ?
                <div id="quiz-button-grid">
                  <div>
                    <button>TWITTER</button>
                    <button>FACEBOOK</button>
                  </div>
                  <Link id="button-right" className="button-link" to={`/quiz/${state.currentArticleID + 1}`} onClick={toNextQuestion}>CONTINUE →</Link>
                </div> :
                ""
      }
    </div>
  )
}

export default QuizControls
