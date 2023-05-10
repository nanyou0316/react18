import React, { useReducer } from 'react'
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
      <button onClick={()=>{dispatch({
        type:'jian'
      })}}>-</button>
      {state.num}
      <button onClick={()=>{
        dispatch({
          type:'jia'
        })
      }}>+</button>
    </div>
  )
}
