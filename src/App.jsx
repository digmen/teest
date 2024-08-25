import React from 'react';
import { AScene, AEntity, ABox, ACamera } from 'aframe-react';

const App = () => {
  return (
    <AScene>
      {/* Marker для AR */}
      <AEntity marker="preset: hiro">
        {/* Простой 3D-объект: большой куб */}
        <ABox
          position="0 0.5 -3"
          rotation="0 45 0"
          color="#4CC3D9"
          depth="2"
          height="2"
          width="2"
        />
      </AEntity>

      {/* Камера */}
      <ACamera />
    </AScene>
  );
};

export default App;
