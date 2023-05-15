//*1.状态
const userState = {
  userInfo: {
    name: 'zhangsan',
    age: 13,
  },
}
//*2.actions

const GET_USER_INFO='get_user_info'
export const actions = {
  getUserInfo() {
    //*如果没有数据请求，我们在actions中的方法，值用来创建动作
    //!有数据请求用dispatch
    //! return (dispatch)=>{
    //!   dispatch(function(){})
    //! }
    return {
      type: GET_USER_INFO,
    }
  },
}
//*3.reducer
export const reducer = (state = userState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  const { type } = action
  switch (type) {
    case GET_USER_INFO:
      newState.name='lisi'
      break
    default:
      break
  }
  return newState
}
