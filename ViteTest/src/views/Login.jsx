// imports here
import React, {useState} from 'react';

import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      {showRegister ? <RegisterForm /> : <LoginForm />}
      <div>
        <button type="button" onClick={() => setShowRegister((s) => !s)}>
          {showRegister ? 'Switch to Login' : 'Switch to Register'}
        </button>
      </div>
    </>
  );
};

export default Login;
