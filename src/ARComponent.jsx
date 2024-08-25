// ARComponent.jsx
import React from 'react';

const ARComponent = () => {
    return (
        <a-scene embedded>
            {/* Marker для AR */}
            <a-marker preset="hiro">
                {/* 3D-объект: большой куб */}
                <a-box
                    position="0 1 0"  // Поднимите куб немного выше, чтобы он был видим
                    rotation="0 45 0"
                    color="#4CC3D9"
                    depth="2"
                    height="2"
                    width="2"
                ></a-box>
                {/* Указатель: линия */}
                <a-entity
                    geometry="primitive: line; vertices: 0 0 0, 0 2 0"
                    material="color: red; lineWidth: 5"
                    position="0 0 0"
                ></a-entity>
            </a-marker>

            {/* Камера */}
            <a-entity camera></a-entity>
        </a-scene>
    );
};

export default ARComponent;
