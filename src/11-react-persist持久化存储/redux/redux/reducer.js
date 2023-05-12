import { INCREMENT, DECREMENT } from './action_types'
const initState = 0
export  function reducer(preState = initState, action) {
  console.log('-----reducer调用了------', action)
  let newState=JSON.parse(JSON.stringify(preState))
  let { type, data } = action
  
  switch (type) {
      case INCREMENT:
      newState = newState + data
      return newState
      case DECREMENT:
      newState = newState - data
      return newState
    default:
      return preState
  }
  
}
