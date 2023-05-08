import React, { Component, Fragment } from 'react'
class Field extends Component {
  state={
    val:''
  }
  clear(){
    this.setState({
      val:''
    })
  }
  render(){
    return <Fragment>
      <label>{this.props.label}</label>
      <input type={this.props.type} value={this.state.val} onChange={(e)=>{this.setState({
        val:e.target.value
      })}}></input>
    </Fragment>
  }
}
export default class FormProps extends Component {
  // usernameRef=React.createRef()
  // passwordRef=React.createRef()
  // render() {
  //   return (
  //     <div>
  //       <Field label='用户名' type="text" ref={this.usernameRef}></Field>
  //       <Field label='密码' type="password" ref={this.passwordRef}></Field>
  //       <button onClick={()=>{console.log(this.usernameRef.current.state.val,this.passwordRef.current.state.val);}}>提交</button>
  //       <button onClick={()=>{
  //         this.usernameRef.current.clear()
  //         this.passwordRef.current.clear()
  //       }}>取消</button>
  //     </div>
  //   )
  // }
  render() {
    return (
      <div>
        <Field label='用户名' type="text" ref={(el)=>this.usernameRef=el}></Field>
        <Field label='密码' type="password" ref={(el)=>this.passwordRef=el}></Field>
        <button onClick={()=>{console.log(this.usernameRef.state.val,this.passwordRef.state.val);}}>提交</button>
        <button onClick={()=>{
          this.usernameRef.clear()
          this.passwordRef.clear()
        }}>取消</button>
      </div>
    )
  }
}
