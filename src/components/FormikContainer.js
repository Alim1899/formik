import React from "react";
import classes from "./FormikContainer.module.css";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";
const FormikContainer = () => {
  const dropDownOption = [
    { key: "Select an option", value: "" },
    { key: "option1", value: "option1" },
    { key: "option2", value: "option2" },
    { key: "option3", value: "option3" },
  ];
  const radioOptions = [
    { key: "option 1", value: "Roption 1" },
    { key: "option 2", value: "Roption 2" },
    { key: "option 3", value: "Roption 3" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
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

        <Form className={classes.form}>
        <h2 className={classes.header}>Registration form</h2>

        <div className={classes.fields}>
                    <div className={classes.field}>
            {" "}
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
          </div>
          <div className={classes.field}>
            <FormikControl
              control="textarea"
              type="text"
              label="Description"
              name="description"
            />
          </div>
          <div className={classes.field}>
            {" "}
            <FormikControl
              control="select"
              label="Select a topic"
              name="selectOption"
              options={dropDownOption}
            />
          </div>
          <div className={classes.field}>
            {" "}
            <FormikControl
              control="radio"
              label="Pick one option"
              name="radioOption"
              options={radioOptions}
            />
          </div>
        </div>


          <button className={classes.submit} type="submit">
            SUBMIT
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
