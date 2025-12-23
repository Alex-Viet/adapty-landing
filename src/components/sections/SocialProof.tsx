import { motion } from "framer-motion";

import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

const LOGOS = ["HyperPlay", "ZenFit", "Pulse", "Bloom", "Nova", "Calmly"];

export function SocialProof() {
  return (
    <section className="py-14 sm:py-20">
      <Container as="section">
        <SectionTitle
          eyebrow="Trusted"
          title="Over $500M/year of in-app purchases processed"
          description="A lightweight social-proof block to make the landing feel complete and credible."
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mt-10"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {LOGOS.map((name) => (
                <div
                  key={name}
                  className="flex items-center justify-center rounded-2xl border border-white/10 bg-black/30 px-5 py-6"
                >
                  <div className="text-sm font-semibold tracking-wide text-white/70">
                    {name}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center">
                <div className="text-2xl font-semibold">$500M+</div>
                <div className="mt-1 text-xs text-white/50">
                  annual processed revenue
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center">
                <div className="text-2xl font-semibold">3–5 days</div>
                <div className="mt-1 text-xs text-white/50">
                  typical integration time
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center">
                <div className="text-2xl font-semibold">+10–20%</div>
                <div className="mt-1 text-xs text-white/50">
                  uplift with continuous tests
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}


