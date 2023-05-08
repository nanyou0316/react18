import React, { Component, Fragment } from 'react'
class Field extends Component {
  render(){
    return <Fragment>
      <label>{this.props.label}</label>
      <input type={this.props.type} value={this.props.currentValue} onChange={this.props.onChangeEvent}></input>
    </Fragment>
  }
}
export default class FormProps extends Component {
  state={
    username:'123',
    password:'22'
  }
  render() {
    return (
      <div>
        <Field label='用户名' type="text" currentValue={this.state.username} onChangeEvent={(e)=>{this.setState({
           username:e.target.value
        })}}></Field>
        <Field label='密码' type="password" currentValue={this.state.password} onChangeEvent={(e)=>{this.setState({
          password:e.target.value
        })}}></Field>
      </div>
    )
  }
}
