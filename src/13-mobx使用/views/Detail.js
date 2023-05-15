import React, { Component } from 'react'
import axios from 'axios'
import {store} from '../redux/store'
export default class Detail extends Component {
  state={
    info:{}
  }
  componentDidMount() {
    store.dispatch({
      type:'hide-tabbar'
     })
    
    // console.log(this.props.match.params.id);
    const id=this.props.match.params.id
    axios({
      url: 'https://m.maizuo.com/gateway?filmId='+id+'&k=7004210',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16833584094408599245750273","bc":"340800"}',
        'X-Host': 'mall.film-ticket.film.info',
      },
    }).then(res=>{
      this.setState({
        info:res.data.data.film
      })
    })
    
  }
  componentWillUnmount(){
     store.dispatch({
      type:'show-tabbar'
     })
  }
  render() {
    const {info} =this.state
    return <div>
      <img style={{width:'200px'}} alt={info.poster} src={info.poster}></img>
      <p>{info.synopsis}</p>
    </div>
  }
}
