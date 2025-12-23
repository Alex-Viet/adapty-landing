import { motion } from "framer-motion";

import { Container } from "../ui/Container";

const LOGOS = ["HyperPlay", "ZenFit", "Pulse", "Bloom", "Nova", "Calmly"];

export function SocialProof() {
  return (
    <section className="py-14 sm:py-20">
      <Container as="section">
        <div className="text-center">
          <div className="text-[14px] font-semibold text-[rgba(0,0,0,0.55)]">
            Trusted by 15,000+ apps and the world's largest app publishers
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mt-10"
        >
          <div className="rounded-3xl border border-[rgba(0,0,0,0.06)] bg-white/60 p-6">
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {LOGOS.map((name) => (
                <div
                  key={name}
                  className="flex items-center justify-center rounded-2xl border border-[rgba(0,0,0,0.06)] bg-white px-5 py-6"
                >
                  <div className="text-sm font-semibold tracking-wide text-[rgba(0,0,0,0.45)]">
                    {name}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[rgba(0,0,0,0.06)] bg-white p-5 text-center">
                <div className="text-2xl font-semibold">$500M+</div>
                <div className="mt-1 text-xs text-[rgba(0,0,0,0.55)]">
                  annual processed revenue
                </div>
              </div>
              <div className="rounded-2xl border border-[rgba(0,0,0,0.06)] bg-white p-5 text-center">
                <div className="text-2xl font-semibold">3–5 days</div>
                <div className="mt-1 text-xs text-[rgba(0,0,0,0.55)]">
                  typical integration time
                </div>
              </div>
              <div className="rounded-2xl border border-[rgba(0,0,0,0.06)] bg-white p-5 text-center">
                <div className="text-2xl font-semibold">+10–20%</div>
                <div className="mt-1 text-xs text-[rgba(0,0,0,0.55)]">
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


