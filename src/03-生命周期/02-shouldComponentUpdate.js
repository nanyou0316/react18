import React, { Component } from 'react'

class Box extends Component {
  state={
    num:1
  }
  shouldComponentUpdate(nvProps) {
    if (
      this.props.current === this.props.index ||
      nvProps.current === nvProps.index
    ) {
      // this.setState({
      //   num:this.state.num++
      // })
      // shouldComponentUpdate不能做是setState操作
      return true
    } else {
      return false
    }
  }
  render() {
    console.log(111111)
    return (
      <li
        style={{
          width: '100px',
          height: '100px',
          boxSizing: 'border-box',
          listStyle: 'none',
          float: 'left',
          border:
            this.props.index === this.props.current
              ? '5px solid red'
              : '1px solid gray',
        }}
      >
        {this.props.item}
      </li>
    )
  }
}

export default class App extends Component {
  state = {
    current: 0,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  }
  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.index}
          onChange={(e) => {
            this.setState({
              current: e.target.value * 1,
            })
          }}
        ></input>
        <br></br>
        <div>
          <ul>
            {
              //  this.state.list.map((item,index)=><Box key={index} item={item} index={index} current={this.state.current}></Box>)
              this.state.list.map((item, index) => (
                <Box
                  key={index}
                  item={item}
                  index={index}
                  current={this.state.current}
                ></Box>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}
