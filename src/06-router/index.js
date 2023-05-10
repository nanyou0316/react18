import React, { Component } from 'react'
import MyRoute from './route'
import Tabbar from './components/Tabbar'
export default class App extends Component {
  render() {
    return (
      <div>
        <MyRoute>
          <Tabbar></Tabbar>
        </MyRoute>
      </div>
    )
  }
}
