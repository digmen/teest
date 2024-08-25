// src/App.jsx
import React from 'react';

const App = () => {
  return (
    <a-scene embedded>
      {/* Marker для AR */}
      <a-marker preset="hiro">
        {/* Простой 3D-объект: большой куб */}
        <a-box
          position="0 1 -3"
          rotation="0 45 0"
          color="#4CC3D9"
          depth="5"
          height="5"
          width="5"
        ></a-box>
      </a-marker>

      {/* Камера */}
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default App;
