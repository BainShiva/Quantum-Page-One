import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Container, SectionHeading } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";
import { cn } from "@/utils/cn";

const faqs = [
  {
    q: "Is this science or spirituality?",
    a: "Deliberately both. The quantum concepts are used as precise metaphors — rooted in how measurement and observation actually behave — paired with evidence-based psychology like CBT, mindfulness, and acceptance work. No pseudo-science, no mysticism, just a rigorous frame for inner work.",
  },
  {
    q: "Do I need to understand physics?",
    a: "None at all. We explain the three core principles in plain language during your first session. You'll understand why each exercise works — and that understanding is precisely what makes the practice stick.",
  },
  {
    q: "How much time does it take each day?",
    a: "The core practice is 3–10 minutes a day. The system is built for consistency over intensity — it's designed to fit into a busy life, not compete with one.",
  },
  {
    q: "Is there a free version?",
    a: "Yes. The Observer plan is free forever and includes 5 core sessions, the daily attention scan, and mood tracking. Upgrade whenever you want the full library and analytics.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "Every paid plan comes with a 30-day money-back guarantee. Complete the first 30 days, and if you don't feel a measurable shift, email us for a full refund — no questions asked.",
  },
  {
    q: "Can I use it alongside therapy?",
    a: "Absolutely — many members do. QuantaMind is a training practice, not a replacement for medical or psychological care. If you're in treatment, it's designed to complement it, and we encourage you to keep your care team informed.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, observed."
          description="Everything you might be wondering before you begin."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="space-y-3">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} delay={i * 0.04}>
                  <div
                    className={cn(
                      "overflow-hidden rounded-2xl border transition-colors duration-300",
                      isOpen
                        ? "border-brand-400/30 bg-white/[0.04]"
                        : "border-white/8 bg-white/[0.02] hover:border-white/15",
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-display text-base font-semibold text-white sm:text-lg">
                        {item.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors",
                          isOpen ? "bg-gradient-to-br from-brand-500 to-cyan-500 text-white" : "bg-white/5 text-slate-300",
                        )}
                      >
                        <Plus className="h-4 w-4" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p className="px-6 pb-6 text-sm leading-relaxed text-slate-400 sm:text-base">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
