import React from 'react'
import classes from './Cases.module.css'
import {Field, ErrorMessage} from 'formik';
import TextError from '../TextError';
const Input = (props) => {
    const {label, name, ...rest} = props;
  return (
    <div className={classes.formControl}>
    <label htmlFor={name}>{label}</label>
    <Field id={name} name={name} {...rest}/>
    <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Input