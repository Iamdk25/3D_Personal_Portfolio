import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 700px)");
    setIsMobile(query.matches);
    const onChange = (event) => setIsMobile(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return isMobile;
};

const DeskModel = () => {
  const computer = useGLTF("desktop_pc/scene.gltf");
  const group = useRef();
  const isMobile = useIsMobile();

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.11;
  });

  return (
    <group
      ref={group}
      scale={isMobile ? 0.42 : 0.72}
      position={isMobile ? [0, -3.9, -3.5] : [3.5, -3.1, -2]}
    >
      <primitive object={computer.scene} rotation={[0, -0.4, 0]} />
    </group>
  );
};

export default DeskModel;
