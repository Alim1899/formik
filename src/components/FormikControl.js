import Input from "./Cases/Input";
import Textarea from "./Cases/Textarea";
import Select from "./Cases/Select";
import Radio from "./Cases/Radio";
import Checkbox from "./Cases/Checkbox";
import Date from "./Cases/Date";
const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input": return <Input {...rest}/>
    case "textarea": return <Textarea {...rest}/>
    case "select": return <Select {...rest}/>
    case "radio": return <Radio {...rest}/>
    case "checkbox": return <Checkbox {...rest}/>
    case "date": return <Date {...rest}/>
        default: return null;
  }
 
};

export default FormikControl;
