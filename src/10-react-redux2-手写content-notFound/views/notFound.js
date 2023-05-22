import React, { Component } from 'react'

class NoFound extends Component {
  render() {
    console.log("this.props:",this.props);
    return (
      <div>404 NOT FOUND</div>
    )
  }
}
function myContent(callback,obj){
  var value=callback()
  return (Component)=>{
    // 下面的一行return是返回一个函数式组件
    return (props)=>{//props是原来Route包裹的路由信息
      return <div style={{color:'pink'}}>
        <Component {...value} {...props} {...obj}></Component>
      </div>
    }
  }
}
export default  myContent(()=>{
  return {
    a:1,
    b:2
  }
},{func1(){},func2(){}})(NoFound)
