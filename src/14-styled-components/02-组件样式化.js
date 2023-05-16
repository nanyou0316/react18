


import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
export default class Index extends Component {
  
  render() {
    const StyledSon = styled(Son)`
      background:pink;
    `
    return (
      <div>
        <h1>组件样式化</h1>
        <StyledSon></StyledSon>
      </div>
    )
  }
}
class Son extends Component {
  render(){
    return <Fragment>
      <div className={this.props.className}>son组件</div>
    </Fragment>
  }
}