import React, { Fragment, useState, memo } from 'react'
function Children() {
  return (
    <Fragment>
      <div>
        {console.log('我更新了')}
        我是子组件
      </div>
    </Fragment>
  )
}
const HighChildren = memo(Children, (ov, nv) => {
  console.log(ov, nv)
  return false
})
export default function Memo() {
  const [num, setNum] = useState(0)
  return (
    <div>
      <div>
        <h1>{num}</h1>
        <button
          onClick={() => {
            setNum(num + 1)
          }}
        >
          改变num
        </button>
      </div>
      <HighChildren num={num}></HighChildren>
    </div>
  )
}
