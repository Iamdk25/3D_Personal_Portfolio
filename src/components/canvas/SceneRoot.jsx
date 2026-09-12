import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

import DataLattice from "./DataLattice";
import DeskModel from "./DeskModel";
import PlanetModel from "./PlanetModel";
import StarField from "./StarField";
import TechOrbit from "./TechOrbit";

/**
 * One shared WebGL canvas for the whole page.
 *
 * Sections live in normal DOM flow; each 3D "set piece" sits at the world
 * position matching its section's scroll progress, and the camera travels that
 * same path — so scrolling walks the camera through the scene instead of
 * spawning one canvas per section (which exhausted the browser's WebGL context
 * budget: the old build ran 15 of them).
 */

const SECTION_IDS = ["home", "about", "experience", "tech", "projects", "contact"];
const SCENE_SPAN = 60;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const measureAnchors = () => {
  const doc = document.documentElement;
  const max = Math.max(1, doc.scrollHeight - window.innerHeight);
  const anchors = {};

  for (const id of SECTION_IDS) {
    const element = document.getElementById(id);
    anchors[id] = element
      ? clamp((element.getBoundingClientRect().top + window.scrollY) / max, 0, 1)
      : 0;
  }

  return { anchors, max };
};

const Rig = ({ scrollRef, maxRef, pointerRef }) => {
  const { camera } = useThree();
  const smoothed = useRef(0);

  useFrame((_, delta) => {
    const target = clamp(scrollRef.current / maxRef.current, 0, 1);
    smoothed.current = THREE.MathUtils.damp(smoothed.current, target, 4, delta);
    const y = -smoothed.current * SCENE_SPAN;

    camera.position.y = y;
    camera.position.x = THREE.MathUtils.damp(
      camera.position.x,
      pointerRef.current.x * 0.9,
      3,
      delta
    );
    camera.lookAt(0, y, 0);
  });

  return null;
};

const SceneRoot = () => {
  const scrollRef = useRef(0);
  const maxRef = useRef(1);
  const pointerRef = useRef({ x: 0, y: 0 });
  const [anchors, setAnchors] = useState({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const update = () => {
      const measured = measureAnchors();
      setAnchors(measured.anchors);
      maxRef.current = measured.max;
      scrollRef.current = window.scrollY;
      setReady(true);
    };

    update();

    // Section offsets move while images and fonts stream in, and a stale anchor
    // shifts a set piece out of the camera's path — so keep re-measuring until
    // the layout settles.
    const observer = new ResizeObserver(update);
    observer.observe(document.body);
    window.addEventListener("load", update);
    const settle = [400, 1200, 3000, 6000].map((delay) => setTimeout(update, delay));

    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    const onPointer = (event) => {
      pointerRef.current = {
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      observer.disconnect();
      settle.forEach(clearTimeout);
      window.removeEventListener("load", update);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  const y = useMemo(() => (id) => -((anchors[id] ?? 0) * SCENE_SPAN), [anchors]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 16], fov: 42, near: 0.1, far: 220 }}
      >
        <fog attach="fog" args={["#050816", 30, 120]} />
        <ambientLight intensity={0.85} />
        <hemisphereLight intensity={1.9} groundColor="#0b0a22" />
        <spotLight position={[-18, 24, 14]} angle={0.4} penumbra={1} intensity={3.2} />
        <pointLight position={[12, -8, 10]} intensity={1.8} color="#915eff" />
        <pointLight position={[-10, 6, -6]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[5, -1, 7]} intensity={2.2} color="#ffffff" />
        <pointLight position={[0, -42, 8]} intensity={1.6} color="#22d3ee" />
        <pointLight position={[0, -56, 8]} intensity={1.6} color="#915eff" />

        <StarField />

        {ready && (
          <Suspense fallback={null}>
            <group position={[0, y("home"), 0]}>
              <DeskModel />
              <DataLattice position={[0, 0.6, -7]} />
            </group>
            <group position={[0, y("tech"), 0]}>
              <TechOrbit />
            </group>
            <group position={[0, y("contact"), 0]}>
              <PlanetModel />
            </group>
          </Suspense>
        )}

        <Rig scrollRef={scrollRef} maxRef={maxRef} pointerRef={pointerRef} />
      </Canvas>
    </div>
  );
};

export default SceneRoot;
