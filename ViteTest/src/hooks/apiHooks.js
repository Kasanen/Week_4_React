// TODO: add necessary imports
import {useState, useEffect} from 'react';

const fetchData = async (url, options = {}) => {
  // console.log('fetching data from url: ', url);
  const response = await fetch(url, options);
  const json = await response.json();
  if (!response.ok) {
    // console.log('json', json);
    if (json.message) {
      throw new Error(json.message);
    }
    throw new Error(`Error ${response.status} occured`);
  }
  return json;
};

const useMedia = () => {
  // TODO: move mediaArray state here
  const [mediaArray, setMediaArray] = useState([]);

  // TODO: move getMedia function here
  const getMedia = async () => {
    try {
      const json = await fetchData(import.meta.env.VITE_MEDIA_API + '/media');
      const newArray = await Promise.all(
        json.map(async (item) => {
          const result = await fetchData(
            import.meta.env.VITE_AUTH_API + '/users/' + item.user_id
          );
          return {...item, username: result.username};
        })
      );
      console.log(newArray);
      setMediaArray(newArray);
    } catch (err) {
      console.error(err);
      alert('Failed!');
    }
  };

  // TODO: move useEffect here
  useEffect(() => {
    getMedia();
  }, []);

  return {mediaArray};
};

export {useMedia};
