import React, { Component } from 'react'
import CounterContainer from '../container/counter_container'
import axios from 'axios'
export default class Home extends Component {
  state={
    list:[]
  }
  componentDidMount() {
    axios.get('/ajax/mostExpected?limit=10&offset=0&token=&optimus_uuid=8B2EE4B0EFC711EDB0DF8B77BE30BED0E3BD73FE1CF847A4A6209AA27FD9DAF1&optimus_risk_level=71&optimus_code=10'
    ).then((res) => {
      this.setState({
        list:res.data.coming
      })
    })
  }
  render() {
    return <div>
      <h1>home中的内容</h1>
      <CounterContainer></CounterContainer>
      <ul>
        {/* {this.state.list.map(item=><li key={item.title}>
          <img src={item.url} alt={item.title}></img>
          <p>{item.title}</p>
        </li>)} */}
      </ul>
    </div>
  }
}
