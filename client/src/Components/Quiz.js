import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { QuizContext } from '../App'

/* COMPONENTS */
import Content from './Content'
import Questions from './Questions'
import Search from './Search'

function Quiz(props) {

  const questions = useContext(QuizContext);

  //UI STATE
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [questionID, setQuestionID] = useState(0);
  useEffect(() => {
    setQuestionID(parseInt(props.match.params.questionID))
    setCurrentQuestion(questions.find(q => q.article_id == questionID))
  }, [questionID])

  const [view, setView] = useState("regular-questions");


  return (
    <div id="quiz">
      {
        (currentQuestion) &&
        <Content currentQuestion={currentQuestion} />
      }
      {
        (view === "regular-questions") ? <Questions questionID={questionID} setQuestionID={setQuestionID} setView={setView} /> :
        (view === "search") ? <Search setView={setView} /> :
        ""
      }

    </div>
  )
}

export default Quiz
