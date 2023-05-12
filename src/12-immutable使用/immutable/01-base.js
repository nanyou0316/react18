import React, { Component } from 'react'
import ListComp from './02-list'
import FromJs from './03-fromJS'
import { Map } from 'immutable'
// var obj={
//   name:'zhnagsan',
//   age:18
// }
// var obj1=Map(obj)
// console.log("obj1",obj1);
// var obj2=obj1.set('name','xiaoming')//设置数据
// console.log("obj1",obj1);
// console.log("obj2",obj2);
// console.log("get:",obj2.get('name'));
export default class App extends Component {
  state = {
    info: Map({
      a: 1,
      b: 2,
      c: Map({
        d: 3,
        e: 4,
        f:undefined
      }),
    }),
  }
  render() {
    return (
      <div>
        <h1>immutable使用</h1>
        <h1>{this.state.info.get('a')}</h1>
        <button onClick={()=>{
          this.setState({
            info:this.state.info.set("a",this.state.info.get('a')+1)
          })
        }}>改变a的值</button>
        <Son c={this.state.info.get('c')}></Son>
        <ListComp></ListComp>
        <FromJs></FromJs>
      </div>
    )
  }
}
class Son extends Component {
  shouldComponentUpdate(nextProps, nextState) { 
    if(this.props.c===nextProps.c){
      return false
    }
    return true
   }
  render() {
    const { c } = this.props
   
    return (
      <div>
        {
          Object.keys(c.toJS()).map(item=><li key={item}>{item}</li>)
        }
      </div>
    )
  }
}
