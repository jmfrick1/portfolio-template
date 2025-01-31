import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import '../styles/components/ThreeDModel.css';

const ThreeDModel = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentRef = mountRef.current;  // Use a stable reference
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentRef.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      currentRef.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="threeDModel" ref={mountRef}></div>;
};

export default ThreeDModel;
