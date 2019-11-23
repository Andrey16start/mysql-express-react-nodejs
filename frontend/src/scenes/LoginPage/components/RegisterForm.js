import React from "react";
import { Form } from 'react-final-form';

import api from "../../../api/api";

import FormField from "../../../components/FormField";


const RegisterForm = (props) => {
  const onSubmit = (values) => {
    const {
      username,
      password,
    } = values;

    api.createUser({ username, password });
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
                className="btn btn--primary login__btn-submit"
                type='submit'>
                Register
              </button>

              <button
                className="btn-link login__btn-link"
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