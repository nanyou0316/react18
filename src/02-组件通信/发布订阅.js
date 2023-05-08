import React, { Component } from 'react'
const e={
  _callback:[],
  on(callback){
    this._callback.push(callback)
  },
  emit(value){
    this._callback.forEach(callback=>callback(value))
  }
}
class Son extends Component {
  constructor(){
    super()
    this.state={
      msg:'来打我呀'
    }
    e.on((value)=>{
      console.log(value);
      this.setState({
        msg:value
      })
    })
  }
  render() {
    return (
      <div>
        <h1>我是弟弟</h1>
        <b>{this.state.msg}</b>
      </div>
    )
  }
}

class Sister extends Component {
  render() {
    return (
      <div>
        <h1>我是姐姐</h1>
        <button onClick={()=>{
          e.emit("姐姐打了弟弟一巴掌")
        }}>
            打弟弟
        </button>
      </div>
    )
  }
}

export default class Father extends Component {
  render() {
    return (
      <div>
        <Son></Son>
        <Sister></Sister>
      </div>
    )
  }
}
