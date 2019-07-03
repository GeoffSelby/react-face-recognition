import React, { useState } from 'react';
import Header from './components/Header';
import ImageLinkForm from './components/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [regionsArray, setRegionsArray] = useState([]);
  const [boxesArray, setBoxesArray] = useState([]);

  // const toggleLoading = () => {

  // }

  const setImage = image => {
    setImageUrl(image);
  };

  const setRegions = regions => {
    setRegionsArray(regions);
  };

  const setBoxes = boxes => {
    setBoxesArray(boxes);
  };

  const clearState = () => {
    setImageUrl(null);
    setRegionsArray([]);
    setBoxesArray([]);
  };

  return (
    <div className="container mx-auto px-2 h-full">
      <div className="flex flex-col h-full">
        <Header />
        <div className="flex-1">
          <ImageLinkForm
            setImage={setImage}
            setRegions={setRegions}
            clearState={clearState}
            loading={loading}
            setLoading={setLoading}
          />
          <FaceRecognition
            loading={loading}
            imageUrl={imageUrl}
            regionsArray={regionsArray}
            setBoxes={setBoxes}
            boxesArray={boxesArray}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
