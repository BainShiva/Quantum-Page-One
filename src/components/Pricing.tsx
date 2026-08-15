import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Sparkles, ShieldCheck } from "lucide-react";
import { Container, SectionHeading } from "./ui/primitives";
import { Reveal, Stagger, StaggerItem } from "./ui/Reveal";
import { SpotlightCard } from "./ui/SpotlightCard";
import { cn } from "@/utils/cn";

const plans = [
  {
    name: "Observer",
    tagline: "Start observing your mind.",
    monthly: 0,
    yearly: 0,
    cta: "Start for free",
    popular: false,
    features: [
      "5 core training sessions",
      "Daily attention scan",
      "Mood & state tracking",
      "Community access",
      "iOS, Android & web",
    ],
  },
  {
    name: "Superposition",
    tagline: "The complete inner-work system.",
    monthly: 19,
    yearly: 15,
    cta: "Start 7-day free trial",
    popular: true,
    features: [
      "Everything in Observer",
      "All 120+ guided sessions",
      "Belief Collapse library",
      "Habit Entanglement engine",
      "Progress analytics & insights",
      "Offline mode",
    ],
  },
  {
    name: "Entangled",
    tagline: "Go deeper, together.",
    monthly: 49,
    yearly: 39,
    cta: "Join a live cohort",
    popular: false,
    features: [
      "Everything in Superposition",
      "Live weekly cohort sessions",
      "1:1 monthly coaching call",
      "Custom practice protocols",
      "Priority support",
    ],
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand-600/10 blur-[120px]" />

      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Invest in the mind that
              <br className="hidden sm:block" /> <span className="text-gradient-brand">runs your life.</span>
            </>
          }
          description="Start free. Upgrade when you're ready to go deeper. Every paid plan includes a 30-day, no-questions guarantee."
        />

        {/* toggle */}
        <Reveal delay={0.12}>
          <div className="mt-10 flex items-center justify-center">
            <div className="relative flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1.5">
              <button
                type="button"
                onClick={() => setYearly(false)}
                className="relative rounded-full px-5 py-2 text-sm font-semibold"
              >
                {!yearly && (
                  <motion.span
                    layoutId="billing-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-500 to-indigo-500 shadow-glow"
                  />
                )}
                <span
                  className={cn(
                    "relative z-10 transition-colors",
                    !yearly ? "text-white" : "text-slate-400 hover:text-white",
                  )}
                >
                  Monthly
                </span>
              </button>
              <button
                type="button"
                onClick={() => setYearly(true)}
                className="relative rounded-full px-5 py-2 text-sm font-semibold"
              >
                {yearly && (
                  <motion.span
                    layoutId="billing-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-500 to-indigo-500 shadow-glow"
                  />
                )}
                <span
                  className={cn(
                    "relative z-10 flex items-center gap-2 transition-colors",
                    yearly ? "text-white" : "text-slate-400 hover:text-white",
                  )}
                >
                  Yearly
                  <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[11px] font-semibold text-emerald-300">
                    −20%
                  </span>
                </span>
              </button>
            </div>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly;
            return (
              <StaggerItem key={plan.name} className={cn(plan.popular && "lg:-my-3")}>
                <div
                  className={cn(
                    "h-full rounded-[26px] p-px",
                    plan.popular
                      ? "bg-gradient-to-b from-brand-400/60 via-indigo-500/40 to-cyan-400/40 shadow-[0_30px_80px_-30px_rgba(124,58,237,0.6)]"
                      : "bg-white/8",
                  )}
                >
                  <SpotlightCard
                    className={cn(
                      "h-full rounded-[25px]",
                      plan.popular ? "bg-ink-900/95" : "bg-ink-900/70",
                    )}
                  >
                    <div
                      className={cn(
                        "relative flex h-full flex-col p-7",
                        plan.popular && "pt-9",
                      )}
                    >
                      {plan.popular && (
                        <span className="absolute right-6 top-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-500 to-cyan-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-glow">
                          <Sparkles className="h-3 w-3" /> Most popular
                        </span>
                      )}

                      <h3 className="font-display text-xl font-semibold text-white">
                        {plan.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">{plan.tagline}</p>

                      <div className="mt-6 flex items-end gap-1.5">
                        <AnimatePresence mode="popLayout" initial={false}>
                          <motion.span
                            key={price}
                            initial={{ y: 12, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -12, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="font-display text-5xl font-semibold text-white"
                          >
                            {price === 0 ? "$0" : `$${price}`}
                          </motion.span>
                        </AnimatePresence>
                        <span className="mb-1.5 text-sm text-slate-500">/ month</span>
                      </div>
                      <p className="mt-1 h-4 text-xs text-slate-500">
                        {price === 0
                          ? "Free forever"
                          : yearly
                            ? `Billed annually ($${plan.yearly * 12}/yr)`
                            : "Billed monthly"}
                      </p>

                      <a
                        href="#cta"
                        className={cn(
                          "mt-7 inline-flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-semibold transition-all",
                          plan.popular
                            ? "bg-gradient-to-r from-brand-500 to-indigo-500 text-white shadow-[0_14px_40px_-12px_rgba(124,58,237,0.9)] hover:shadow-[0_18px_50px_-10px_rgba(124,58,237,1)]"
                            : "glass text-white hover:border-white/25 hover:bg-white/[0.06]",
                        )}
                      >
                        {plan.cta}
                      </a>

                      <ul className="mt-7 space-y-3 border-t border-white/5 pt-7">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                            <span
                              className={cn(
                                "flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                                plan.popular
                                  ? "bg-brand-500/20 text-brand-300"
                                  : "bg-white/5 text-slate-400",
                              )}
                            >
                              <Check className="h-3 w-3" />
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SpotlightCard>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-slate-500">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            30-day money-back guarantee · Cancel anytime · Secure checkout
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
