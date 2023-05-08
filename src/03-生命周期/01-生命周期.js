import React, { Component} from 'react'
import axios from 'axios'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      filesArr: [],
    }
  }
  componentWillMount(){
    console.log(document.getElementById('demo'));
  }
  componentDidMount() {
    console.log(document.getElementById('demo'));
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=330100&pageNum=1&pageSize=10&type=1&k=9024294',
      method: 'get',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16833584094408599245750273","bc":"330100"}',
        'X-Host': 'mall.film-ticket.film.list',
      },
    }).then((res) => {
      console.log(res);
      this.setState({
        filesArr: res.data.data.films,
      })
    })
  }
  render() {
    return <div id='demo'>App</div>
  }
}
