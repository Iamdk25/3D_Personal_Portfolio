import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Decal, useTexture } from "@react-three/drei";

import { technologies } from "../../constants";

const RADIUS = 4.4;

const TechBall = ({ icon, index, total }) => {
  const [decal] = useTexture([icon]);
  const ref = useRef();
  const angle = (index / total) * Math.PI * 2;

  useFrame(({ camera, clock }) => {
    const ball = ref.current;
    if (!ball) return;
    const t = clock.getElapsedTime();
    ball.position.y = Math.sin(t * 0.9 + index * 0.7) * 0.35;
    // billboard keeps every icon facing the viewer as the ring turns
    ball.lookAt(camera.position);
  });

  return (
    <group ref={ref} position={[Math.cos(angle) * RADIUS, 0, Math.sin(angle) * RADIUS]}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh scale={0.78}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        </mesh>
      </group>
    </group>
  );
};

const TechOrbit = () => {
  const ref = useRef();

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.12;
    ref.current.rotation.x = Math.sin(performance.now() * 0.00015) * 0.12;
  });

  return (
    <group ref={ref} position={[0, 0, -1]} rotation={[0.42, 0, 0.1]}>
      {technologies.map((technology, index) => (
        <TechBall
          key={technology.name}
          icon={technology.icon}
          index={index}
          total={technologies.length}
        />
      ))}
    </group>
  );
};

export default TechOrbit;
