import useForm from '../hooks/formHooks.js';
import {useAuthentication} from '../hooks/apiHooks.js';
import {useNavigate} from 'react-router-dom';
import {useUserContext} from '../hooks/contextHooks';

const LoginForm = () => {
  const initValues = {
    username: '',
    password: '',
  };

  /*
  const {postLogin} = useAuthentication();
  const navigate = useNavigate();

  const doLogin = async (values) => {
    console.log(inputs);

    const payload = values ?? inputs;
    try {
      const result = await postLogin(payload);
      const token = result.token;
      if (token) {
        localStorage.setItem('token', token);
        navigate('/');
      }
      console.log('login result', result);
    } catch (err) {
      console.error('login failed', err);
    }
  };

  */
  const {handleLogin} = useUserContext();

  const doLogin = async () => {
    try {
      handleLogin(inputs);
    } catch (e) {
      alert(e.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doLogin,
    initValues
  );

  console.log(inputs);

  return (
    <>
      <div className="max-w-md mx-auto p-8">
        <h1 className="text-2xl font-semibold mb-6 text-white">Login</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full bg-gray-800 p-6 rounded shadow-md text-white flex flex-col gap-4"
        >
          <div className="flex flex-col">
            <label htmlFor="loginuser" className="text-sm mb-1">
              Username
            </label>
            <input
              name="username"
              type="text"
              id="loginuser"
              value={inputs.username}
              onChange={handleInputChange}
              autoComplete="username"
              className="p-2 rounded bg-gray-700 border border-gray-600 text-white"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="loginpassword" className="text-sm mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="loginpassword"
              value={inputs.password}
              onChange={handleInputChange}
              autoComplete="current-password"
              className="p-2 rounded bg-gray-700 border border-gray-600 text-white"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
