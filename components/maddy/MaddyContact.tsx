import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BowAccent, DividerLine } from "@/components/maddy/Decorations";
import { FadeIn } from "@/components/ui/FadeIn";
import { site } from "@/lib/content";

const contactButtonClass =
  "inline-flex min-h-12 w-full max-w-sm items-center justify-center gap-3 rounded-full px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase transition-colors active:scale-[0.98]";

export function MaddyContact() {
  const hasContact = site.email || site.phoneTel;

  return (
    <section id="contact" className="bg-maddy-brown px-6 py-20 text-maddy-cream md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <div className="mb-4 flex items-center justify-center gap-4">
            <BowAccent className="h-4 w-6 text-maddy-cream/40" />
            <p className="text-[11px] font-bold tracking-[0.25em] text-maddy-cream/60 uppercase">
              Contact
            </p>
            <BowAccent className="h-4 w-6 scale-x-[-1] text-maddy-cream/40" />
          </div>

          <h2 className="font-maddy-display text-3xl font-medium text-maddy-cream md:text-4xl lg:text-5xl">
            Let&apos;s plan your perfect day
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-maddy-cream/70 md:text-base">
            Ready to talk about your wedding? Reach out — I&apos;d love to hear about your vision
            and how I can help bring it to life.
          </p>

          <DividerLine className="mx-auto mt-8 mb-10 opacity-30" />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex flex-col items-center gap-4">
            {site.phoneTel && (
              <a
                href={site.phoneTel}
                className={`${contactButtonClass} border-2 border-maddy-cream/30 text-maddy-cream hover:bg-maddy-cream hover:text-maddy-brown`}
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden />
                {site.phone}
              </a>
            )}

            {site.email && (
              <Link
                href={`mailto:${site.email}`}
                className={`${contactButtonClass} bg-maddy-cream text-maddy-brown hover:bg-maddy-cream-dark`}
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden />
                {site.email}
              </Link>
            )}

            {!hasContact && (
              <p className="max-w-md text-sm leading-relaxed text-maddy-cream/60">
                Add your email or phone in{" "}
                <code className="text-maddy-cream/80">lib/content.ts</code> to enable contact
                buttons.
              </p>
            )}

            <div className="mt-6 flex items-center justify-center gap-2 text-sm font-bold tracking-[0.2em] text-maddy-cream uppercase">
              <MapPin className="h-4 w-4 shrink-0 opacity-60" aria-hidden />
              <span>| {site.location} |</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
