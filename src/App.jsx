import 'aframe';
import 'aframe-ar'; // Импорт AR.js
import { Entity, Scene } from 'aframe-react';
import React from 'react';

const App = () => {
  return (
    <Scene embedded arjs='sourceType: webcam;'>
      {/* Камера для AR */}
      <Entity camera={{ active: true }} look-controls={{ pointerLockEnabled: false }} />

      {/* 3D модель куба */}
      <Entity
        geometry={{ primitive: 'box' }}
        material={{ color: 'red' }}
        position={{ x: 0, y: 0, z: -5 }}
      />

      {/* Дополнительные элементы */}
      <Entity particle-system={{ preset: 'snow' }} />
      <Entity light={{ type: 'point' }} />
      <Entity gltf-model={{ src: 'virtualcity.gltf' }} />
      <Entity text={{ value: 'Hello, AR!' }} />
    </Scene>
  );
};

export default App;
