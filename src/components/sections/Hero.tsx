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
              className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
            >
              <span className="bg-gradient-to-r from-[#2E7BFF] via-[#5A54FF] to-[var(--a-primary)] bg-clip-text text-transparent">
                Revenue
              </span>{" "}
              <span className="bg-gradient-to-r from-[#2E7BFF] via-[#5A54FF] to-[var(--a-primary)] bg-clip-text text-transparent">
                management
              </span>{" "}
              <span className="bg-gradient-to-r from-[#2E7BFF] via-[#5A54FF] to-[var(--a-primary)] bg-clip-text text-transparent">
                for in-app
              </span>{" "}
              <span className="bg-gradient-to-r from-[#2E7BFF] via-[#5A54FF] to-[var(--a-primary)] bg-clip-text text-transparent">
                purchases
              </span>
            </motion.h1>

            <motion.p
              variants={child}
              className="mt-6 max-w-xl text-[16px] leading-relaxed text-[var(--a-text-muted)] sm:text-[18px]"
            >
              Ship subscriptions fast, run experiments without waiting for
              releases, and understand what drives revenue — all in one
              platform.
            </motion.p>

            <motion.div variants={child} className="mt-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="flex h-12 items-center rounded-xl border border-[var(--a-border)] bg-white px-4 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                    <input
                      className="w-full bg-transparent text-[14px] text-[var(--a-text)] outline-none placeholder:text-[rgba(0,0,0,0.42)]"
                      placeholder="Email address"
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <Button>Start for free</Button>
                </div>
              </div>
              <div className="mt-3">
                <a
                  className="inline-flex items-center gap-1 text-[14px] font-semibold text-[var(--a-primary)] hover:text-[var(--a-primary-hover)]"
                  href="#"
                >
                  Book a demo <span aria-hidden="true">›</span>
                </a>
              </div>
            </motion.div>

            <motion.div variants={child} className="mt-8">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[rgba(0,0,0,0.55)]">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[var(--a-primary)]" />
                  <div>SDK + Paywalls</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[var(--a-primary)]" />
                  <div>A/B testing</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[var(--a-primary)]" />
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
              <div className="absolute -inset-10 -z-10 rounded-[32px] bg-[radial-gradient(520px_circle_at_40%_30%,rgba(103,32,255,0.10),transparent_55%)] blur-2xl" />

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
                <div className="rounded-[28px] bg-white shadow-[0_24px_60px_-42px_rgba(0,0,0,0.35)]">
                  <div className="overflow-hidden rounded-[28px] border border-[rgba(0,0,0,0.06)]">
                    <img
                      alt="Adapty overview"
                      className="h-auto w-full"
                      src="https://adapty.io/assets/uploads/2025/02/adapty-overview@2x.webp"
                    />
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


