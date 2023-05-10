import React, { useRef, useState } from 'react'

export default function UseRef() {
  const [myText,setMyText]=useState('')
  const myRef = useRef(0)
  return (
    <div>
      <input ref={myRef}></input>
      <button onClick={()=>{
         return (setMyText(myRef.current.value),myRef.current='12')
        }}>获取myRef的数据</button>
      <h1>myText:{myText}</h1>
      <h1>myRef:{myRef.current}</h1>
    </div>
  )
}
