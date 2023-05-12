import { INCREMENT, DECREMENT } from './action_types'
const initState = 0
export  function reducer(preState = initState, action) {
  console.log('-----reducer调用了------', action)
  let { type, data } = action
  let newState
  switch (type) {
      case INCREMENT:
      newState = preState + data
      return newState
      case DECREMENT:
      newState = preState - data
      return newState
    default:
      return preState
  }
  
}
