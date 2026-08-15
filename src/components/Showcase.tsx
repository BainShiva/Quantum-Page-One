import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  BookOpen,
  BarChart3,
  Settings,
  User,
  Flame,
  ScanLine,
  GitBranch,
  Atom,
  Check,
  Sparkles,
} from "lucide-react";
import { Container, Eyebrow, GlowOrb } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";
import { cn } from "@/utils/cn";

const modules = [
  {
    id: "observe",
    label: "Observe",
    Icon: ScanLine,
    headline: "Morning attention scan",
    body: "A 5-minute guided session that measures and steadies your awareness before the day begins.",
    points: ["Present-moment anchoring", "Thought labeling practice", "Attention drift tracking"],
  },
  {
    id: "reframe",
    label: "Reframe",
    Icon: GitBranch,
    headline: "Superposition reframe",
    body: "Take a charged thought and map every alternative reading — then consciously choose the useful one.",
    points: ["Automatic-thought capture", "Alternative-state mapping", "Chosen interpretation lock-in"],
  },
  {
    id: "collapse",
    label: "Collapse",
    Icon: Atom,
    headline: "Belief collapse session",
    body: "Dissolve a limiting belief and install a deliberate replacement with spaced repetition.",
    points: ["Limiting-belief identification", "Evidence reframing", "New baseline reinforcement"],
  },
];

