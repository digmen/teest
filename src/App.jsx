import 'aframe';
import 'aframe-ar'; // Подключение AR.js
import { Entity, Scene } from 'aframe-react';
import React from 'react';
пше
const App = () => {
  return (
    <div className="app-container">
      <Scene embedded>
        <a-entity camera position="0 1.6 0" look-controls="pointerLockEnabled: true"></a-entity>

        <Entity
          geometry={{ primitive: 'box' }}
          material={{ color: 'red' }}
          position={{ x: 0, y: 0, z: -5 }}
        />

        <a-marker-camera preset="hiro"></a-marker-camera>
      </Scene>
    </div>
  );
};

export default App;
