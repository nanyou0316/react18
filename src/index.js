import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
// import App from './temp/index'
import App from './05-hooks/08-mome'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
 
    <App />


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
