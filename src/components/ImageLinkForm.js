import React, { useRef } from 'react';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_KEY,
});

const ImageLinkForm = ({
  setImage,
  setRegions,
  clearState,
  loading,
  setLoading,
}) => {
  const text = useRef('');

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    clearState();
    try {
      setImage(text.current.value);
      const response = await app.models.predict(
        Clarifai.FACE_DETECT_MODEL,
        text.current.value,
      );
      setLoading(false);
      setRegions(response.outputs[0].data.regions);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={onSubmit}>
        <div className="flex">
          <input
            type="text"
            className="flex-1 form-input block w-full"
            placeholder="Paste image link..."
            ref={text}
          />
          <button
            type="submit"
            className="ml-2 bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded"
          >
            {loading ? 'Detecting...' : 'Detect Face'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageLinkForm;
