import React from 'react';

const App = () => {
  return (
    <a-scene embedded>
      {/* Marker для AR */}
      <a-marker preset="hiro">
        {/* 3D-модель */}
        <a-box position="0 0.5 0" rotation="0 45 0" color="#4CC3D9"></a-box>
      </a-marker>

      {/* Камера */}
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default App;
