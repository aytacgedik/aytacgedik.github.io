"use client";

import { useEffect, useRef, useState } from "react";
import { SplineScene } from "../ui/splite";

interface Props {
  scene: string;
  className?: string;
}

export function LazySplineWrapper({ scene, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <SplineScene scene={scene} className={className} />
      ) : (
        <div className="w-full h-full bg-black/10 flex items-center justify-center">
          <span className="text-sm text-neutral-400">Preparing 3D scene...</span>
        </div>
      )}
    </div>
  );
}
