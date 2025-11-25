// imports here
import {useUserContext} from '../hooks/contextHooks';

const Logout = () => {
  const {handleLogout} = useUserContext();

  handleLogout();

  return (
    <>
      <h2>You have been logged out.</h2>
    </>
  );
};

export default Logout;
