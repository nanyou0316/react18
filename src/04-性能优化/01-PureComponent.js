import React, { Fragment,PureComponent } from 'react'

export default class App extends PureComponent {
  state={
    num:0
  }
  componentDidUpdate(){
    console.log("更新了");
  }
  render() {
    let {num} =this.state
    return (<Fragment>
       <div>{num}</div>
      <button onClick={()=>{
        this.setState({
                num:11111
            })
      }}>更改num</button>
    </Fragment>
     
    )
  }
}
