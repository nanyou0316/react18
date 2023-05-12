import React, {useState, useEffect } from 'react'
import axios from 'axios'
import store from '../redux/store'
// function myAsnyc(){
//       return  axios({
//         url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=6513565',
//         method: 'get',
//         headers: {
//           'X-Client-Info':
//             '{"a":"3000","ch":"1002","v":"5.2.1","e":"16833584094408599245750273"}',
//           'X-Host': 'mall.film-ticket.cinema.list',
//         },
//       }).then((res) => {
//         console.log("res:",res);
//         return {
//           type:'list-change',
//           payload:res.data.data.cinemas
//         }
//       })
// }
async function myAsnyc(){
      let obj= await axios({
        url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=6513565',
        method: 'get',
        headers: {
          'X-Client-Info':
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"16833584094408599245750273"}',
          'X-Host': 'mall.film-ticket.cinema.list',
        },
      }).then((res) => {
        console.log("res:",res);
        return {
          type:'list-change',
          payload:res.data.data.cinemas
        }
      })
      return obj
}
export default function Cinemas() {
  const [arr,setArr] =useState(store.getState().cinemasReducer.list)
  useEffect(()=>{
    console.log(store.getState().cinemasReducer.list)
    if(store.getState().cinemasReducer.list.length===0){
      store.dispatch(myAsnyc())
    } else {
      console.log("走缓存拿数据。。。。。。。。。。。。");
    }
    const unsubscribe= store.subscribe(()=>{
      setArr(store.getState().cinemasReducer.list)
    })
    return ()=>{
      unsubscribe()
    }
  },[])
  return (
    <div>
      <ul>
        {
          arr.map(item=><li key={item.cinemaId}>
            <p>{item.name}</p>
            <p>{item.address}</p>
            </li>)
        }
      </ul>
    </div>
  )
}
