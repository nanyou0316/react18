import React, { Component } from 'react'
function getData1(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('data1..............')
    },1000)
  })
}
function getData2(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log();
      resolve('data2..............')
    },1000)
  })
}
function getData3(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('data3..............')
    },1000)
  })
}
function *gen(){
  const res1=yield getData1()
  console.log("res1",res1);
  const res2=yield getData2(res1)
  console.log("res2",res2);
  const res3=yield getData3(res2)
  console.log("res3",res3);
}
function run(gen){
  var g=gen()
  function next(data){
    var res= g.next(data)
    if(res.done){
      return res.value
    }
    res.value.then(val=>next(val))
  }
  next()
}
run(gen)

export default class Index extends Component {
  render() {
    return <div>Index</div>
  }
}
