import React, { useContext } from 'react'
export default function UseReducer3({globalContext}) {
  console.log(globalContext,333);
  const GlobalContext=useContext(globalContext)
  return (
    <div>
      <button onClick={()=>{
        GlobalContext.dispatch({type:'jia'})
      }}>+</button>
    </div>
  )
}
