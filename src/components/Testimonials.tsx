import { Star, Quote } from "lucide-react";
import { Container, SectionHeading } from "./ui/primitives";
import { Stagger, StaggerItem } from "./ui/Reveal";
import { SpotlightCard } from "./ui/SpotlightCard";

const testimonials = [
  {
    quote:
      "I came for the physics and stayed for the psychology. Observer training alone changed how I relate to my own anxiety — I can watch a spiral start and simply not get on it.",
    name: "Maya Reyes",
    role: "Product Designer",
    initials: "MR",
    tone: "from-brand-500 to-indigo-500",
  },
  {
    quote:
      "The reframing exercises felt almost too simple — until I noticed how often I was running on automatic. Three weeks in, my team says I'm visibly calmer under deadlines.",
    name: "Daniel Kim",
    role: "Founder, Lumen",
    initials: "DK",
    tone: "from-cyan-400 to-sky-500",
  },
  {
    quote:
      "Years of therapy and meditation apps never quite clicked. QuantaMind is the first thing that made me understand *why* attention works — and that understanding made it stick.",
    name: "Priya Sharma",
    role: "Therapist",
    initials: "PS",
    tone: "from-fuchsia-500 to-purple-500",
  },
  {
    quote:
      "The belief collapse session reached something I'd carried for a decade. It sounds dramatic, but it genuinely rewired a story I'd been telling myself my whole life.",
    name: "Alex Morgan",
    role: "Staff Engineer",
    initials: "AM",
    tone: "from-emerald-400 to-teal-500",
  },
  {
    quote:
      "Beautifully designed and genuinely rigorous. It treats your mind with the precision of a physics experiment — measure, observe, choose.",
    name: "Sofia Lindqvist",
    role: "PhD Candidate, Physics",
    initials: "SL",
    tone: "from-amber-400 to-orange-500",
  },
  {
    quote:
      "My focus went from scattered to deep in a month. I finally understand what it means to 'collapse the waveform' on my to-do list.",
    name: "James Torres",
    role: "Writer",
    initials: "JT",
    tone: "from-rose-400 to-pink-600",
  },
];

export function Testimonials() {
  return (
    <section id="results" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Results"
          title={
            <>
              Loved by <span className="text-gradient-brand">curious minds.</span>
            </>
          }
          description="40,000+ people are using quantum principles to do real inner work. Here's what a few of them say."
        />

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <SpotlightCard className="glass h-full rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="flex text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400" />
                      ))}
                    </span>
                    <Quote className="h-6 w-6 text-white/10" />
                  </div>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-300">
                    “{t.quote}”
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.tone} text-xs font-semibold text-white`}
                    >
                      {t.initials}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-white">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
