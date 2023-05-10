import React, { useContext} from 'react'
export default function UseReducer1({globalContext}) {
  console.log(globalContext,1111);
  const GlobalContext=useContext(globalContext)
  return (
    <div>
      <button onClick={()=>{
        GlobalContext.dispatch({type:'jian'})
      }}>-</button>
    </div>
  )
}
