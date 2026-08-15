import { Check, X, MoveRight } from "lucide-react";
import { Container, Eyebrow, GlowOrb } from "./ui/primitives";
import { Reveal, Stagger, StaggerItem } from "./ui/Reveal";

const outcomes = [
  { title: "Fall asleep with a quiet mind", desc: "Catch the 2am spiral early and return to center in under a minute." },
  { title: "Decide with real confidence", desc: "Hold options open without the fear that collapses them too soon." },
  { title: "Respond, don't react", desc: "Notice the emotional state before it becomes the story you tell." },
  { title: "Sustain deep focus", desc: "Direct attention deliberately instead of letting it scatter." },
];

const before = [
  "Racing thoughts at 2am",
  "Decision paralysis under pressure",
  "Self-criticism on repeat",
  "Attention pulled everywhere",
];

const after = [
  "Thoughts noticed, not obeyed",
  "Clarity even under pressure",
  "A kinder inner voice",
  "Focused, present attention",
];

const statStrip = [
  { value: "3 min", label: "average daily practice" },
  { value: "30 days", label: "to a measurable shift" },
  { value: "92%", label: "finish the full program" },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden py-24 sm:py-32">
      <GlowOrb className="animate-drift -left-40 top-1/3 -z-10 h-[440px] w-[440px] bg-fuchsia-600/10" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: outcomes */}
          <div>
            <Reveal>
              <Eyebrow>The outcomes</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] text-white sm:text-5xl">
                Results you can feel, <br className="hidden sm:block" />
                not just <span className="text-gradient-brand">think about.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-slate-400">
                The goal isn't more information about your mind — it's a
                different experience of it. Members report measurable change
                within the first month.
              </p>
            </Reveal>

            <Stagger className="mt-9 space-y-5">
              {outcomes.map((o) => (
                <StaggerItem key={o.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 ring-1 ring-emerald-400/30">
                    <Check className="h-4 w-4 text-emerald-300" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {o.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{o.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Right: before / after */}
          <Reveal delay={0.1} y={36}>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-rose-500/10 via-transparent to-emerald-500/10 blur-2xl" />

              <div className="glass-strong rounded-3xl p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-white">
                    Your inner state, 30 days apart
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
                    member avg
                  </span>
                </div>

                {/* Before */}
                <div className="mt-5 rounded-2xl border border-rose-400/15 bg-rose-500/[0.05] p-5">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-rose-300/80">
                    Before
                  </span>
                  <ul className="mt-3 space-y-2.5">
                    {before.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-slate-300">
                        <X className="h-4 w-4 shrink-0 text-rose-400/80" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* arrow */}
                <div className="flex justify-center py-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-cyan-500 shadow-glow">
                    <MoveRight className="h-4 w-4 text-white" />
                  </span>
                </div>

                {/* After */}
                <div className="rounded-2xl border border-emerald-400/15 bg-emerald-500/[0.05] p-5">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-300/80">
                    After
                  </span>
                  <ul className="mt-3 space-y-2.5">
                    {after.map((a) => (
                      <li key={a} className="flex items-center gap-2.5 text-sm text-slate-200">
                        <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* stat strip */}
        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 sm:grid-cols-3">
            {statStrip.map((s) => (
              <div key={s.label} className="bg-ink-900/80 px-6 py-8 text-center">
                <div className="font-display text-3xl font-semibold text-gradient-brand">
                  {s.value}
                </div>
                <p className="mt-1.5 text-sm text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
