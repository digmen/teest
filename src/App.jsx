import 'aframe';
import 'aframe-ar';
import React from 'react';

const App = () => {
  return (
    <div className="app-container">
      <a-scene embedded arjs>
        {/* Камера с управлением через движение телефона */}
        <a-entity
          camera
          look-controls="pointerLockEnabled: true"
          wasd-controls="enabled: true" // Включаем управление WASD
          position="0 1.6 0"
        ></a-entity>

        {/* Куб на фиксированной позиции */}
        <a-box color="red" position="0 0 -5"></a-box>

        {/* AR.js для отслеживания маркеров */}
        <a-marker preset="hiro">
          <a-box color="blue" position="0 0 0"></a-box>
        </a-marker>
      </a-scene>
    </div>
  );
};

export default App;
