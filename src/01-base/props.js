import { Component } from 'react'
import propType from 'prop-types'
class Props extends Component {
  
  static propTypes = {
    msg: propType.string,
  }
  render() {
    let { msg } = this.props
    return (
      <div>
        {msg}
        <button onClick={this.changeMsg}>改变props数据</button>
      </div>
    )
  }
  changeMsg = () => {
    console.log(this.props.msg)
  }
}
// Props.propTypes={
//   msg:propType.number
// }
// 默认值
// Props.defaultProps ={
//   属性:属性值
// }
export default Props
