import React, { useContext} from 'react'
import GlobalContext from './context'
export default function UseReducer1() {
  console.log(GlobalContext,1111);
  const globalContext=useContext(GlobalContext)
  return (
    <div>
      <button onClick={()=>{
        globalContext.dispatch({type:'jian'})
      }}>-</button>
    </div>
  )
}
