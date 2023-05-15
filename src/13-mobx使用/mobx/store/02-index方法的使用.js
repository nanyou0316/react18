import { observable, configure, action } from 'mobx'
configure({
  // enforceActions:'never'
  enforceActions: 'always',
})
const store = observable(
  {
    num: 1,
    // changeNum:()=>{}   等同下面
    changeNum() {
      this.num++
    },
  },
  {
    changeNum: action, //标记changeNum，专门修改num的方法
  }
)
export default store
