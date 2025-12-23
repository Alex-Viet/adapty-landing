import { motion } from "framer-motion";

import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function CTA() {
  return (
    <section className="py-14 sm:py-20">
      <Container as="section">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 sm:p-10">
            <div className="absolute -inset-10 -z-10 bg-[radial-gradient(500px_circle_at_30%_20%,rgba(217,70,239,0.18),transparent_55%),radial-gradient(650px_circle_at_80%_60%,rgba(59,130,246,0.14),transparent_60%)] blur-2xl" />

            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
                  Ready to improve subscription revenue?
                </div>
                <div className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
                  Start for free, ship a paywall, and run your first experiment
                  today. This block is intentionally simple to keep the task
                  within one hour.
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end lg:flex-col lg:items-end">
                  <div>
                    <Button>Start for free</Button>
                  </div>
                  <div>
                    <Button variant="secondary" rightIcon={null}>
                      Schedule a demo
                    </Button>
                  </div>
                </div>
                <div className="mt-4 text-right text-xs text-white/40">
                  No credit card required · Cancel anytime
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
