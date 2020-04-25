import React from 'react'
import News from './News'
import Tweet from './Tweet'
import Video from './Video'

function Content({ currentQuestion }) {

  return (
    <div id="content">
      {(currentQuestion.article_type === "news") && <News currentQuestion={currentQuestion} />}
      {(currentQuestion.article_type === "tweet") && <Tweet />}
      {(currentQuestion.article_type === "video") && <Video />}
    </div>
  )
}

export default Content
