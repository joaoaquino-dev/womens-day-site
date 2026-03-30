import { useMemo } from "react";

interface PetalConfig {
  id: number;
  left: string;
  duration: string;
  delay: string;
  rotate: string;
  size: string;
}

export function Petals() {
  const petals = useMemo<PetalConfig[]>(() => {
    return Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      duration: `${8 + Math.random() * 10}s`,
      delay: `${Math.random() * 12}s`,
      rotate: `${Math.random() * 360}deg`,
      size: `${8 + Math.random() * 10}px`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            width: p.size,
            height: `calc(${p.size} * 1.3)`,
            animationDuration: p.duration,
            animationDelay: p.delay,
            transform: `rotate(${p.rotate})`,
          }}
        />
      ))}
    </div>
  );
}
