import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
// import App from './01-base/class_base'
// import App from './01-base/fnuction_base'
// import App from './01-base/事件this问题'
// import App from './01-base/axiosClass'
// import App from './01-base/setState异步问题'
// import App from './01-base/非受控组件'
// import App from './01-base/受控组件'
// import App from './01-base/受控组件应用'
// import App from './02-组件通信/表单版组件通信'
// import App from './02-组件通信/表单版组件通信-ref'
// import App from './01-base/props'
// import App from './02-组件通信/发布订阅'
// import App from './02-组件通信/context'
// import App from './02-组件通信//插槽'
// import App from './03-生命周期/01-生命周期'
// import App from './03-生命周期/02-shouldComponentUpdate'
// import App from './03-生命周期/03-getDerivedStateFromProps'
// import App from './03-生命周期/04-componentDidUpdate'
// import App from './03-生命周期/05-getSnapshotBeforeUpdate'
// import App from './03-生命周期/06-getSnapshotBeforeUpdate应用'
// import App from './04-性能优化/01-PureComponent'
// import App from './05-hooks/01-useState'
// import App from './05-hooks/02-useEffect'
// import App from './05-hooks/03-useCallback'
// import App from './05-hooks/04-useMemo'
// import App from './05-hooks/05-useRef'
// import App from './05-hooks/05-useRef-保存值使用'
// import App from './05-hooks/06-useContext'
// import App from './05-hooks/07-useReducer'
// import App from './05-hooks/07-useReducer/07-useReducer组件传值'
// import App from './05-hooks/07-useReducer-useContext/07-useReducer组件传值'
// import App from './05-hooks/07-useReducer-useContext-01/07-useReducer组件传值'
import App from './06-router/index'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
    <App></App>
  // </React.StrictMode>

  // React.createElement(
  //   'div',
  //   { id: 'aaa', className: 'bbb' },
  //   'div标签',
  //   React.createElement(
  //     'div',
  //     { id: 'id' },
  //     '链接',
  //     React.createElement(
  //       'ul',
  //       { className: 'ul' },
  //       React.createElement('li', { className: 'li' }, '1'),
  //       React.createElement('li', { className: 'li' }, '2'),
  //       React.createElement('li', { className: 'li' }, '3'),
  //       React.createElement('li', { className: 'li' }, '4'),
  //       React.createElement('li', { className: 'li' }, '5'),
  //       React.createElement('li', { className: 'li' }, '6'),
  //     )
  //   ),
  //   React.createElement('div', { id: 'id' }, '链接')
  // )
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
