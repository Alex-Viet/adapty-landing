import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";
import { SocialProof } from "./components/sections/SocialProof";
import { CTA } from "./components/sections/CTA";
import { Footer } from "./components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-dvh bg-[var(--a-bg)] text-[var(--a-text)]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_75%_10%,rgba(103,32,255,0.08),transparent_55%)]" />

      <Hero />

      <Features />

      <SocialProof />

      <CTA />

      <Footer />
    </div>
  );
}
