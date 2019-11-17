import React from "react";
import { Form } from 'react-final-form';

import FormField from "../../../components/FormField";


const RegisterForm = (props) => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="login__wrap">
      <div className='card login'>
        <h1 className='card__title'>
          Sign Up
        </h1>

        <Form
          onSubmit={onSubmit}
          validate={validate}
        >
          {({ handleSubmit }) => (
            <form
              className="card__inner"
              onSubmit={handleSubmit}
            >
              <FormField
                name='username'
                placeholderText='Username'
                className='login'
              />

              <FormField
                name='password'
                placeholderText='Password'
                className='login'
              />

              <FormField
                name='confirmPassword'
                placeholderText='Confirm Password'
                className='login'
              />

              <button
                className="login__btn-submit"
                type='submit'>
                Register
              </button>

              <button
                className="login__btn-register"
                onClick={() => props.changeView()}>
                Go Back
              </button>
            </form>
          )}
        </Form>
      </div>
    </div>
  )
};

const validate = (values) => {
  const errors = {}
  const {
    username,
    password,
    confirmPassword,
  } = values;

  if (!username) errors.username = 'Username is required';
  if (!password) errors.password = 'Password is required';

  if (password !== confirmPassword) errors.password = 'Passwords must be identical.';

  return errors;
};

export default RegisterForm;