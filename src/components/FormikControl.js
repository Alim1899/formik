import Input from "./Cases/Input";
const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input": return <Input {...rest}/>
    case "textarea":
    case "select":
    case "radio":
    case "checkbox":
    case "date":
        default: return null;
  }
 
};

export default FormikControl;
