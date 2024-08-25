import React from 'react';

const App = () => {
  return (
    <a-scene embedded>
      {/* Marker для AR */}
      <a-marker preset="hiro">
        {/* 3D-модель */}
        <a-entity
          gltf-model="url(https://sketchfab.com/3d-models/tube-man-looping-animated-rigged-682bba00f6ec4fef8ee17fb1535d7741)" // Замените на путь к вашей модели
          scale="0.5 0.5 0.5"
          position="0 0 0"
          rotation="0 0 0"
        ></a-entity>
      </a-marker>

      {/* Камера */}
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default App;
