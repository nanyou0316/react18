import {call,put} from 'redux-saga/effects'
// function *watchSaga2(){
//   while(true){
//     /*
//       take:监听组件发来的action
//       fork:同步执行异步处理函数（非阻塞式执行）
//     */ 
//    yield take('get-list2')
//    yield fork(getList2)
//   }
// }
function *getList2(){
  console.log(1);
  //处理异步的
  //call函数发出异步请求
  let res=yield call(getListAction2)//call(返回值是promise对象的函数)，阻塞式执行
  //put函数发出新的action
  yield put({
    type:'change-list2',
    payload:res
  })
}
function getListAction2(){
  //这里可以发异步请求
  console.log(2);
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve([1,2,3,4,5,6])
    },2000)
  })
}
// export default watchSaga2
export {getList2} 