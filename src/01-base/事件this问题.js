import React, { Component } from "react";
export default class ThisClick extends Component{
  a=100
  myRef=React.createRef()
  get1A(){
    console.log("get1A:",this.a);
  }
  get2A=()=>{
    console.log("get2A:",this.a);
  }
  render(){
    return <div>
      <input ref={this.myRef}></input>
      <button onClick={()=>{
        // console.log("按钮1",this.a);
        console.log("this.myRef",this.myRef.current.value);
      }}>按钮1</button>
      {/* 
         call:改变this指向并自动调用
         apply:改变this指向并自动调用,传递的参数是数组形式
         bind:改变this指向需要手动调用
      */}
      <button onClick={this.get1A.bind(this)}>按钮get1A</button>
      <button onClick={()=>{this.get2A()}}>按钮get2A</button>
    </div>
  }
}