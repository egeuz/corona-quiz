import React, { useState, useEffect } from 'react'

/* COMPONENTS */
import Content from './Content'
import Questions from './Questions'
import Search from './Search'


function Quiz(props) {

  //UI STATE
  const [currentQuestion, setCurrentQuestion] = useState(0);
  useEffect(() => {
    setCurrentQuestion(parseInt(props.match.params.questionID))
  }, [props.match.params.questionID])

  const [view, setView] = useState("regular-questions");



  return (
    <div id="quiz">
      <Content />
      {
        (view === "regular-questions") ? <Questions currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} setView={setView} /> :
        (view === "factcheck-questions") ? <Questions currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} setView={setView} /> :
        (view === "search") ? <Search setView={setView} /> :
        ""
      }
    </div>
  )
}

export default Quiz
