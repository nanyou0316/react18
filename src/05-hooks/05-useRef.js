import React, { useRef, useState } from 'react'

export default function UseRef() {
  const [myText,setMyText]=useState('')
  const myRef = useRef()
  return (
    <div>
      <input ref={myRef}></input>
      <button onClick={()=>setMyText(myRef.current.value)}>获取myRef的数据</button>
      <h1>myText:{myText}</h1>
    </div>
  )
}
