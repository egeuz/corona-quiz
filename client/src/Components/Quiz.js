import React, { useEffect, useContext } from 'react'
import { QuizContext } from '../App'

/* COMPONENTS */
import LeftView from './LeftView'
import RightView from './RightView'

function Quiz(props) {

  const {state, dispatch} = useContext(QuizContext);

  useEffect(() => {
    const id = props.match.params.questionID;
    console.log(id);
    dispatch({type: "set-current-article", id: parseInt(id)});
  }, [props.match.params.questionID]);

  return (
    <div id="quiz">
      <LeftView />
      <RightView />
    </div>
  )
}

export default Quiz
