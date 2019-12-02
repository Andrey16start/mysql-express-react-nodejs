import React from "react";
import { connect } from 'react-redux';
import { Form } from 'react-final-form';

import api from "../../../api/api";
import { addNotification } from "../../../ducks/notifications";
import { NOTIFICATIONS } from "../../../constants";

import FormField from "../../../components/FormField";


const LiginForm = (props) => {
  const onSubmit = (values) => {
    const {
      username,
      password,
    } = values;

    api.login({ username, password })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.dir(err);
        if (!err) return;

        const response = err.response;

        if (!response) return props.addNotification({
          type: NOTIFICATIONS.loginError,
          text: 'Nerwork Error.',
          duration: 3,
          color: 'red',
        });
        if (response.status === 400 && response.data === 'Incorrect Data') return props.addNotification({
          type: NOTIFICATIONS.loginError,
          text: 'Login Error. ' + response.data,
          duration: 3,
          color: 'red',
        });
      });
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
                Create Account
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

const mapDispatchToProps = {
  addNotification,
};

export default connect(null, mapDispatchToProps)(LiginForm);