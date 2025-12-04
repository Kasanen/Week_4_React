import useForm from '../hooks/formHooks.js';
import {useUser} from '../hooks/apiHooks.js';

const RegisterForm = () => {
  const initValues = {
    username: '',
    password: '',
    email: '',
  };

  const {postUser} = useUser();

  const doRegister = async (values) => {
    console.log(inputs);

    const payload = values ?? inputs;
    try {
      const result = await postUser(payload);
      console.log('register result', result);
    } catch (err) {
      console.error('register failed', err);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doRegister,
    initValues
  );

  console.log(inputs);

  return (
    <>
      <div className="max-w-md mx-auto p-8">
        <h1 className="text-2xl font-semibold mb-6 text-white">Register</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full bg-gray-800 p-6 rounded shadow-md text-white flex flex-col gap-4"
        >
          <div className="flex flex-col">
            <label htmlFor="registeruser" className="text-sm mb-1">
              Username
            </label>
            <input
              name="username"
              type="text"
              id="registeruser"
              value={inputs.username}
              onChange={handleInputChange}
              autoComplete="username"
              className="p-2 rounded bg-gray-700 border border-gray-600 text-white"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="registerpassword" className="text-sm mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="registerpassword"
              value={inputs.password}
              onChange={handleInputChange}
              autoComplete="current-password"
              className="p-2 rounded bg-gray-700 border border-gray-600 text-white"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="registeremail" className="text-sm mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              id="registeremail"
              value={inputs.email}
              onChange={handleInputChange}
              autoComplete="email"
              className="p-2 rounded bg-gray-700 border border-gray-600 text-white"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded text-white"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
