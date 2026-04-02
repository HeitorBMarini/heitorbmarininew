"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";
import { useRef } from "react";

function CodeIcon() {
  const ref = useRef<any>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (ref.current) {
      ref.current.rotation.y = t * 1.1;
      ref.current.rotation.x = Math.sin(t * 0.2) * 0.2;
      ref.current.rotation.z = Math.cos(t * 0.2) * 0.1;
    }
  });

  return (
    <Center>
      <group position={[1, 0.7, 0]}>
        <Text3D
          ref={ref}
          font="/fonts/helvetiker_regular.typeface.json"
          size={6.0}
          height={2.0}
          curveSegments={10}
        >
          {"</>"}
          <meshStandardMaterial
            color="#ccc"
            emissive="#ccc"
            emissiveIntensity={1}
          />
        </Text3D>
      </group>
    </Center>
  );
}

export default function Code3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9] }}
      gl={{ alpha: true }}
      onCreated={({ scene }) => {
        scene.background = null;
      }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 0, 3]} />
      <CodeIcon />
    </Canvas>
  );
}
