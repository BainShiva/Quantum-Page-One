import {
  Eye,
  Layers,
  Wand2,
  RefreshCcw,
  Link2,
  Activity,
  ArrowUpRight,
} from "lucide-react";
import { Container, SectionHeading } from "./ui/primitives";
import { Stagger, StaggerItem } from "./ui/Reveal";
import { SpotlightCard } from "./ui/SpotlightCard";

const features = [
  {
    title: "Observer Training",
    desc: "Learn to watch your thoughts without becoming them. Attention is the measurement that collapses possibility — so you choose what gets measured.",
    Icon: Eye,
    accent: "from-brand-500 to-indigo-500",
  },
  {
    title: "Superposition Mindset",
    desc: "Hold multiple futures open before committing to the one that serves you. Fear collapses options prematurely; training keeps them alive.",
    Icon: Layers,
    accent: "from-cyan-400 to-sky-500",
  },
  {
    title: "Belief Collapse",
    desc: "Identify the stories running your life and dissolve the ones that limit you, replacing automatic scripts with deliberate intention.",
    Icon: Wand2,
    accent: "from-fuchsia-500 to-purple-500",
  },
  {
    title: "Quantum Reframing",
    desc: "Shift your frame of reference and reality returns a different result. Reframe the observation to reframe the outcome.",
    Icon: RefreshCcw,
    accent: "from-emerald-400 to-teal-500",
  },
  {
    title: "Habit Entanglement",
    desc: "Wire new behaviors to the triggers you already have, so change becomes automatic instead of effortful — momentum over motivation.",
    Icon: Link2,
    accent: "from-amber-400 to-orange-500",
  },
  {
    title: "The Measurement Effect",
    desc: "Track your inner state daily and watch awareness itself change it. What you measure, you master.",
    Icon: Activity,
    accent: "from-rose-400 to-pink-600",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="The toolkit"
          title={
            <>
              Six practices to rewire
              <br className="hidden sm:block" /> your inner universe
            </>
          }
          description="Each practice translates a principle from quantum physics into a repeatable psychological training — grounded in evidence, taught in plain language."
        />

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <SpotlightCard className="glass h-full rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]">
                <div className="flex h-full flex-col">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} shadow-lg`}
                  >
                    <f.Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-400">
                    {f.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-300 opacity-70 transition-all group-hover:gap-2 group-hover:opacity-100">
                    Explore practice
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
