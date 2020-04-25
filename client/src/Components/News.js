import React from 'react'

function News({currentQuestion}) {
  console.log(currentQuestion);
  return (
    <div id="news">
      <h1 className="article-title">{currentQuestion.article_title}</h1>
      <p className="article-byline">{currentQuestion.article_byline}</p>
      <p className="article-author">{currentQuestion.article_author}</p>
      <img className="article-image" src={currentQuestion.article_image} alt="placeholder alt text for now, sorry"/>
      <p className="article_text">{currentQuestion.article_text}</p>

    </div>
  )
}

export default News
