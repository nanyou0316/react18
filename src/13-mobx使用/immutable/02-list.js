import React,{useState} from 'react'
import {List} from 'immutable'

// var arr1=List([1,2,3])
// var arr2=arr1.push(4)
// console.log(arr1,arr2);
export default function ListComp() {
  const [arr]=useState(List([1,2,3,4]))
  return (
    <div>
      <ul>
        {
          arr.map(item=><li key={item}>{item}</li>)
        }
      </ul>
    </div>
  )
}
