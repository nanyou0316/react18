import React, { useState } from 'react'
import { fromJS } from 'immutable'

export default function FromJs() {
  const [data, setdate] = useState(
    fromJS({
      info: {
        name: 'wang',
        age: 15,
      },
      hobby: ['吃饭', '睡觉', '打豆豆'],
    })
  )
  return (
    <div>
      <p>{data.get('info').get('name')}</p>
      <p>{data.getIn(['info', 'name'])}</p>
      <button
        onClick={() => {
          setdate(data.setIn(['info', 'name'], 'li'))
        }}
      >
        修改name
      </button>
      <ul>
        {data.get('hobby').map((item, index) => (
          <li key={index}>{item} <button onClick={()=>{
            setdate(data.updateIn(['hobby'],(oldList)=>oldList.splice(index,1)))
          }}>del</button></li>
        ))}
      </ul>
      <button
        onClick={() => {
          console.log(data.getIn(['hobby', 2]))
        }}
      >
        数组的get
      </button>
      <button
        onClick={() => {
          setdate(data.setIn(['hobby', 2], '打麻将'))
        }}
      >
        set
      </button>
    </div>
  )
}
