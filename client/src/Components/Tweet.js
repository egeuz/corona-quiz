import React from 'react'

function Tweet({embed}) {
  console.log(embed)
  return (
    <div dangerouslySetInnerHTML={{__html: embed}}></div>
  )
}

export default Tweet
