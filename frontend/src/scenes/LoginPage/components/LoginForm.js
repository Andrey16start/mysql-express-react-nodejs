import React from "react";

import api from "../../../api/api";

const LiginForm = (props) => {
  return (
    <div className="login__wrap">
      <div className='card login'>
        <h1 className='card__title'>
          Log In Into You Account
        </h1>

        <div className="card__inner">
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
              type='password'
            />
          </div>

          <button
            className="login__btn-submit"
            onClick={() => api.login({
              username: 'Andrey',
              password: 'qwerty',
            })}
          >
            Log In
          </button>

          <button
            className="login__btn-link"
            onClick={() => props.changeView()}
          >
            Register ?
          </button>
        </div>
      </div>
    </div>
  )
};

export default LiginForm;