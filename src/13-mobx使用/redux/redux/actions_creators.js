//*创建increment的action
// !完整写
// function createIncrementAction(value){
//     return { type: 'increment', data: value }
// }
import {INCREMENT,DECREMENT} from './action_types'
//*简写
export const createIncrementAction = value => ({ type: INCREMENT, data: value })
export const createDecrementAction = value => ({type:DECREMENT,data:value})
//!这是异步的
export const createIncrementAsyncAction = (value, delay) => {
    return (dispatch)=>{
        //*这里面是一个函数
        setTimeout(()=>{
            dispatch(createIncrementAction(value))
        },delay)
    }
}