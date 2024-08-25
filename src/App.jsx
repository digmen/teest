import React, { useEffect } from 'react';
import * as THREE from 'three';
import 'aframe';
import { ARjs } from '@ar-js-org/ar.js';

export default function App() {
  useEffect(() => {
    // Создаем сцену, камеру и рендерер
    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true, // Прозрачный фон для рендерера
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Добавляем AR контекст
    const arToolkitSource = new ARjs.Source({ sourceType: 'webcam' });

    const arToolkitContext = new ARjs.Context({
      cameraParametersUrl: 'data/camera_para.dat',
      detectionMode: 'mono',
    });

    arToolkitContext.init(() => {
      camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
    });

    arToolkitSource.init(() => {
      onResize();
    });

    // Создаем маркер и привязываем объект
    const markerControls = new ARjs.MarkerControls(arToolkitContext, camera, {
      type: 'pattern',
      patternUrl: 'data/patt.hiro',
      changeMatrixMode: 'cameraTransformMatrix',
    });

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);
    cube.position.y = 0.5;

    scene.add(cube);

    // Анимация
    const animate = () => {
      requestAnimationFrame(animate);
      if (arToolkitSource.ready) {
        arToolkitContext.update(arToolkitSource.domElement);
      }
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      arToolkitSource.onResize();
      arToolkitSource.copySizeTo(renderer.domElement);
      if (arToolkitContext.arController !== null) {
        arToolkitSource.copySizeTo(arToolkitContext.arController.canvas);
      }
    };

    window.addEventListener('resize', onResize);
  }, []);

  return (
    <div>
      <h1>AR.js в React</h1>
    </div>
  );
}
