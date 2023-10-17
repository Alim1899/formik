import React from 'react'
import classes from './Cases.module.css'
import {Field, ErrorMessage} from 'formik';
import TextError from '../TextError';
const Checkbox = (props) => {
    const {label, name, ...rest} = props;
  return (
    <div className={classes.formControl}>
    <label htmlFor={name}>{label}</label>
    <Field as='checkbox' id={name}  name={name} {...rest}/>
    <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Checkbox