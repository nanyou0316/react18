import React, { Component } from 'react'
const GlobalContext = React.createContext()
class Son extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {(value) => {
          return (
            <div>
              <h1>我是弟弟</h1>
              <b>{value.msg}</b>
            </div>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}

class Sister extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {(value) => {
          return (
            <div>
              <h1>我是姐姐</h1>
              <button
                onClick={() => {
                  value.changeMsg('姐姐打来了一巴掌')
                }}
              >
                打弟弟
              </button>
            </div>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}

export default class Father extends Component {
  state = {
    msg: '来打我呀',
  }
  render() {
    return (
      <GlobalContext.Provider
        value={{
          msg: this.state.msg,
          changeMsg: (nv) =>
            this.setState({
              msg: nv,
            }),
        }}
      >
        <div>
          <Son></Son>
          <Sister></Sister>
        </div>
      </GlobalContext.Provider>
    )
  }
}
