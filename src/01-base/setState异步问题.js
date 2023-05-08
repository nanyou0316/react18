import { Component } from 'react'
import { flushSync } from 'react-dom'
class SetStateYiBu extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     total: 0,
  //   }
  // }
  state = {
    total: 1,
  }

  render() {
    return (
      <div>
        {this.state.total}
        <button onClick={this.changeTotal1}>异步改变total</button>
        <button onClick={this.changeTotal2}>同步改变total</button>
      </div>
    )
  }
  changeTotal1 = () => {
    this.setState({
      total: this.state.total + 1,
    })
    console.log(this.state.total)
    this.setState({
      total: this.state.total + 1,
    })
    console.log(this.state.total)
    this.setState({
      total: this.state.total + 1,
    })
    console.log(this.state.total)
  }
  changeTotal2 = () => {
    // 18之前这样写是可以的，18以后要借助flushSync，引入这个 flushSync  从react-dom中
    //    setTimeout(() => {
    //    this.setState({total: this.state.total + 1});
    //    console.log(this.state.total); // 输出2
    //    this.setState({total: this.state.total + 1});
    //    console.log(this.state.total); // 输出3
    //  }, 0);
    setTimeout(() => {
      flushSync(() => {
        this.setState({ total: this.state.total + 1 })
      })
      console.log(this.state.total) // 输出2
    }, 0)
    // (() => {
    //   flushSync(() => {
    //     this.setState({ total: this.state.total + 1 })
    //   })
    //   console.log(this.state.total) // 输出2
    // })()
  }
}
export default SetStateYiBu
