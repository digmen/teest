import React from 'react';

const App = () => {
  return (
    <>
      <a-scene embedded>
        <a-marker preset="hiro">
          <a-box
            position="0 1 0"
            rotation="0 45 0"
            color="#4CC3D9"
            depth="2"
            height="2"
            width="2"
          ></a-box>
          <a-entity
            geometry="primitive: line; vertices: 0 0 0, 0 2 0"
            material="color: red; lineWidth: 5"
            position="0 0 0"
          ></a-entity>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </>
  );
};

export default App;
