import React, { useEffect } from "react";
import "aframe";
import "aframe-look-at-component";

export default function App() {
  useEffect(() => {
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <a-scene
        vr-mode-ui="enabled: false"
        embedded
        arjs="sourceType: webcam; trackingMethod: best;"
        renderer="logarithmicDepthBuffer: true;"
      >
        <a-camera gps-camera rotation-reader></a-camera>

        <a-entity
          gps-entity-place="latitude: 40.748817; longitude: -73.985428;"
          gltf-model="url(https://cdn.aframe.io/test-models/models/gltf/kart/kart.gltf)"
          scale="5 5 5"
          look-at="[gps-camera]"
        >
        </a-entity>
      </a-scene>
    </div>
  );
}
