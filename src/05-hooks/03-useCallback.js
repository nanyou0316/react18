import React, { useCallback, useState } from 'react'
import UseMemo from './03-memo'
 function App() {
  let [name, setName] = useState('zhangsan')
  let [arr] = useState([1, 2, 3, 4, 5])
  const getLi = useCallback(() => {
    console.log('arr加载了')
    return arr.map((item) => <li key={item}>{item}</li>)
  }, [arr])
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
          {/* <UseMemo getLi={getLi}></UseMemo> */}
          {getLi()}
        </ul>
      </div>
    </div>
  )
}
export default App