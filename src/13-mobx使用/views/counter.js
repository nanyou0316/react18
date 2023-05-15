import React, { Component } from 'react'
// import { createIncrementAction, createDecrementAction } from './redux/actions_creators'
export default class Counter extends Component {

  //*加法
  increment = () => {
    let value = this.selectNumber.value
    console.log(this.selectNumber.value)
    this.props.increment(value * 1)
  }
  //*减法
  decrement = () => {
    let value = this.selectNumber.value
    this.props.decrement(value * 1)
  }
  incrementIfOdd = () => {
    let value = this.selectNumber.value

    const { count } = this.props
    if (count % 2 === 1) {
      this.props.increment(value * 1)
    }
  }
  incrementAsync = () => {
    let value = this.selectNumber.value
    this.props.incrementAsync(value * 1, 1000)
    // setTimeout(() => {
    //     this.props.increment(value * 1)
    // }, 1000)
  }
  render() {
    const {  count } = this.props
    return (
      <div>
        <h3>当前计数为{count}</h3>
        <select
          ref={(el) => {
            this.selectNumber = el
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>incrementIfOdd</button>&nbsp;
        <button onClick={this.incrementAsync}>incrementAsync</button>&nbsp;
      </div>
    )
  }
}
