import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
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

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [mediaArray, setMediaArray] = useState([]);
  const getMedia = async () => {
    try {
      const json = await fetchData('test.json');
      setMediaArray(json);
    } catch (err) {
      console.error(err);
      alert('Failed!');
    }
  };
  useEffect(() => {
    getMedia();
  }, []);

  console.log(mediaArray);
  return (
    <>
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;
