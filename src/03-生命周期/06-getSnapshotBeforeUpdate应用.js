import React, { Component } from 'react'

export default class App extends Component {
  state={
    list:[1,2,3,4,5,6,7,8,9]
  }
  getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate:",this.boxRef.scrollHeight);
    return this.boxRef.scrollHeight
  }
  componentDidUpdate(preProps,PreStates,value){
    console.log("value:",value);
    console.log("componentDidUpdate:",this.boxRef.scrollHeight);
    this.boxRef.scrollTop+=this.boxRef.scrollHeight-value
  }
  render() {
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            list:[...[11,12,13,14,15,16,17,18,19],...this.state.list]
          })
        }}>修改list</button>
        <div style={{height:"150px",backgroundColor:'pink',overflow:"auto"}} ref={el=>this.boxRef=el}>
          <ul>
            {
              this.state.list.map((item,index)=><li style={{height:'30px'}} key={index}>{item}</li>)
            }
          </ul>
        </div>
      </div>
    )
  }
}
