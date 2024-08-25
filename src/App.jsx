import React from "react";
import "aframe";
import "aframe-ar";

export default function App() {
  return (
    <a-scene embedded xr="mode: immersive-ar" arjs="sourceType: webcam;">
      <a-camera position="0 1.6 0" look-controls="pointerLockEnabled: true">
        <a-cursor></a-cursor>
      </a-camera>

      <a-box color="blue" position="0 1 -3" rotation="0 45 0" scale="0.5 0.5 0.5"></a-box>

      <a-marker preset="hiro">
        <a-box color="red"></a-box>
      </a-marker>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  );
}
