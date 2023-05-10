import React, { Fragment,memo } from 'react'

export default  memo((props)=>{
  return (<Fragment>
    {props.getLi()}
  </Fragment>)
    
  
})
