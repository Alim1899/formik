import React from "react";
import classes from './FormikContainer.module.css'
import { Formik, Form } from "formik";
import * as Yup from "yup";
const FormikContainer = () => {
  const initialValues = {};
  const validationSchema = Yup.object({});
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
          <button className={classes.submit} type="submit">SUBMIT</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
