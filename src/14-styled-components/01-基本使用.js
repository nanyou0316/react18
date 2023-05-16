import React, { Component } from 'react'
import styled from 'styled-components'
export default class Index extends Component {
  
  render() {
    const StyledDiv = styled.div`
      background:${props=>props.bg};
      text-align:center;
      ul {
        display:flex;
        margin:0;
        padding:0;
        li{
          flex:1;
          list-style:none;
        }
      }`
    return (
      <div>
        <h1>styled-components使用</h1>
        <StyledDiv bg='red'>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </StyledDiv>
      </div>
    )
  }
}