import React, { Component } from 'react'
function getData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(11111111111);
      resolve('data1..............')
    }, 1000)
  })
}
function getData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('data2..............')
    }, 1000)
  })
}
function getData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('data3..............')
    }, 1000)
  })
}
function* gen() {
  const res1 = yield getData1()
  console.log('res1', res1)
  const res2 = yield getData2()
  console.log('res2', res2)
  const res3 = yield getData3()
  console.log('res3', res3)
}
function run(gen) {
  var g = gen()
  // console.log(g.next())  ===>  {value: Promise, done: false}
  // console.log(g.next().value.then(res=>console.log(res)))
  function nextFn(data){
    var res= g.next(data)
    console.log("res",res);
    if(res.done){
      return res.value
    }
    res.value.then(val=>nextFn(val))
  }
  nextFn()
}
run(gen)

export default class Index extends Component {
  render() {
    return <div>Index</div>
  }
}
