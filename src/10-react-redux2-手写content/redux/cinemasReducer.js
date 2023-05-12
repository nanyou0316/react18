
const initState = {
  list: [],
}
export const reducer = (prevState = initState, action = {}) => {
  let newValue = { ...prevState }
  const { type } = action
  switch (type) {
    case 'list-change':
      newValue.list=action.payload
      return newValue
    default:
      return prevState
  }
}
