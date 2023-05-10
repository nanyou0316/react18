import React, { Component } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import './tabbar.css'
export default class Tabbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to='/user' activeClassName='active'>用户</NavLink>
            
          </li>
          <li>
            <NavLink to='/home' activeClassName='active'>中心</NavLink>
            
          </li>
        </ul>
      </div>
    )
  }
}
