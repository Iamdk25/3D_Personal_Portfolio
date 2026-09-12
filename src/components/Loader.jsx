import React, { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";

const Loader = () => {
  const { active, progress } = useProgress();
  const [dismissed, setDismissed] = useState(false);

  const done = !active && progress >= 100;

  useEffect(() => {
    if (!done) return undefined;
    const timer = setTimeout(() => setDismissed(true), 500);
    return () => clearTimeout(timer);
  }, [done]);

  // never leave the visitor staring at an overlay if a load silently stalls
  useEffect(() => {
    const failsafe = setTimeout(() => setDismissed(true), 8000);
    return () => clearTimeout(failsafe);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-primary transition-opacity duration-500 ${
        done ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <span className="kicker">Assembling scene</span>
      <div className="h-[2px] w-56 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full bg-[#915eff] transition-[width] duration-300 ease-out"
          style={{ width: `${Math.min(100, Math.max(4, progress))}%` }}
        />
      </div>
      <span className="font-mono text-[11px] text-secondary">
        {progress.toFixed(0)}%
      </span>
    </div>
  );
};

export default Loader;
