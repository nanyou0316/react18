import React, { Component } from 'react'
import axios from 'axios'
export default class ShouKongComponentYingYong extends Component {
  constructor() {
    super()
    this.state = {
      val: '',
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
    }).then((res) => {
      this.setState({
        filesArr: res.data.data.films,
      })
    })
  }

  render() {
    let { val } = this.state
    return (
      <div>
        <input value={val} onChange={this.valChange}></input>
        <div>
          <ul>
            {
              this.getDetail().map(item=><li key={item.filmId}>{item.name}</li>)
            }
          </ul>
        </div>
      </div>
    )
  }
  valChange = (e) => {
    this.setState({
      val: e.target.value,
    })
  }
  getDetail(){
    return this.state.filesArr.filter(item=>item.name.toUpperCase().includes(this.state.val.toLowerCase()))
  }
}
