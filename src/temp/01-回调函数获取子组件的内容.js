import React, { Component } from 'react'

export default class Demo extends Component {
  sonRef=null
  render() {
    return (
      <div>Demo
        <Son cb={(el)=>{this.sonRef=el}}></Son>
        <button onClick={()=>{
          console.log(this.sonRef);
          this.sonRef.current.focus()
          this.sonRef.current.value=''
        }}>改变子组件的内容</button>
      </div>
    )
  }
}
class Son extends Component{
  inputRef=React.createRef()
  componentDidMount() { 
    this.props.cb(this.inputRef)
   }
  render () {
    return <div>
      <input ref={this.inputRef} defaultValue="123456"></input>
    </div>
  }
}
