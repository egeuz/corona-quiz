import React, { useState } from 'react'
import { Link } from 'react-router-dom'
/* ASSETS */
import icon from '../Assets/icon-placeholder.png'

function Intro() {

  const [userAgreement, setUserAgreement] = useState(false);

  const handleCheck = () => {
    setUserAgreement(prevState => !prevState);
  }

  return (
    <div id="intro">
      <img src={icon} alt="placeholder icon" />
      <h1>COVID-19 DISINFO QUIZ</h1>
      <p>Some description about the website and its goals etc. etc. etc. Doggo ipsum tungg you are doing me the shock many pats doing me a frighten yapper mlem, doge shooberino wow such tempt the neighborhood pupper, aqua doggo snoot boofers borkdrive. Doge most angery pupper I have ever seen ruff aqua doggo shoob mlem.</p>

      <div id="user-agreement">
        <input
          name="user-agreement"
          type="checkbox"
          onChange={() => {
            setUserAgreement(prevState => !prevState)
          }}
        />
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
