import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";
import { SocialProof } from "./components/sections/SocialProof";
import { CTA } from "./components/sections/CTA";
import { Footer } from "./components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-dvh bg-black text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(217,70,239,0.16),transparent_55%),radial-gradient(700px_circle_at_80%_30%,rgba(59,130,246,0.14),transparent_60%),radial-gradient(800px_circle_at_50%_90%,rgba(34,197,94,0.08),transparent_55%)]" />

      <Hero />

      <Features />

      <SocialProof />

      <CTA />

      <Footer />
    </div>
  );
}
