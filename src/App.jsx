import 'aframe';
import 'aframe-ar'; // Подключение AR.js
import { Entity, Scene } from 'aframe-react';
import React from 'react';

const App = () => {
  return (
    <div className="app-container">
      <Scene embedded>
        {/* AR.js для использования камеры и отслеживания маркеров */}
        <a-marker-camera preset="hiro"></a-marker-camera>

        {/* Простая 3D модель (куб) */}
        <Entity
          geometry={{ primitive: 'box' }}
          material={{ color: 'red' }}
          position={{ x: 0, y: 0, z: 0 }}
        />

        {/* Камера для AR */}
        <Entity
          camera
          look-controls={{ enabled: true }}
        />
      </Scene>
    </div>
  );
};

export default App;
