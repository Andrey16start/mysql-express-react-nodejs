import React from "react";
import { Form } from 'react-final-form';

import api from "../../../api/api";

import FormField from "../../../components/FormField";

const LiginForm = (props) => {
  const onSubmit = (values) => {
    const {
      username,
      password,
    } = values;

    api.login({ username, password })
      .then(console.log)
      .catch(err => console.dir(err));
  };

  return (
    <div className="login__wrap">
      <div className='card login'>
        <h1 className='card__title'>
          Log In Into You Account
        </h1>

        <Form
          onSubmit={onSubmit}
          validate={validate}
        >
          {({ handleSubmit, valid }) => (
            <form
              className='card__inner'
              onSubmit={handleSubmit}
            >
              <FormField
                name='username'
                placeholderText='Username'
                className='login'
              />

              <FormField
                name='password'
                placeholderText='Username'
                className='login'
              />

              <button
                className="btn btn--primary login__btn-submit"
                type='submit'
                disabled={!valid}
              >
                Log In
              </button>

              <button
                className="btn-link login__btn-link"
                onClick={() => props.changeView()}
                type='button'
              >
                Register ?
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
  } = values;

  if (!username) errors.username = 'Username is required';
  if (!password) errors.password = 'Password is required';

  return errors;
};

export default LiginForm;