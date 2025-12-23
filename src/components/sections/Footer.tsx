import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="pb-10">
      <Container>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm font-semibold tracking-wide text-white/70">
              Adapty · Landing (test)
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/50">
              <a className="hover:text-white/70" href="#">
                Docs
              </a>
              <a className="hover:text-white/70" href="#">
                Pricing
              </a>
              <a className="hover:text-white/70" href="#">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-4 text-xs text-white/40">
            Built with Vite + React + TypeScript · Tailwind CSS · Framer Motion
          </div>
        </div>
      </Container>
    </footer>
  );
}


