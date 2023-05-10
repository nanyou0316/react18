import React, { useContext } from 'react'
import GlobalContext from './context'
export default function UseReducer3() {
  console.log(GlobalContext,333);
  const globalContext=useContext(GlobalContext)
  return (
    <div>
      <button onClick={()=>{
        globalContext.dispatch({type:'jia'})
      }}>+</button>
    </div>
  )
}
