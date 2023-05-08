import React,{useState,useEffect} from 'react'
// useEffect 
// 作用：用于实现类组件声明周期钩子函数的特性
// 功能：类似componentDidMount,componentDidUpdate,componentWillUnMount
// 1.真是dom操作 2.清楚无用实例，定时器，事件
 function Children () {
    useEffect(()=>{
        return ()=>{
          console.log('我被销毁了');
        }
    })
    return <div>
        <h3>子组件</h3>
    </div>
}
export default function App() {
  const [count,setCount]=useState(1)
  const [val,setVal]=useState(1)
  const [flag,setFlag]=useState(true)
  function changeVal(e){
    setVal(e.target.value)
  }
  // 写法1
  // 相当于初始化就完成
  useEffect(()=>{
    console.log('执行了');
    document.querySelector('p').style.background='red'
  },[])
  // 写法2
  // 可以监听数据
  useEffect(()=>{
    console.log('count发生了改变');
  },[count])
  // 写法3
  // 监听所有数据
  useEffect(()=>{
    console.log('有数据发生了改变');
  })
  // 写法4
  // 相当于销毁钩子
  // useEffect(()=>{
  //   return ()=>{     
  //   }
  // })
  return (
    <div>
      <p>hello react</p>
      <div>
        <button
          onClick={() => {
            setCount((oldVal) => oldVal + 1)
          }}
        >
          +
        </button>
        <span>{count}</span>
      </div>
      <div>
        <input type="text" value={val} onChange={changeVal}></input>
      </div>
      <button onClick={()=>{setFlag(!flag)}}>写法4用于销毁</button>
      {flag && <Children />}
    </div>
  )
}