function ModuleVisual({ id }: { id: string }) {
  if (id === "observe") {
    return (
      <div className="flex items-center justify-center py-4">
        <div className="relative flex h-36 w-36 items-center justify-center">
          <motion.span
            className="absolute inset-0 rounded-full border border-brand-400/40"
            animate={{ scale: [1, 1.18, 1], opacity: [0.9, 0.3, 0.9] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute inset-4 rounded-full border border-cyan-400/30"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-cyan-500 shadow-glow">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>
    );
  }

  if (id === "reframe") {
    return (
      <div className="space-y-2.5 py-2">
        <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
          <p className="text-xs text-slate-500">Automatic thought</p>
          <p className="mt-1 text-sm text-slate-300 line-through decoration-rose-400/60">
            “I always mess this up.”
          </p>
        </div>
        <div className="flex items-center gap-2 px-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-300/80">
            alternatives
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/40 to-transparent" />
        </div>
        <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] p-3">
          <p className="mt-1 flex items-center gap-2 text-sm text-emerald-300">
            <Check className="h-4 w-4" /> “I'm learning, and each attempt compounds.”
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3 py-2">
      <div>
        <div className="mb-1.5 flex items-center justify-between text-xs">
          <span className="text-slate-400">Old belief</span>
          <span className="font-mono text-slate-500">dissolving</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-rose-400 to-fuchsia-400"
            initial={{ width: "86%" }}
            animate={{ width: "18%" }}
            transition={{ duration: 2.4, ease: "easeInOut" }}
          />
        </div>
      </div>
      <div>
        <div className="mb-1.5 flex items-center justify-between text-xs">
          <span className="text-slate-400">New baseline</span>
          <span className="font-mono text-emerald-400">installing</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-brand-400 to-cyan-400"
            initial={{ width: "12%" }}
            animate={{ width: "82%" }}
            transition={{ duration: 2.4, ease: "easeInOut", delay: 0.2 }}
          />
        </div>
      </div>
    </div>
  );
}

export function Showcase() {
  const [active, setActive] = useState(modules[0].id);
  const current = modules.find((m) => m.id === active)!;

  return (
    <section id="product" className="relative overflow-hidden py-24 sm:py-32">
      <GlowOrb className="animate-drift right-0 top-1/4 -z-10 h-[500px] w-[500px] bg-brand-600/15" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left copy + selector */}
          <div>
            <Reveal>
              <Eyebrow>Inside the app</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] text-white sm:text-5xl">
                Your mind, <span className="text-gradient-brand">visualized.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-slate-400">
                QuantaMind turns abstract inner work into a guided, measurable
                daily practice. Pick a module to preview how each session feels.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col gap-2.5">
                {modules.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setActive(m.id)}
                    className={cn(
                      "group relative flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300",
                      active === m.id
                        ? "border-brand-400/40 bg-brand-500/[0.08] shadow-glow"
                        : "border-white/8 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors",
                        active === m.id
                          ? "bg-gradient-to-br from-brand-500 to-cyan-500 text-white"
                          : "bg-white/5 text-slate-300",
                      )}
                    >
                      <m.Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-display text-base font-semibold text-white">
                        {m.label}
                      </span>
                      <span className="block text-sm text-slate-400">
                        {m.headline}
                      </span>
                    </span>
                    {active === m.id && (
                      <motion.span
                        layoutId="module-dot"
                        className="ml-auto h-2 w-2 rounded-full bg-cyan-400"
                      />
                    )}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: dashboard mockup */}
          <Reveal delay={0.15} y={40}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-600/25 via-transparent to-cyan-500/15 blur-2xl" />

              <div className="glass-strong overflow-hidden rounded-3xl shadow-2xl">
                {/* chrome */}
                <div className="flex items-center gap-3 border-b border-white/5 px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="mx-auto flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1 font-mono text-[11px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    app.quantamind.com
                  </div>
                  <span className="hidden items-center gap-1 rounded-lg bg-amber-400/10 px-2 py-1 text-[11px] font-semibold text-amber-300 sm:flex">
                    <Flame className="h-3.5 w-3.5" /> 23
                  </span>
                </div>

                <div className="flex">
                  {/* sidebar */}
                  <aside className="hidden w-16 flex-col items-center gap-2 border-r border-white/5 py-4 sm:flex">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white">
                      <Home className="h-5 w-5" />
                    </span>
                    {[BookOpen, BarChart3, Settings].map((Icon, i) => (
                      <span
                        key={i}
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500"
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                    ))}
                    <span className="mt-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-300">
                      <User className="h-5 w-5" />
                    </span>
                  </aside>

                  {/* main */}
                  <div className="flex-1 space-y-4 p-4 sm:p-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs text-slate-500">Good morning</p>
                        <h3 className="font-display text-xl font-semibold text-white">
                          Maya's inner lab
                        </h3>
                      </div>
                      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                        Day 23 · steady
                      </span>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="rounded-2xl border border-white/8 bg-white/[0.03] p-5"
                      >
                        <div className="flex items-center gap-2">
                          <current.Icon className="h-5 w-5 text-brand-300" />
                          <span className="font-mono text-[11px] uppercase tracking-widest text-brand-300">
                            {current.label}
                          </span>
                        </div>
                        <h4 className="mt-2 font-display text-lg font-semibold text-white">
                          {current.headline}
                        </h4>
                        <p className="mt-1 text-sm text-slate-400">{current.body}</p>
                        <ModuleVisual id={current.id} />
                        <ul className="mt-3 space-y-1.5 border-t border-white/5 pt-3">
                          {current.points.map((p) => (
                            <li key={p} className="flex items-center gap-2 text-xs text-slate-400">
                              <Check className="h-3.5 w-3.5 text-cyan-400" /> {p}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </AnimatePresence>

                    {/* metrics */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "Focus depth", value: "78%", bar: "w-[78%]", tone: "from-brand-400 to-cyan-400" },
                        { label: "Awareness", value: "92", bar: "w-[92%]", tone: "from-fuchsia-400 to-purple-400" },
                        { label: "Calm", value: "84", bar: "w-[84%]", tone: "from-emerald-400 to-teal-400" },
                      ].map((m) => (
                        <div key={m.label} className="rounded-xl border border-white/8 bg-white/[0.02] p-3">
                          <p className="text-[10px] text-slate-500">{m.label}</p>
                          <p className="mt-0.5 font-display text-lg font-semibold text-white">
                            {m.value}
                          </p>
                          <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                            <div className={`h-full rounded-full bg-gradient-to-r ${m.tone} ${m.bar}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
