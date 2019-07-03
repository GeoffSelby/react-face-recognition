import React, { useEffect } from 'react';

const FaceRecognition = ({
  loading,
  imageUrl,
  regionsArray,
  setBoxes,
  boxesArray,
}) => {
  useEffect(() => {
    if (imageUrl !== null) {
      displayFaceBox(calculateFaceLocation());
    }
    // eslint-disable-next-line
  }, [regionsArray]);

  const calculateFaceLocation = () => {
    const image = document.querySelector('#inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log('width:', width);
    console.log('height:', height);
    console.log(regionsArray);
    const boxes = regionsArray.map(region => {
      const clarifaiFace = region.region_info.bounding_box;
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - clarifaiFace.right_col * width,
        bottomRow: height - clarifaiFace.bottom_row * height,
      };
    });

    return boxes;
  };

  const displayFaceBox = boxes => {
    setBoxes(boxes);
  };

  return (
    <div className="mt-4 max-w-xl mx-auto flex justify-center">
      <div className="relative inline-block">
        <img id="inputImage" src={imageUrl} alt="" />
        {boxesArray !== null &&
          boxesArray.map((box, index) => (
            <div
              key={index}
              className="absolute border-2 border-white flex flex-wrap justify-center cursor-pointer"
              style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol,
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
