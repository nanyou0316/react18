const initState = {
  show:true
}
export  const reducer= (prevState=initState,action={})=>{
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
