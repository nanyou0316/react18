import React, { Component } from 'react'
import axios from 'axios'
export default class User2 extends Component {
  state={
    list:[]
  }
  componentDidMount(){
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=6513565',
      method: 'get',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16833584094408599245750273"}',
        'X-Host': 'mall.film-ticket.cinema.list',
      },
    }).then(res=>this.setState({
      list:res.data.data.cinemas
    }))
  }
  render() {
    return (
      <div><ul>
        {
          this.state.list.map(item=><li key={item.filmId}>
            <p>{item.name}</p>
            <p>{item.address}</p>
            </li>)
        }
      </ul></div>
    )
  }
}
