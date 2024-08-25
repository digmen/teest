import 'aframe';
import 'aframe-ar';
import { Entity, Scene } from 'aframe-react';
import React from 'react';

const App = () => {
  return (
    <div className="app-container">
      <Scene embedded arjs>
        {/* Камера для AR */}
        <Entity camera look-controls="pointerLockEnabled: false" />

        {/* Куб на фиксированной позиции */}
        <Entity
          geometry={{ primitive: 'box' }}
          material={{ color: 'red' }}
          position={{ x: 0, y: 0, z: -5 }}
        />

        {/* AR.js для отслеживания маркеров */}
        <Entity
          marker={{ preset: 'hiro' }}
          position={{ x: 0, y: 0, z: 0 }}
        >
          <Entity
            geometry={{ primitive: 'box' }}
            material={{ color: 'blue' }}
            position={{ x: 0, y: 0, z: 0 }}
          />
        </Entity>
      </Scene>
    </div>
  );
};

export default App;
