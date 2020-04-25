import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Questions({ questionID, setQuestionID, setView }) {

  const [accuracy, setAccuracy] = useState("");
  const [confidence, setConfidence] = useState(3);


  return (
    <div id="questions">
      <div id="question-accuracy">
        <p>Do you think this is accurate information?</p>
        <div id="answer-set">
          <button onClick={() => { setAccuracy("Yes") }} className={accuracy === "Yes" ? "selected" : ""}>YES</button>
          <button onClick={() => { setAccuracy("No") }} className={accuracy === "No" ? "selected" : ""}>NO</button>
          <button onClick={() => { setView("search") }}>NEED MORE INFO</button>
        </div>
      </div>
      <div id="question-confidence">
        <p>How confident are you in your answer?</p>
        <input type="range" min="1" max="5" value={confidence} onChange={(e) => { setConfidence(e.target.value) }} />
      </div>
      <Link
        id="continue"
        onClick={() => { setQuestionID(prevState => prevState + 1) }}
        to={`/quiz/${questionID + 1}`}
      >
        Continue
      </Link>
    </div>
  )
}

export default Questions


