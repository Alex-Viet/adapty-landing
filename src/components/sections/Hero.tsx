import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const parent = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.06,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
  };

  return (
    <section className="pt-10 sm:pt-14">
      <Container as="section">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div variants={parent} initial="hidden" animate="show">
            <motion.div variants={child}>
              <a href="#" aria-label="Download the $100K playbook">
                <Badge tone="brand">Ebook $100K playbook · download</Badge>
              </a>
            </motion.div>

            <motion.h1
              variants={child}
              className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl"
            >
              Revenue management for in-app purchases
            </motion.h1>

            <motion.p
              variants={child}
              className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
            >
              Ship subscriptions fast, run experiments without waiting for
              releases, and understand what drives revenue — all in one
              platform.
            </motion.p>

            <motion.div variants={child} className="mt-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="flex h-12 items-center rounded-full border border-white/12 bg-white/5 px-4 text-sm text-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                    <span className="text-white/50">Email address</span>
                  </div>
                </div>
                <div>
                  <Button>Start for free</Button>
                </div>
              </div>
              <div className="mt-3">
                <Button variant="secondary" rightIcon={null}>
                  Book a demo
                </Button>
              </div>
            </motion.div>

            <motion.div variants={child} className="mt-8">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/50">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                  <div>SDK + Paywalls</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-sky-400/80" />
                  <div>A/B testing</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-fuchsia-400/80" />
                  <div>Analytics</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(500px_circle_at_40%_30%,rgba(217,70,239,0.18),transparent_55%),radial-gradient(600px_circle_at_70%_60%,rgba(59,130,246,0.14),transparent_60%)] blur-2xl" />

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { y: [0, -6, 0], rotate: [0, 0.4, 0] }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 6, repeat: Infinity }
                }
              >
                <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.9)]">
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-semibold tracking-wide text-white/60">
                        Dashboard
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-400/80" />
                        <div className="text-xs text-white/50">Live</div>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="text-xs text-white/50">
                          MRR (last 30 days)
                        </div>
                        <div className="mt-2 text-2xl font-semibold tracking-[-0.02em]">
                          $128,430
                        </div>
                        <div className="mt-3 h-8 rounded-lg bg-[linear-gradient(90deg,rgba(217,70,239,0.35),rgba(59,130,246,0.25),rgba(34,197,94,0.18))]" />
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                          <div className="text-xs text-white/50">
                            Paywall conversion
                          </div>
                          <div className="mt-2 text-xl font-semibold">3.8%</div>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                          <div className="text-xs text-white/50">
                            Trials → paid
                          </div>
                          <div className="mt-2 text-xl font-semibold">52%</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold">A/B Test</div>
                      <div className="text-xs text-white/50">Paywall v2</div>
                    </div>
                    <div className="mt-3 grid gap-2">
                      <div className="h-2 rounded-full bg-white/10">
                        <div className="h-2 w-[62%] rounded-full bg-fuchsia-400/70" />
                      </div>
                      <div className="flex items-center justify-between text-xs text-white/50">
                        <div>Variant B</div>
                        <div>+14% uplift</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}


