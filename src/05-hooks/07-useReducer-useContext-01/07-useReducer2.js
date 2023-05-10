import React, { useContext } from 'react'
export default function UseReducer2({globalContext}) {
  console.log(globalContext,222);
  const GlobalContext=useContext(globalContext)
  return (
    <div>
      {GlobalContext.state.num}
    </div>
  )
}
