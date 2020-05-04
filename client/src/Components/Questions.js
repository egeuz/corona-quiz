import React, { useState, useEffect, useContext } from 'react'
import { QuizContext } from '../App'
import { Link } from 'react-router-dom'

function Questions({ factcheck }) {

  const values = ["VERY INCONFIDENT", "SOMEWHAT INCONFIDENT", "NEUTRAL", "SOMEWHAT CONFIDENT", "VERY CONFIDENT"];
  const [accuracy, setAccuracy] = useState("");
  const [confidence, setConfidence] = useState(3);

  return (
    <div id="questions">
      <div id="question-accuracy">
        <h1>Do you think this information is accurate?</h1>
        <div id="answer-set">
          <button onClick={() => { setAccuracy("Yes") }} className={accuracy === "Yes" ? "selected" : ""}>YES</button>
          <button onClick={() => { setAccuracy("No") }} className={accuracy === "No" ? "selected" : ""}>NO</button>
        </div>
      </div>
      <div className="line-break"></div>
      <div id="question-confidence">
        <h1>How confident are you <br />in your answer?</h1>
        <input type="range" min="1" max="5" value={confidence} onChange={(e) => { setConfidence(e.target.value) }} />
        <p>{values[confidence - 1]}</p>
      </div>
    </div>
  )
}

export default Questions


