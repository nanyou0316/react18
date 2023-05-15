import React, { Component } from 'react'
import MyRoute from './route'
import Tabbar from './components/Tabbar'
import {store} from './redux/store'
export default class App extends Component {
  state = {
    show: store.getState(),
  }
  componentDidMount() {
    store.subscribe(() => {
      console.log('我被订阅了', store.getState())
      this.setState({
        show: store.getState().showHideTabbar.show,
      })
    })
  }
  render() {
    return (
      <div>
        <MyRoute>{this.state.show && <Tabbar />}</MyRoute>
      </div>
    )
  }
}
