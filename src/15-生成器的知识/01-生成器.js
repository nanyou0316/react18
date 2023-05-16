import React, { Component } from 'react'
function* test() {
  
  var val1= yield '输出-1'
  console.log(1111111111,val1)
  var val2=yield '输出-2'
  console.log(2222222222,val2)
  var val3=yield '输出-3'
  console.log(3333333333,val3)
}
var testResult = test()
var res1 = testResult.next()
console.log('res1:', res1)//{value: '输出-1', done: false}
var res2 = testResult.next('b')
console.log('res2:', res2)//{value: '输出-2', done: false}
var res3 = testResult.next('c')
console.log('res3:', res3)//{value: '输出-3', done: false}
var res4 = testResult.next('d')
console.log('res4:', res4)//{value: undefined, done: true}
/*
 done:通过这个判断有没有执行结束，true：结束   false：没有结束

*/
export default class Index extends Component {
  render() {
    return <div>Index</div>
  }
}
