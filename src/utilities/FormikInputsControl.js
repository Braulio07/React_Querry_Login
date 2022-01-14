import { TextField } from   "./elementos/TextField";
import { SelectField } from "./elementos/SelectField";
import { CheckboxGroup } from "./elementos/CheckboxGroup";
import { RadioGroup } from "./elementos/RadioGroup";


export const FormikInputsControl = (props) => {
    const { control, ...rest } = props;

    switch (control) {
        case 'input':
            return <TextField {...rest} />

        case 'select':
            return <SelectField {...rest}/>

        case 'radio':
        return <RadioGroup  {...rest}/>

        case 'checkbox':
            return <CheckboxGroup {...rest}/>

        default:
            return null;
    }
}