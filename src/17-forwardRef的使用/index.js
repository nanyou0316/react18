import React, { Component, forwardRef } from 'react'

export default class Demo extends Component {
  sonRef = React.createRef()
  render() {
    return (
      <div>
        Demo
        <Son ref={this.sonRef}></Son>
        <button onClick={() => {
          this.sonRef.current.focus()
          this.sonRef.current.value=''
        }}>改变子组件的内容</button>
      </div>
    )
  }
}
// class Son extends Component {
//   render() {
//     return (
//       <div>
//         <input defaultValue="123456"></input>
//       </div>
//     )
//   }
// }
/*
    forwardRef:只能运用在函数组件上
*/
const Son = forwardRef((props, ref) => {
  return <div>
    <input ref={ref} defaultValue='111111111'></input>
  </div>
})
