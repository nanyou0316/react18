import {take,fork,call,put} from 'redux-saga/effects'
function *watchSaga(){
  while(true){
    /*
      take:监听组件发来的action
      fork:同步执行异步处理函数（非阻塞式执行）
    */ 
   yield take('get-list')
   yield fork(getList)
  }
}
function *getList(){
  console.log(1);
  //处理异步的
  //call函数发出异步请求
  let res=yield call(getListAction)//call(返回值是promise对象的函数)，阻塞式执行
  //put函数发出新的action,走到reducer里面去处理
  yield put({
    type:'change-list',
    payload:res
  })
}
function getListAction(){
  //这里可以发异步请求
  console.log(2);
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve([1,2,3,4,5,6])
    },2000)
  })
}
export default watchSaga