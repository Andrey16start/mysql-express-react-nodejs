import React, { useState } from 'react';

import './LoginPage.scss';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';


const LoginPage = (props) => {
  const [isRegisterOpen, setIsRegister] = useState(false);

  return (
    <>
      {isRegisterOpen
        ? (
          <RegisterForm
            changeView={() => setIsRegister(false)}
          />
        )
        : (
          <LoginForm
            changeView={() => setIsRegister(true)}
          />
        )
      }
    </>
  )
};

export default LoginPage;