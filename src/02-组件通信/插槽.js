import React, { Component } from 'react'

class Son extends Component {
  render() {
    return (
      <div>
        <h2>子组件</h2>
        {this.props.children}
      </div>
    )
  }
}

export default class Father extends Component {
  render() {
    return (
      <div>
        <h1>Father组件</h1>
        <Son>
          <div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>
        </Son>
      </div>
    )
  }
}
