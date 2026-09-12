import React, { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

/**
 * Sparse violet point cloud that surrounds the camera path so the page never
 * reads as empty space between set pieces.
 */
const StarField = () => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(6000 * 3), { radius: 55 })
  );

  const drift = useRef({ x: 0, y: 0 });
  useFrame((state, delta) => {
    if (!ref.current) return;
    drift.current.y -= delta / 24;
    ref.current.rotation.set(drift.current.y * 0.35, drift.current.y, 0);
    ref.current.position.y = state.camera.position.y;
  });

  const positions = useMemo(() => sphere, [sphere]);

  return (
    <Points
      ref={ref}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#b49cff"
        size={0.35}
        sizeAttenuation
        depthWrite={false}
        opacity={0.42}
      />
    </Points>
  );
};

export default StarField;
