import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
export default class Index extends Component {
  render() {
    const StyledButton = styled.button`
      width: 100px;
      height: 100px;
      background: pink;
    `
    const StyledButton1=styled(StyledButton)`
      background:red;
    `
    const StyledButton2=styled(StyledButton)`
      background:green;
    `
    return (
      <div>
        <h1>样式继承</h1>
        <StyledButton></StyledButton>
        <StyledButton1></StyledButton1>
        <StyledButton2></StyledButton2>
      </div>
    )
  }
}
