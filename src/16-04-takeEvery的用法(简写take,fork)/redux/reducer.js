const init={
  list:[]
}
const reducer=(prevState=init,action={})=>{
  console.log("action:",action);
  var newState={...prevState}
  const {type,payload}=action
  switch (type) {
    case 'change-list1':
      console.log('最后走到我这里。。。。。。。。。。。。。。');
      newState.list=payload
      return newState
  
    default:
      return prevState
  }
}
export default reducer