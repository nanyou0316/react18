import React, { Component } from 'react'
import { autorun } from 'mobx'
// import store from './store/index'
import store from './store/02-index方法的使用'
//监听普通数据对象
// var observableNumber=observable.box(10)
// //autorun初始化默认会执行一遍
// autorun(()=>{
//   console.log(observableNumber.get());
// })
// setTimeout(()=>{
//   observableNumber.set(2)
// },2000)

// var observableObj=observable.map({
//   name:'zhangsan',
//   age:18
// })
// autorun(()=>{
//   console.log("监听到了observableObj的name属性改变了：",observableObj.get('name'));
// })
// autorun(()=>{
//   console.log("监听到了observableObj的age属性改变了：",observableObj.get('age'));
// })
// setTimeout(()=>{observableObj.set('name','lisi')},3000)

export default class Mobx extends Component {
  state = {
    num: 1,
  }
  componentDidMount() {
    autorun(() => {
      this.setState({
        num: store.num,
      })
    })
  }
  render() {
    const { num } = this.state
    return (
      <div>
        <h1>{num}</h1>
        <button onClick={() => {store.changeNum()}}>修改num</button>
      </div>
    )
  }
}
