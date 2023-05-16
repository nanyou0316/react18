

import React, { Component, Fragment } from 'react'
import styled,{keyframes} from 'styled-components'
export default class Index extends Component {
  render() {
    const rotate360=keyframes`
      from{
        transform:rotate(0deg);
      }
      to{
        transform:rotate(360deg);
      }
    `
    const StyledDiv = styled.div`
      width: 100px;
      height: 100px;
      background: pink;
      animation:${rotate360} 1s linear infinite;
    `
    return (
      <StyledDiv>
        app
      </StyledDiv>
    )
  }
}
