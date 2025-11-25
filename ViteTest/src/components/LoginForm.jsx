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
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            value={inputs.username}
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            value={inputs.password}
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
