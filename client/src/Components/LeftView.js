import React, { useContext } from 'react'
import { QuizContext } from '../App'

import Content from './Content'

function LeftView() {
  const { state } = useContext(QuizContext);
  return (
    <div id="left-view">
      <div id="prompt-left">
        {
          (state.view === "question" || state.view === "search") ?
            <h2>Read the following {state.currentArticle.type} and answer the questions:</h2> :
          (state.view === "factcheck") ?
            <h2>Here is the same information, fact-checked by specialists:</h2> :
            ""
        }
      </div>

      <div id="content-container">
        {
          state.view !== "factcheck" &&
          <Content />
        }
        {
          (state.view === "factcheck" || state.view === "result") &&
          <Content factcheck={true} />
        }
      </div>
    </div>
  )
}

export default LeftView
