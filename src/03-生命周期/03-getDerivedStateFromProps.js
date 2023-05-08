import React, { Component } from 'react'
class Son extends Component {
  // componentWillReceiveProps(val){
  //   console.log("val:",val);
  //   // return
  // }
  // constructor(){
  //   super()
    
  // }
  // static getDerivedStateFromProps(val) {
  //   console.log('val:', val)
  //   return {}
  // }
  render() {
    console.log(11111111111111);
    return (
      <div>
        <h2>我是子组件</h2>
      </div>
    )
  }
}
export default class Father extends Component {
  constructor(props){
    super(props)
    this.state={
      num: 0,
    }
  }
  //getDerivedStateFromProps替代原来的componentWillReceiveProps的钩子
  static getDerivedStateFromProps(props, state) {
    console.log(props,state);
    return {num: state.num };
  }
  render() {
    return (
      <div>
        <h1>{this.state.num}</h1>
        <button
          onClick={()=>{
            this.setState({
              num:this.state.num+1
            })
          }}
        >
          改变num
        </button>
        {/* <Son num={this.state.num}></Son> */}
      </div>
    )
  }
}
