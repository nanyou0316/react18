import React, { Component } from 'react'
function* test() {
  setTimeout(()=>{
    console.log("1111111111");
    result.next()
  },1000)
   yield '输出-1'
  setTimeout(()=>{
    console.log("2222222222");
    result.next()
  },1000)
  yield '输出-2'
  setTimeout(()=>{
    console.log("33333333333");
  },1000)
  yield '输出-3'
}
var result=test()
result.next()
// result.next()
// result.next()
export default class Index extends Component {
  render() {
    return <div>Index</div>
  }
}
