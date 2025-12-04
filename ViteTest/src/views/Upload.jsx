import React, {useState} from 'react';
import {useFile} from '../hooks/apiHooks';
import {useMedia} from '../hooks/apiHooks';
import {useUserContext} from '../hooks/contextHooks';
import useForm from '../hooks/formHooks';

const Upload = () => {
  const [file, setFile] = useState(null);
  const token = localStorage.getItem('token');

  const {postFile} = useFile();
  const {postMedia} = useMedia();
  const {user} = useUserContext();

  const doUpload = async () => {
    try {
      // TODO: call postFile function (see below)
      // TODO: call postMedia function (see below)
      // TODO: redirect to Home

      const fileData = await postFile(file, token);
      console.log('File uploaded:', fileData);

      const mediaResult = await postMedia(fileData, inputs, token);
      console.log('Media created:', mediaResult);
      window.location.href = '/';
    } catch (e) {
      console.log(e.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(doUpload, {
    title: '',
    description: '',
  });

  const handleFileChange = (evt) => {
    if (evt.target.files) {
      console.log(evt.target.files[0]);
      // TODO: set the file to state
      setFile(evt.target.files[0]);
    }
  };

  const canUpload = file && inputs.title && inputs.title.length > 3;

  return (
    <>
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-6 text-white">Upload</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full bg-gray-800 p-6 rounded shadow-md text-white flex flex-col items-center gap-6"
        >
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : 'https://placehold.co/200?text=Choose+image'
            }
            alt="preview"
            className="w-48 h-48 object-cover rounded mb-2"
          />

          <div className="w-full max-w-2xl flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="title" className="text-sm mb-1">
                Title
              </label>
              <input
                name="title"
                type="text"
                id="title"
                onChange={handleInputChange}
                className="p-2 rounded bg-gray-700 border border-gray-600 text-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description" className="text-sm mb-1">
                Description
              </label>
              <textarea
                name="description"
                rows={5}
                id="description"
                onChange={handleInputChange}
                className="p-2 rounded bg-gray-700 border border-gray-600 text-white"
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label htmlFor="file" className="text-sm mb-1">
                File
              </label>
              <input
                name="file"
                type="file"
                id="file"
                accept="image/*, video/*"
                onChange={handleFileChange}
                className="text-sm file:bg-gray-600 file:px-3 file:py-1 file:rounded file:text-white"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={!canUpload}
                className={`px-4 py-2 rounded ${
                  canUpload
                    ? 'bg-gray-600 hover:bg-gray-700'
                    : 'bg-gray-600 opacity-50 cursor-not-allowed'
                } text-white`}
              >
                Upload
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

Upload.PropTypes = {};

export default Upload;
