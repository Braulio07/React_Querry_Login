import React from 'react'
import { Field, ErrorMessage } from 'formik';

export const SelectField = (props) => {

    const { label, name, options, ...rest } = props;

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Field className="custom-select" as="select" id={name}  name={name}  {...rest} >
                {
                    options.map(option => {
                        return (
                            <option hidden={option.hidden} key={option.value} value={option.value}>
                                {option.key}
                            </option>
                        )
                    })
                }
            </Field>
            <ErrorMessage className="error" name={name} component="div" />
        </div>
    )
}
