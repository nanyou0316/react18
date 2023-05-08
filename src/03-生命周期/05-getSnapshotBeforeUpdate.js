import React, { Component } from 'react'

export default class App extends Component {
  state={
    num:1
  }
  getSnapshotBeforeUpdate(){
    return 100
  }
  componentDidUpdate(preProps,PreStates,value){
    console.log(preProps,PreStates);
    console.log("value:",value);
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
