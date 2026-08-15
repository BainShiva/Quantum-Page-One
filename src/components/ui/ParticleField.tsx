import { useMemo } from "react";
import { cn } from "@/utils/cn";

type ParticleFieldProps = {
  count?: number;
  className?: string;
  color?: string;
  maxSize?: number;
};

export function ParticleField({
  count = 40,
  className,
  color = "rgba(165, 180, 252, 0.7)",
  maxSize = 3,
}: ParticleFieldProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * maxSize + 1,
        delay: Math.random() * 6,
        duration: 4 + Math.random() * 5,
      })),
    [count, maxSize],
  );

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="animate-twinkle absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: color,
            boxShadow: `0 0 ${p.size * 3}px ${color}`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
