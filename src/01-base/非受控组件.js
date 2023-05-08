import React, { Component } from 'react'

export default class FeiShouKongComponent extends Component {
  inputRef = React.createRef()
  render() {
    return (
      <div>
        <input defaultValue='sdf' ref={this.inputRef}></input>
        <button
          onClick={() => {
            console.log(this.inputRef.current.value)
          }}
        >
          确定
        </button>
        <button
          onClick={() => {
            this.inputRef.current.value = ''
          }}
        >
          重置
        </button>
      </div>
    )
  }
}
