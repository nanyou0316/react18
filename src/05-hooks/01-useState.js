import React, { useState } from 'react'

export default function App() {
  const [name,setName]=useState('zhangsan')
  return (
    <div>
      <h1>name:{name}</h1>
      <button onClick={()=>{setName('lisi')}}>修改name</button>
    </div>
  )
}
