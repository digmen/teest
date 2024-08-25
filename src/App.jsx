import React from 'react';
import { AScene, AEntity, ABox, ACamera, Scene, Entity } from 'aframe-react';

const App = () => {
  return (
    <Scene>
      <Entity geometry={{ primitive: 'box' }} material={{ color: 'red' }} position={{ x: 0, y: 0, z: -5 }} />
      <Entity particle-system={{ preset: 'snow' }} />
      <Entity light={{ type: 'point' }} />
      <Entity gltf-model={{ src: 'virtualcity.gltf' }} />
      <Entity text={{ value: 'Hello, WebVR!' }} />
    </Scene>
  );
};

export default App;
