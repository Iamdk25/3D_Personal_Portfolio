import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const PlanetModel = () => {
  const planet = useGLTF("planet/scene.gltf");
  const ref = useRef();

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.09;
  });

  return (
    <group ref={ref} position={[0, 0, -1]}>
      <primitive object={planet.scene} scale={2.3} />
    </group>
  );
};

export default PlanetModel;
