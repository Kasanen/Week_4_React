// imports here
import React, {useState} from 'react';

import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <div className=" flex items-center justify-center p-8 bg-transparent">
        <div className="w-full max-w-md">
          {showRegister ? <RegisterForm /> : <LoginForm />}

          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={() => setShowRegister((s) => !s)}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded text-white"
            >
              {showRegister ? 'Switch to Login' : 'Switch to Register'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
