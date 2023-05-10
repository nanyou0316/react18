import React, { useReducer } from 'react'
import UseReducer1 from './07-useReducer1';
import UseReducer2 from './07-useReducer2';
import UseReducer3 from './07-useReducer3';
const initState={
  num:1
}
function reducer (oldState,dispatch) {
  console.log(oldState,dispatch);
  const newState={...oldState}
  const flag=dispatch.type
  switch (flag) {
    case 'jian':
      newState.num--
      return newState
    case 'jia':
      newState.num++
      return newState
    default:
      return newState
  }
    
}
export default function UseReducer() {
  const [state,dispatch]=useReducer(reducer,initState)
  return (
    <div>
      <UseReducer1 dispatch={dispatch}></UseReducer1>
      <UseReducer2 state={state}></UseReducer2>
      <UseReducer3 dispatch={dispatch}></UseReducer3>
    </div>
  )
}
