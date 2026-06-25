import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  CornerFlourish,
  DividerLine,
  WeddingRings,
} from "@/components/maddy/Decorations";
import { site } from "@/lib/content";

export function MaddyHero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20 text-center md:px-8"
    >
      <CornerFlourish className="pointer-events-none absolute top-8 left-6 h-16 w-16 text-maddy-brown/25 md:top-12 md:left-12 md:h-20 md:w-20" />
      <CornerFlourish className="pointer-events-none absolute top-8 right-6 h-16 w-16 scale-x-[-1] text-maddy-brown/25 md:top-12 md:right-12 md:h-20 md:w-20" />
      <CornerFlourish className="pointer-events-none absolute bottom-24 left-6 h-14 w-14 scale-y-[-1] text-maddy-brown/20 md:bottom-32 md:left-12 md:h-16 md:w-16" />
      <CornerFlourish className="pointer-events-none absolute right-6 bottom-24 h-14 w-14 scale-[-1] text-maddy-brown/20 md:right-12 md:bottom-32 md:h-16 md:w-16" />

      <WeddingRings className="maddy-animate-in absolute top-32 left-[12%] hidden h-8 w-12 text-maddy-brown/30 md:block lg:left-[18%]" />
      <WeddingRings className="maddy-animate-in maddy-animate-delay-1 absolute top-48 right-[10%] hidden h-7 w-10 text-maddy-brown/25 md:block lg:right-[16%]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <h1 className="maddy-animate-in font-maddy-display text-[clamp(4.5rem,18vw,9rem)] leading-[0.9] font-semibold tracking-tight text-maddy-brown">
          {site.headline}
        </h1>

        <p className="maddy-animate-in maddy-animate-delay-1 mt-4 font-maddy-display text-xl font-medium tracking-[0.35em] text-maddy-brown uppercase md:text-2xl lg:text-3xl">
          {site.subheadline}
        </p>

        <DividerLine className="maddy-animate-in maddy-animate-delay-2 mx-auto mt-10 mb-8" />

        <p className="maddy-animate-in maddy-animate-delay-2 mx-auto max-w-lg text-sm leading-relaxed tracking-wide text-maddy-muted uppercase md:text-base">
          {site.tagline}
        </p>

        <div className="maddy-animate-in maddy-animate-delay-3 mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="#about"
            className="rounded-full border border-maddy-brown/30 bg-maddy-brown px-8 py-3.5 text-[11px] font-bold tracking-[0.2em] text-maddy-cream uppercase transition-colors hover:bg-maddy-brown-light"
          >
            Meet Maddy
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-maddy-brown/30 px-8 py-3.5 text-[11px] font-bold tracking-[0.2em] text-maddy-brown uppercase transition-colors hover:border-maddy-brown hover:bg-maddy-brown/5"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </div>

      <Link
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-maddy-brown/30 transition-colors hover:text-maddy-brown/60"
        aria-label="Scroll to content"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </Link>
    </section>
  );
}
