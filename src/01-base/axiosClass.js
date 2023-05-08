import { Component } from 'react'
import axios from 'axios'
class AxiosClass extends Component {
  constructor() {
    super()
    this.state = {
      filesArr: [],
    }
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=330100&pageNum=1&pageSize=10&type=1&k=9024294',
      method: 'get',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16833584094408599245750273","bc":"330100"}',
        'X-Host': 'mall.film-ticket.film.list',
      },
    }).then(
      (res) =>{
        this.setState({
          filesArr: res.data.data.films
        })
      }
        
    )
  }
  render() {
    return (
      <div>
        <ul>
        {
          this.state.filesArr.length&&this.state.filesArr.map((item,index)=><li key={index}>{item.name}</li>)
        }
       </ul>
      </div>
    )
  }
}
export default AxiosClass
