import React, { useContext, useState } from 'react'


function Son() {
  const myContext = useContext(GlobalContext)
  return (
    <div>
      <h1>我是弟弟</h1>
      <b>{myContext.msg}</b>
    </div>
  )
}

function Sister() {
  const myContext = useContext(GlobalContext)
  return (
    <div>
      <h1>我是姐姐</h1>
      <button
        onClick={() => {
          myContext.changeMsg('姐姐打来了一巴掌'+1)
        }}
      >
        打弟弟
      </button>
    </div>
  )
}
const GlobalContext = React.createContext()
// GlobalContext这个名字可以随便取
export default function Father() {
  const [msg, setmsg] = useState('来打我呀')
  return (
    <GlobalContext.Provider
      value={{
        msg: msg,
        changeMsg: (nv) => setmsg(nv),
      }}
    >
      <div>
        <Son></Son>
        <Sister></Sister>
      </div>
    </GlobalContext.Provider>
  )
}
