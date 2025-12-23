import { motion } from "framer-motion";
import { BarChart3, Code2, Megaphone, Sparkles } from "lucide-react";
import type { ComponentType } from "react";

import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

type RoleCard = {
  title: string;
  subtitle: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  bullets: string[];
};

const CARDS: RoleCard[] = [
  {
    title: "For developers",
    subtitle: "Ship subscriptions fast and safely.",
    icon: Code2,
    bullets: [
      "Subscriptions SDK",
      "Refund saver",
      "Remote config",
      "Fallback paywalls",
    ],
  },
  {
    title: "For app owners",
    subtitle: "See revenue drivers clearly.",
    icon: BarChart3,
    bullets: ["Revenue analytics", "LTV analytics", "AI revenue prediction"],
  },
  {
    title: "For marketers",
    subtitle: "Move faster without releases.",
    icon: Megaphone,
    bullets: ["A/B testing", "No‑code builder", "Localization", "Targeting"],
  },
];

export function Features() {
  return (
    <section className="py-14 sm:py-20">
      <Container as="section">
        <SectionTitle
          eyebrow="Solution"
          title="Help your team run the mobile subscription business. Faster and cheaper."
          description="Everything you need to integrate, experiment, and optimize — built for the teams shipping revenue."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:gap-6">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                whileHover={{ y: -6 }}
              >
                <div className="group h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 shadow-[0_18px_60px_-48px_rgba(0,0,0,0.95)] transition">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                        <Icon className="text-white/80" size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{card.title}</div>
                        <div className="mt-1 text-sm text-white/60">
                          {card.subtitle}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                      <div className="flex items-center gap-2">
                        <Sparkles size={14} className="text-fuchsia-300/80" />
                        <div>Fast wins</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="grid gap-2">
                      {card.bullets.map((b) => (
                        <div
                          key={b}
                          className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/70"
                        >
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                    <div className="mt-4 text-xs text-white/50">
                      Designed to feel like a product — not a dashboard dump.
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}


