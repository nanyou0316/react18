import { observable, configure, action } from 'mobx'
configure({
  // enforceActions:'never'
  enforceActions: 'always',
})
class Store {
  // @observable num=0

  // @action changeNum() {
  //   this.num++
  // }
} 
export default new Store()
