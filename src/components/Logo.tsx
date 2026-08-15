import { cn } from "@/utils/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex", className)}>
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <defs>
          <linearGradient id="qm-nucleus" x1="0" y1="0" x2="48" y2="48">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="55%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <radialGradient id="qm-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="24" cy="24" r="22" fill="url(#qm-glow)" />

        {/* orbits */}
        <ellipse
          cx="24"
          cy="24"
          rx="19"
          ry="7.5"
          stroke="url(#qm-nucleus)"
          strokeWidth="1.1"
          strokeOpacity="0.85"
        />
        <ellipse
          cx="24"
          cy="24"
          rx="19"
          ry="7.5"
          stroke="url(#qm-nucleus)"
          strokeWidth="1.1"
          strokeOpacity="0.45"
          transform="rotate(60 24 24)"
        />
        <ellipse
          cx="24"
          cy="24"
          rx="19"
          ry="7.5"
          stroke="url(#qm-nucleus)"
          strokeWidth="1.1"
          strokeOpacity="0.3"
          transform="rotate(120 24 24)"
        />

        {/* electrons */}
        <circle cx="42.5" cy="24" r="2.6" fill="#22d3ee" />
        <circle cx="24" cy="6.5" r="2.6" fill="#a78bfa" />
        <circle cx="6" cy="17" r="2" fill="#e879f9" />

        {/* nucleus */}
        <circle cx="24" cy="24" r="6.5" fill="url(#qm-nucleus)" />
        <circle cx="24" cy="24" r="6.5" fill="#0b0d1c" fillOpacity="0.15" />
        <circle cx="24" cy="24" r="2.4" fill="#ffffff" fillOpacity="0.9" />
      </svg>
    </span>
  );
}
