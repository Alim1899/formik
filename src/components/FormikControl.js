import React from "react";

const FormikControl = (props) => {
  const { control } = props;
  switch (control) {
    case "input":
    case "textarea":
    case "select":
    case "radio":
    case "checkbox":
    case "date":
  }
  return <div></div>;
};

export default FormikControl;