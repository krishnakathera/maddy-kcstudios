import Link from "next/link";
import { site } from "@/lib/content";

export function MaddyFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-maddy-brown/10 bg-maddy-cream px-6 py-12 text-center md:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="#top"
          className="font-maddy-display text-xl font-semibold text-maddy-brown"
        >
          {site.name}
        </Link>
        <p className="mt-3 text-xs tracking-[0.2em] text-maddy-muted uppercase">
          Free Wedding Coordinating · {site.location}
        </p>
        <div className="mx-auto mt-6 h-px w-12 bg-maddy-brown/20" aria-hidden />
        <p className="mt-6 text-xs tracking-widest text-maddy-muted/60 uppercase">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
