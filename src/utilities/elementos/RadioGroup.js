import { ErrorMessage, Field } from 'formik';
import React from 'react'

export const RadioGroup = (props) => {

    const { label, name, options, ...rest } = props;


    return (
        <div className='form-control  paddinInput'>
            <label>{label}</label> <br />

            <Field name={name} {...rest}>
                {({ field }) => {
                    return options.map(option => {
                        return (
                            <React.Fragment key={option.key}>

                                <div>
                                    <input
                                        type="radio"
                                        id={option.value}
                                        {...field}
                                        value={option.value}

                                        checked={field.value === option.value}
                                    />


                                    <label className='ml-2' htmlFor={option.value}>  {option.key} </label>

                                </div>
                                {/* <br/> */}
                            </React.Fragment>
                        )
                    })

                }}

            </Field>
            <ErrorMessage className="error" name={name} component="div" />
        </div>
    )
}
