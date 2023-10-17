import React from "react";
import classes from './FormikContainer.module.css'
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";
const FormikContainer = () => {
  const initialValues = {
    email:''
  };
  const validationSchema = Yup.object({
    email:Yup.string().required("Required")
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
        <FormikControl control='input' type='email' label="Email" name='email'/>
          <button className={classes.submit} type="submit">SUBMIT</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
