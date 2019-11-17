import React from 'react';

import './LoginPage.scss';


const LoginPage = (props) => {
  return (
    <div className="login__wrap">
      <div className='login'>
        <h1 className='login__title'>
          Sign Up
        </h1>

        <div className="login__inner">
          <div className='login__form-field'>
            <input
              className='login__input'
              placeholder='Username'
            />
          </div>

          <div className='login__form-field'>
            <input
              className='login__input'
              placeholder='Password'
            />
          </div>

          <button
            className="login__btn-submit"
          >
            Log In
          </button>

          <button
            className="login__btn-register"
          >
            Register ?
          </button>
        </div>
      </div>
    </div>
  )
};

export default LoginPage;