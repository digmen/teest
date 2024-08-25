import React from 'react';

const App = () => {
  return (
    <a-scene embedded>
      {/* Marker для AR */}
      <a-marker preset="hiro">
        {/* Простой 3D-объект: куб */}
        <a-box
          position="0 0.5 0"
          rotation="0 45 0"
          color="#4CC3D9"
          depth="1"
          height="1"
          width="1"
        ></a-box>
      </a-marker>

      {/* Камера */}
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default App;
