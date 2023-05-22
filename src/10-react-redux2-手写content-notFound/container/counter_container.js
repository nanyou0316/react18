import Counter from '../views/counter'
import { connect } from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../redux/redux/actions_creators'
//!完整写法
// function mapStateToProps(state){
//   return {count:state}

// }
// function mapDispatchToProps(dispatch){
//   return {
//     // increment: () => { alert(1) },
//     increment:(value)=>{dispatch(createIncrementAction(value))},
//     decrement:(value)=>{dispatch(createDecrementAction(value))}
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
//!简写  connect里面可以返回另两个参数：组件需要的1.数据(要通过函数返回)和2.方法，第一个没有就写null
export default connect((state) => ({ count: state.count }), {
  increment: createIncrementAction,
  decrement: createDecrementAction,
  incrementAsync: createIncrementAsyncAction,
})(Counter)

