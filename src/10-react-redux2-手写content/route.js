import React, { Component } from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Home from './views/home'
import User from './views/user'
import Detail from './views/Detail'
import Login from './views/login'
import Cinemas from './views/cinemas'
import NoFound from './views/notFound'
export default class MyRoute extends Component {
  isAuth(){
    return true
  }
  render() {
    return (
      <div>
        <Router>
          
          <Switch>
            {/* <Route path="/home" render={(props)=>{
              return this.isAuth()?<Home></Home>:<Login {...props}></Login>
            }}></Route> */}
            <Route path="/home" render={(props)=>{
              return this.isAuth()?<Home {...props}></Home>:<Redirect to="/login"></Redirect>
            }}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/user" component={User}></Route>
            <Route path="/cinemas" component={Cinemas}></Route>
            {/* path="/detail/:id"  动态路由 */}
            <Route path="/detail/:id" component={Detail}></Route>
            <Redirect path="/" to="/home" exact></Redirect>
            <Route path="" component={NoFound}></Route>
          </Switch>
          {this.props.children}
        </Router>
      </div>
    )
  }
}
