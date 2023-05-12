import React, { Component } from 'react'
import MyRoute from './route'
import Tabbar from './components/Tabbar'
// import store from './redux/store'
import { connect } from 'react-redux'
class App extends Component {
  
  
  
  render() {
    console.log("1111111111",this.props.show);
    return (
      <div>
        <MyRoute>{this.props.show && <Tabbar />}</MyRoute>
      </div>
    )
  }
}
export default connect((state)=>({
  show:state.showHideTabbar.show
}))(App)
