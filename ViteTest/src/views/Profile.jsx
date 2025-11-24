import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useUser} from '../hooks/apiHooks';

const Profile = () => {
  const {getUserByToken} = useUser();
  const [userData, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getUserByToken();
        console.log('Loaded user:', data);
        setUser(data);
      } catch (err) {
        console.error('Failed to load user:', err);
      }
    })();
  }, [getUserByToken]);

  return (
    <>
      <div>
        <h1>Profile</h1>
        {userData ? (
          <div>
            <p>Username: {userData.user.username}</p>
            <p>Email: {userData.user.email}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

Profile.PropTypes = {};

export default Profile;
