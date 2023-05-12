import React from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import User1 from './user/user1'
import User2 from './user/user2'
import NoFound from './notFound'
export default function User() {
  return (
    <div>
      <h1 style={{height:'100px',width:'100%',background:'pink'}}>user</h1>
      
          <Switch>
            <Route path='/user/user1' component={User1}></Route>
            <Route path='/user/user2' component={User2}></Route>
            <Redirect path='/user' to='/user/user1' exact></Redirect>
            <Route component={NoFound}></Route>
          </Switch>
    </div>
  )
}
