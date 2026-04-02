"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Globe() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (ref.current) {
      ref.current.rotation.y = t * 0.5;
      ref.current.rotation.x = Math.sin(t * 0.2) * 0.2;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[4.5, 64, 64]} />

      {/* 🔥 estilo wireframe tech */}
      <meshStandardMaterial
        color="#3b82f6"
        wireframe
        emissive="#3b82f6"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

export default function Globe3D() {
  return (
    <Canvas camera={{ position: [0, 0, 10] }} gl={{ alpha: true }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 3, 3]} />
      <Globe />
    </Canvas>
  );
}