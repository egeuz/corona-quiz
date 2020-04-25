import React from 'react'
import News from './News'
import Tweet from './Tweet'
import Video from './Video'

function Content({ currentQuestion }) {

  console.log(currentQuestion);
  return (
    <div id="content">
      {(currentQuestion.article_type === "news") && <News currentQuestion={currentQuestion} />}
      {(currentQuestion.article_type === "tweet") && <Tweet embed={currentQuestion.article_twitter_embed}/>}
      {(currentQuestion.article_type === "video") && <Video embed={currentQuestion.article_youtube_embed}/>}
    </div>
  )
}

export default Content
