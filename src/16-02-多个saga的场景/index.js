import React, { Component } from 'react'
import store from './redux/store'
export default class Demo extends Component {
  state={
    list:[]
  }
  componentDidMount() { 
     store.subscribe(()=>{
      this.setState({
        list:store.getState().list
      })
     })
   }
  render() {
    return (
      <div>
        <button onClick={()=>{
          console.log('store.getState():',store.getState());
          if(store.getState().list.length===0){
            store.dispatch({
              type:'get-list1'
            })
          } else {
            console.log("缓存取数据");
            this.setState({
              list:store.getState().list
            })
          }
        }}>redux-saga异步获取数据</button>
        <ul>
          {
            this.state.list.map((item,index)=><li key={index}>{item}</li>)
          }
        </ul>
      </div>
    )
  }
}
