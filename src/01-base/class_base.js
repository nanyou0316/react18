import React from 'react'
import { Component } from 'react'
class ClassApp extends Component {
  // myState ={
  //   name:"zhangsan"
  // }
  constructor() {
    super()
    this.myState = {
      name: 'lisi',
      age: '<div><b>1234566</b></div>',
    }
  }
  render() {
    return (
      <div style={{ color: 'blue' }}>
        {this.myState.name}
        <div
          dangerouslySetInnerHTML={{
            __html: this.myState.age,
          }}
        ></div>
      </div>
    )
  }
}
export default ClassApp
