import { Container, SectionHeading } from "./ui/primitives";
import { Stagger, StaggerItem } from "./ui/Reveal";
import { Atom, GitBranch, ScanLine } from "lucide-react";

const steps = [
  {
    num: "01",
    principle: "The Observer Effect",
    title: "Observe",
    desc: "On the quantum scale, reality doesn't settle until it's measured. Train attention as your instrument of observation — noticing thoughts, emotions, and sensations without becoming fused to them.",
    Icon: ScanLine,
  },
  {
    num: "02",
    principle: "Superposition",
    title: "Reframe",
    desc: "A particle exists in multiple states at once until it's observed. Apply the same logic to interpretation: any thought is one of many possible readings — not the final truth.",
    Icon: GitBranch,
  },
  {
    num: "03",
    principle: "Waveform Collapse",
    title: "Collapse",
    desc: "Choose the state you want to live from, then reinforce it with daily practice until it becomes your default reality — a new belief, a new baseline, a new you.",
    Icon: Atom,
  },
];

export function Method() {
  return (
    <section id="method" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-[0.5]" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-[120%] -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <Container>
        <SectionHeading
          eyebrow="The method"
          title={
            <>
              Understand reality.
              <br className="hidden sm:block" /> Transform your mind.
            </>
          }
          description="QuantaMind translates the three principles that govern the quantum world into a repeatable inner-work system you can practice in minutes a day."
        />

        <div className="relative mt-16">
          {/* connector line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />

          <Stagger className="grid gap-10 lg:grid-cols-3 lg:gap-6">
            {steps.map((s) => (
              <StaggerItem key={s.num} className="relative">
                <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="relative mb-6 flex h-20 w-20 items-center justify-center">
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/25 to-cyan-500/10 blur-lg" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl glass shadow-glow">
                      <s.Icon className="h-8 w-8 text-brand-300" />
                    </div>
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-ink-900 font-mono text-[11px] font-medium text-brand-300 ring-1 ring-brand-500/40">
                      {s.num}
                    </span>
                  </div>

                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300/80">
                    {s.principle}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
                    {s.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
