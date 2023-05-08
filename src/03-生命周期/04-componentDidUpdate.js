import React, { Component } from 'react'

export default class App extends Component {
  state={
    num:1
  }
  componentDidUpdate(preProps,PreStates){
    console.log(preProps,PreStates);
    // this.setState({
    //   num:11111
    // })
    // componentDidUpdate不能使用setState修改数据
  }
  render() {
    return (
      <div>
        <h1>{this.state.num}</h1>
        <button onClick={()=>{
          this.setState({
            num:this.state.num+1
          })
        }}>修改num</button>
      </div>
    )
  }
}
