import React from "react";
import { Field } from 'react-final-form';


const FormField = (props) => {
  const {
    name,
    placeholderText,
    className,
  } = props;

  const classNames = {
    formField: className + '__form-field',
    input: 'input' + (className ? ` ${className}__input` : ''),
    inputWithError: 'input--error' + (className ? ` ${className}__input--error` : ''),
    inputErrorText: 'input-error-text' + (className ? ` ${className}__input-error-text` : ''),
  };

  const getInputErrorClassName = (meta) => meta.touched && meta.error && !meta.active
    ? ' ' + classNames.inputWithError
    : '';

  return (
    <Field name={name}>
      {({ input, meta }) => (
        <div className={classNames.formField}>
          <input
            {...input}
            placeholder={placeholderText}
            className={classNames.input + getInputErrorClassName(meta)}
            autoComplete='off'
          />

          {meta.touched && meta.error && !meta.active && (
            <span className={classNames.inputErrorText}>{meta.error}</span>
          )}
        </div>
      )}
    </Field>
  )
};

export default FormField;