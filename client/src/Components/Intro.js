import React, { useState } from 'react'
import { Link } from 'react-router-dom'
/* ASSETS */
import logo from '../Assets/logo.svg'

function Intro() {

  const [userAgreement, setUserAgreement] = useState(false);

  const handleCheck = () => {
    setUserAgreement(prevState => !prevState);
  }

  return (
    <div id="intro">
      <img src={logo} alt="placeholder icon" />
      <p>Lorem ipsum dolor sit amet about this website, right? Lorem ipsum dolor sit amet. Again, if you dolor, if sit, you amet. Definitely.</p>

      <div id="user-agreement">
        <input
          name="user-agreement"
          type="checkbox"
          onChange={handleCheck}
        />
        <span id="checkbox" className={userAgreement ? "checked" : ""} onClick={handleCheck}/>
        <label htmlFor="user-agreement">This website collects data about your activity on it. All data collected is anonymous and will not be shared with third parties. Please check the checkbox to agree with all this (replace w/ better copy)</label>
      </div>

      <Link
        id="call-to-action"
        to={userAgreement ? "/quiz/1" : ""}
        className={(userAgreement) ? "" : "disabled"}
      >
        BEGIN QUIZ
      </Link>
    </div>
  )
}

export default Intro
