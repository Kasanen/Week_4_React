import React from 'react';
import PropTypes from 'prop-types';
import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
  const item = state;
  return (
    <>
      <h2>Single item</h2>
      {item && (
        <div>
          <div>{item.title}</div>
          <div>{item.descrition}</div>
          <div>{item.username}</div>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Go back
          </button>
          {item.media_type.startsWith('image') ? (
            <img src={item.filename} alt={item.title} style={{width: '100%'}} />
          ) : (
            <video src={item.filename} controls style={{width: '100%'}} />
          )}
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Go back
          </button>
        </div>
      )}
    </>
  );
};

Single.PropTypes = {};

export default Single;
