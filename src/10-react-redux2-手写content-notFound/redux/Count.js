//*1.状态
const initState={
    n:0
}
//*2.actions
const INCREMENT='increment'
export const actions ={
   increment(){
       //*如果没有数据请求，我们在actions中的方法，值用来创建动作
      return {
          type:INCREMENT
      }
   }
}
//*3.reducer
export const reducer = (state = initState, action) => {
  const newState = { ...state }
  const { type } = action
  switch (type) {
    case INCREMENT:
      newState.n++
      break

    default:
      break
  }
  return newState
}