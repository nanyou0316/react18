import {legacy_createStore as createStore} from 'redux'
const initState = {
  show:true
}
const reducer= (prevState=initState,action={})=>{
  let newValue={...prevState}
  const {type} =action
  switch (type) {
    case 'show-tabbar':
      newValue.show=true
      return newValue
     case 'hide-tabbar':
      newValue.show=false
      return newValue
    default:
      return prevState
  }
}
const store = createStore(reducer)

// function createMyStore(reducer){
//   let state=reducer()
//   let list = []
//   function subscribe(callback){
//     list.push(callback)
//   }
//   function dispatch(action){
//     state=reducer(state,action)
//     for (var i in list) {
//       list[i]&&list[i]() 
//     }
//   }
//   function getState(){
//     return state
//   }
//   return {
//     subscribe,dispatch,getState
//   }
// }
// const store = createMyStore(reducer)
export default store