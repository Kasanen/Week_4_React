import React, {useEffect, useState} from 'react';
import {useUser} from '../hooks/apiHooks';

const Profile = () => {
  const {getUserByToken} = useUser();
  const [userData, setUser] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    (async () => {
      try {
        const data = await getUserByToken(token);
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
