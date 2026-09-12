import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Dense animated point lattice — the visual echo of the "1M+ data points at
 * 60 fps" line on the resume. Positions are computed once; each frame only the
 * z component is rewritten, so the animation stays cheap.
 */
const COLS = 150;
const ROWS = 64;

const DataLattice = (props) => {
  const ref = useRef();

  const { positions, base, colors } = useMemo(() => {
    const count = COLS * ROWS;
    const positions = new Float32Array(count * 3);
    const base = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const violet = new THREE.Color("#915eff");
    const cyan = new THREE.Color("#22d3ee");

    let i = 0;
    for (let cx = 0; cx < COLS; cx += 1) {
      for (let cy = 0; cy < ROWS; cy += 1) {
        const x = (cx / (COLS - 1) - 0.5) * 22;
        const y = (cy / (ROWS - 1) - 0.5) * 11;
        const jitter = (Math.random() - 0.5) * 0.06;

        positions[i] = x + jitter;
        positions[i + 1] = y + jitter;
        positions[i + 2] = 0;
        base[i] = x;
        base[i + 1] = y;
        base[i + 2] = 0;

        const mix = Math.min(1, Math.abs(x) / 11) * 0.85 + Math.random() * 0.15;
        const color = violet.clone().lerp(cyan, mix);
        colors[i] = color.r;
        colors[i + 1] = color.g;
        colors[i + 2] = color.b;
        i += 3;
      }
    }

    return { positions, base, colors };
  }, []);

  useFrame(({ clock }) => {
    const mesh = ref.current;
    if (!mesh) return;
    const t = clock.getElapsedTime();
    const attr = mesh.geometry.attributes.position;
    const arr = attr.array;

    for (let i = 0; i < arr.length; i += 3) {
      const x = base[i];
      const y = base[i + 1];
      arr[i + 2] =
        Math.sin(x * 0.42 + t * 0.8) * Math.cos(y * 0.5 + t * 0.55) * 1.15;
    }

    attr.needsUpdate = true;
    mesh.rotation.z = Math.sin(t * 0.06) * 0.06;
  });

  return (
    <points ref={ref} {...props}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        transparent
        opacity={0.9}
        size={0.075}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default DataLattice;
