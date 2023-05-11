import React, { Component } from 'react'
import axios from 'axios'

// import { NavLink } from 'react-router-dom/cjs/react-router-dom'
export default class User1 extends Component {
  state={
    list:[]
  }
  
  componentDidMount() {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=330100&pageNum=1&pageSize=10&type=1&k=9024294',
      method: 'get',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16833584094408599245750273","bc":"330100"}',
        'X-Host': 'mall.film-ticket.film.list',
      },
    }).then(res=>this.setState({
      list:res.data.data.films
    }))
  }
  goDetail(id){
    this.props.history.push(`/detail/${id}`)
  }
  render() {
    return <div>
      <ul style={{overflow:'hidden'}}>
        {
          // this.state.list.map(item=><NavLink to={'/detail/'+item.filmId}><li key={item.filmId} style={{float:'left'}}>
          //   <img style={{width:'100px'}} alt={item.name} src={item.poster}></img>
          //   <p>{item.name}</p>
          //   </li></NavLink>)
          this.state.list.map(item=><li key={item.filmId} style={{float:'left'}} onClick={()=>this.goDetail(item.filmId)}>
            <img style={{width:'100px'}} alt={item.name} src={item.poster}></img>
            <p>{item.name}</p>
            </li>)
        }
      </ul>
    </div>
  }
}
