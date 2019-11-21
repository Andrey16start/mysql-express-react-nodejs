import React from "react";
import { Field } from 'react-final-form';


const FormField = (props) => {
  const {
    name,
    placeholderText,
    className,
  } = props;

  return (
    <Field name={name}>
      {({ input, meta }) => (
        <div className={className + '__form-field'}>
          <input
            {...input}
            placeholder={placeholderText}
            className={`${className}__input` +
              (meta.touched && meta.error && !meta.active ? ` ${className}__input--error` : '')}
            autoComplete='off'
          />

          {meta.touched && meta.error && !meta.active && (
            <span className={`${className}__input-error-text`}>{meta.error}</span>
          )}
        </div>
      )}
    </Field>
  )
};

export default FormField;