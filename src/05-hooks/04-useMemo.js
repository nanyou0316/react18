import React, {  useMemo, useState } from 'react'
 function App() {
  let [name, setName] = useState('zhangsan')
  let [arr] = useState([1, 2, 3, 4, 5])
  const getLi = useMemo(() => {
    console.log('arr加载了')
    return arr.map((item) => <li key={item}>{item}</li>)
  }, [])
  return (
    <div>
      <h1>{name}</h1>
      <button
        onClick={() => {
          setName(name + '1')
        }}
      >
        改变name
      </button>
      <div>
        <ul>
          {getLi}
        </ul>
      </div>
    </div>
  )
}
export default App