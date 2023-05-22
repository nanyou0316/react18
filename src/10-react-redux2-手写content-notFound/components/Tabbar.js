import React, { Component } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import style from './tabbar.modelu.css'
export default class Tabbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to='/user' activeClassName={style.active}>用户</NavLink>
            
          </li>
          <li>
            <NavLink to='/home' activeClassName={style.active}>中心</NavLink>
            
          </li>
          <li>
            <NavLink to='/cinemas' activeClassName={style.active}>影院</NavLink>
            
          </li>
        </ul>
      </div>
    )
  }
}
