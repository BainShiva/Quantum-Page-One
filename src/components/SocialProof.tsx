import { Hexagon, Triangle, Command, Orbit, Aperture, Waves, Sparkles, Box } from "lucide-react";
import { Container } from "./ui/primitives";
import { Reveal, Stagger, StaggerItem } from "./ui/Reveal";

const brands = [
  { name: "NeuroFlow", Icon: Waves },
  { name: "Helios", Icon: Aperture },
  { name: "Mindgrid", Icon: Command },
  { name: "Aurora AI", Icon: Sparkles },
  { name: "Cortex", Icon: Box },
  { name: "Lumen", Icon: Orbit },
  { name: "Vantafield", Icon: Triangle },
  { name: "NovaMind", Icon: Hexagon },
];

const stats = [
  { value: "40,000+", label: "minds trained worldwide" },
  { value: "92%", label: "report lower anxiety in 30 days" },
  { value: "4.9/5", label: "average member rating" },
  { value: "120+", label: "guided inner-work sessions" },
];

export function SocialProof() {
  return (
    <section className="relative border-y border-white/5 py-14 sm:py-16">
      <Container>
        <Reveal>
          <p className="text-center font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
            Trusted by curious minds at forward-thinking teams
          </p>
        </Reveal>

        <Reveal delay={0.1} className="relative mt-8">
          <div className="mask-fade-x overflow-hidden">
            <div className="animate-marquee flex w-max items-center gap-12 pr-12">
              {[...brands, ...brands].map((b, i) => (
                <div
                  key={`${b.name}-${i}`}
                  className="flex shrink-0 items-center gap-2.5 text-slate-500 transition-colors hover:text-slate-300"
                >
                  <b.Icon className="h-5 w-5" />
                  <span className="font-display text-lg font-semibold tracking-tight">
                    {b.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="text-center">
              <div className="font-display text-4xl font-semibold text-gradient-brand sm:text-5xl">
                {s.value}
              </div>
              <p className="mt-2 text-sm text-slate-500">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
