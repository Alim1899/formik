import React from 'react'
import classes from './Cases/Cases.module.css'
const TextError = (props) => {
  return (
    <div className={classes.error}>{props.children}</div>
  )
}

export default TextError