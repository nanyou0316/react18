import React, { Component } from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import Home from './views/home'
import User from './views/user'
import NoFound from './views/notFound'
export default class MyRoute extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/user" component={User}></Route>
            <Redirect path="/" to="/home" exact></Redirect>
            <Route path="" component={NoFound}></Route>
          </Switch>
          {this.props.children}
        </HashRouter>
      </div>
    )
  }
}
