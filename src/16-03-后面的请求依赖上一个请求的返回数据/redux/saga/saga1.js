import { take, fork, call, put } from 'redux-saga/effects'
import axios from 'axios'
function* watchSaga1() {
  while (true) {
    /*
      take:监听组件发来的action
      fork:同步执行异步处理函数（非阻塞式执行）
    */
    yield take('get-list1')
    yield fork(getList1)
  }
}
function* getList1() {
  console.log(1)
  //处理异步的
  //call函数发出异步请求
  let res1 = yield call(getListAction1_1) //call(返回值是promise对象的函数)，阻塞式执行
  let res2 = yield call(getListAction1_2, res1) //call(返回值是promise对象的函数)，阻塞式执行
  //put函数发出新的action
  yield put({
    type: 'change-list1',
    payload: res2,
  })
}
function getListAction1_1() {
  //这里可以发异步请求
  console.log(2)
  return new Promise((resolve, reject) => {
    return axios({
      url: 'https://m.maizuo.com/gateway?cityId=330100&pageNum=1&pageSize=10&type=1&k=9024294',
      method: 'get',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16833584094408599245750273","bc":"330100"}',
        'X-Host': 'mall.film-ticket.film.list',
      },
    }).then((res) => resolve(res.data.data.films))
  })
}
function getListAction1_2(data) {
  //这里可以发异步请求

  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      let arr = [
      {
        name: 'xxx',
        poster:
          'https://img.zhisheji.com/bbs/forum/201401/05/153945tbr7pg5torfzptso.jpg',
      },
      {
        name: 'xxx',
        poster:
          'https://img.zhisheji.com/bbs/forum/201401/05/153945tbr7pg5torfzptso.jpg',
      },
    ]
    resolve([...data, ...arr])
    },2000)
  })
}
export default watchSaga1
