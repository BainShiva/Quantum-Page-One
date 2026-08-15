import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Lock } from "lucide-react";
import { Container } from "./ui/primitives";
import { ParticleField } from "./ui/ParticleField";
import { Reveal } from "./ui/Reveal";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section id="cta" className="relative py-24 sm:py-32">
      <Container>
        <Reveal y={36}>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-16 text-center sm:px-12 sm:py-20">
            {/* background */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_160%_at_50%_-20%,rgba(124,58,237,0.55),rgba(37,99,235,0.35)_50%,rgba(6,7,15,0.9))]" />
            <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
            <ParticleField count={30} className="-z-10" color="rgba(255,255,255,0.5)" />
            <div className="noise absolute inset-0 -z-10 opacity-[0.05]" />
            <div className="animate-aurora absolute -top-24 left-1/2 -z-10 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/40 blur-[100px]" />

            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              Begin today
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              The universe is already observing you.
              <br className="hidden sm:block" /> Start observing back.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-slate-200/90">
              Join 40,000+ curious minds learning to collapse the stories that
              hold them back and design the reality they actually want.
            </p>

            {submitted ? (
              <div className="mx-auto mt-9 flex max-w-md items-center justify-center gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-6 py-4 text-emerald-200">
                <Check className="h-5 w-5" />
                <span className="font-medium">
                  You're in! Check your inbox to begin your first session.
                </span>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="cta-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="cta-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full flex-1 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white placeholder:text-slate-300/70 backdrop-blur transition-colors focus:border-white/40 focus:bg-white/15 focus:outline-none"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-semibold text-ink-950 transition-all hover:bg-slate-100 hover:shadow-[0_20px_50px_-15px_rgba(255,255,255,0.5)]"
                >
                  Start free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}

            <p className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-300/80">
              <Lock className="h-4 w-4" />
              Free forever plan · No credit card required · Cancel anytime
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
