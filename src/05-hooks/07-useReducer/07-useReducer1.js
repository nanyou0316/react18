import React from 'react'
export default function UseReducer1({dispatch}) {
  return (
    <div>
      <button onClick={()=>{
        dispatch({type:'jian'})
      }}>-</button>
    </div>
  )
}
