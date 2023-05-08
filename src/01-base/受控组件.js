import React, { Component } from 'react'

export default class FeiShouKongComponent extends Component {
  inputRef=React.createRef()
  state={
    val:'123'
  }
  render() {
    let {val} = this.state
    return (
      <div>
        <input value={val} onChange={this.valChange} ref={this.inputRef}></input>
        <button
          onClick={() => {
            console.log("this.inputRef.current.value:",this.inputRef.current.value);
            console.log("this.state.val:",this.state.val);

          }}
        >
          确定
        </button>
        <button
          onClick={() => {
            // this.inputRef.current.value=''
            this.setState({
              val:''
            })
          }}
        >
          重置
        </button>
      </div>
    )
  }
  valChange=(e)=>{
    console.log("e1:",e.target);
    this.setState({
      val:e.target.value
    })
    console.log("e2:",e.target);
  }
}
