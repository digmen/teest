import 'aframe';
import 'aframe-ar';
import React from 'react';

const App = () => {
  return (
    <div className="app-container">
      <a-scene embedded arjs>
        {/* Камера с контролем для перемещения с помощью гироскопа */}
        <a-entity
          camera
          look-controls="pointerLockEnabled: false"
          position="0 1.6 0"
        ></a-entity>

        {/* AR-маркер для фиксирования куба */}
        <a-marker preset="hiro">
          <a-box color="red" position="0 0 0" scale="1 1 1"></a-box>
        </a-marker>

        {/* Дополнительные элементы */}
        <a-light type="ambient" color="#888"></a-light>
        <a-light type="directional" position="-1 2 1" target="#box"></a-light>
      </a-scene>
    </div>
  );
};

export default App;
