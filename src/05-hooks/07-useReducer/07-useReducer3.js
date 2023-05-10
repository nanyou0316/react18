import React from 'react'
export default function UseReducer3({dispatch}) {
  return (
    <div>
      <button onClick={()=>{
        dispatch({type:'jia'})
      }}>+</button>
    </div>
  )
}
