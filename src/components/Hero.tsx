import { ArrowRight, Play, Star, Check, TrendingDown, Zap } from "lucide-react";
import { Container, Eyebrow, GlowOrb } from "./ui/primitives";
import { ParticleField } from "./ui/ParticleField";
import { Reveal } from "./ui/Reveal";

const avatars = [
  { initials: "MK", from: "#8b5cf6", to: "#6366f1" },
  { initials: "JL", from: "#22d3ee", to: "#3b82f6" },
  { initials: "AR", from: "#e879f9", to: "#a855f7" },
  { initials: "TS", from: "#34d399", to: "#0ea5e9" },
  { initials: "DN", from: "#f59e0b", to: "#ef4444" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* background layers */}
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-x" />
      <GlowOrb className="animate-aurora -top-40 left-1/2 -z-10 h-[480px] w-[720px] -translate-x-1/2 bg-brand-600/25" />
      <GlowOrb className="animate-drift -left-40 top-1/3 -z-10 h-[420px] w-[420px] bg-cyan-500/15" />
      <GlowOrb className="animate-drift -right-40 top-1/4 -z-10 h-[420px] w-[420px] bg-fuchsia-500/15" />
      <ParticleField count={46} className="-z-10" />
      <div className="noise absolute inset-0 -z-10 opacity-[0.04]" />

      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Reveal>
            <Eyebrow>Quantum physics × cognitive psychology</Eyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-7 text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Master the physics
              <br className="hidden sm:block" />
              <span className="text-gradient"> of your mind.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-400 sm:text-xl">
              Reality on the quantum scale is shaped by the act of observation.
              QuantaMind turns that insight into a daily practice — science-backed
              inner work that collapses limiting beliefs, trains your attention,
              and lets you design the life you actually live.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
              <a
                href="#cta"
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-brand-500 via-indigo-500 to-brand-500 bg-[length:200%_auto] px-7 py-4 text-base font-semibold text-white shadow-[0_18px_50px_-15px_rgba(124,58,237,0.9)] transition-all duration-500 hover:bg-[position:right_center] hover:shadow-[0_24px_60px_-12px_rgba(124,58,237,1)] sm:w-auto"
              >
                Begin your training
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#method"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl glass px-7 py-4 text-base font-semibold text-white transition-all hover:border-white/20 hover:bg-white/[0.08] sm:w-auto"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                  <Play className="h-3.5 w-3.5 fill-white text-white" />
                </span>
                Watch the method
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <div className="flex -space-x-2.5">
                {avatars.map((a) => (
                  <span
                    key={a.initials}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink-950 text-[10px] font-semibold text-white"
                    style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})` }}
                  >
                    {a.initials}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </span>
                <span>
                  <span className="font-semibold text-white">4.9</span> · 40,000+ minds
                  trained
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Quantum visual */}
        <div className="relative mx-auto mt-16 h-[360px] w-full max-w-[560px] sm:mt-20 sm:h-[460px]">
          <Reveal delay={0.1} y={40} className="h-full">
            <div className="relative h-full w-full">
              {/* ambient glow behind orb */}
              <div className="animate-aurora absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.45),transparent_65%)] blur-2xl" />

              {/* outer dashed ring */}
              <div className="absolute inset-[6%] animate-spin-slow rounded-full border border-dashed border-white/10" />

              {/* orbit 1 */}
              <div className="absolute inset-[14%] animate-spin-slow" style={{ animationDuration: "46s" }}>
                <div className="absolute inset-0 rounded-full border border-brand-400/20" />
                <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_3px_rgba(34,211,238,0.6)]" />
              </div>

              {/* orbit 2 */}
              <div className="absolute inset-[26%] animate-spin-reverse" style={{ animationDuration: "34s" }}>
                <div className="absolute inset-0 rounded-full border border-fuchsia-400/20" />
                <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-fuchsia-300 shadow-[0_0_14px_3px_rgba(232,121,249,0.55)]" />
              </div>

              {/* nucleus */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-float-slow relative flex h-40 w-40 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.9),rgba(167,139,250,0.9)_45%,rgba(124,58,237,0.9))] shadow-glow sm:h-48 sm:w-48">
                  <span className="h-24 w-24 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.5),rgba(255,255,255,0))]" />
                  <span className="absolute -inset-4 rounded-full border border-white/20" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* floating cards */}
          <Reveal delay={0.35} className="absolute -left-2 top-4 hidden sm:block lg:-left-12">
            <div className="animate-float-slow glass-strong w-52 rounded-2xl p-4" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">Weekly anxiety</span>
                <TrendingDown className="h-4 w-4 text-emerald-400" />
              </div>
              <div className="mt-2 flex items-end gap-2">
                <span className="font-display text-3xl font-semibold text-white">−46%</span>
                <span className="mb-1 text-xs text-emerald-400">after 30 days</span>
              </div>
              <svg viewBox="0 0 100 28" className="mt-2 h-7 w-full" preserveAspectRatio="none">
                <path
                  d="M0 24 C 12 22, 18 20, 28 18 S 46 14, 56 11 S 78 6, 100 3"
                  fill="none"
                  stroke="url(#qm-spark)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="qm-spark" x1="0" y1="0" x2="100" y2="0">
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </Reveal>

          <Reveal delay={0.45} className="absolute -right-2 top-16 hidden sm:block lg:-right-12">
            <div className="animate-float-slow glass-strong w-48 rounded-2xl p-4" style={{ animationDelay: "1.4s" }}>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/15">
                  <Check className="h-4 w-4 text-emerald-400" />
                </span>
                <span className="text-xs font-semibold text-white">Belief collapsed</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                3 new possibilities opened in your awareness
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.55} className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 sm:block">
            <div className="animate-float-slow glass-strong flex w-56 items-center gap-3 rounded-2xl p-4" style={{ animationDelay: "2.2s" }}>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500">
                <Zap className="h-4 w-4 text-white" />
              </span>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-xl font-semibold text-white">2.1×</span>
                  <span className="text-xs text-slate-400">deeper focus</span>
                </div>
                <div className="mt-1.5 h-1.5 w-28 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-brand-400 to-cyan-400" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
