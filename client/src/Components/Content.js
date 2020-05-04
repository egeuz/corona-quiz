import React, { useContext } from 'react'

import { QuizContext } from '../App'
import Iframe from 'react-iframe'

function Content({ factcheck = false }) {

  const { state } = useContext(QuizContext);

  return (
    <div id="content">
      {
        factcheck &&
        <Iframe url={state.currentArticle.factcheck} className="content-frame" />
      }
      {
        (!factcheck && state.currentArticle.type === "news") &&
        <Iframe url={state.currentArticle.embed} className="content-frame" />
      }
      {
        (!factcheck && state.currentArticle.type === "tweet") &&
        <div dangerouslySetInnerHTML={{ __html: state.currentArticle.embed }} />
      }
      {
        (!factcheck && state.currentArticle.type === "video") &&
        <div dangerouslySetInnerHTML={{ __html: state.currentArticle.embed }} />
      }
      <a className="text-link" target="_blank" href={state.currentArticle.link}>SOURCE: {state.currentArticle.source}</a>
    </div>
  )
}

export default Content
