import React, { useContext } from 'react'
import GlobalContext from './context'
export default function UseReducer2() {
  console.log(GlobalContext,222);
  const globalContext=useContext(GlobalContext)
  return (
    <div>
      {globalContext.state.num}
    </div>
  )
}
