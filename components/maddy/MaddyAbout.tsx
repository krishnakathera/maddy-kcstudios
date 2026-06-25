import { BowAccent, DividerLine } from "@/components/maddy/Decorations";
import { ScallopedFrame } from "@/components/maddy/ScallopedFrame";
import { FadeIn } from "@/components/ui/FadeIn";
import { intro, site } from "@/lib/content";

export function MaddyAbout() {
  return (
    <section id="about" className="px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
        <FadeIn>
          <ScallopedFrame
            src="/maddy-portrait.jpg"
            alt={`${site.name} — wedding coordinator`}
            priority
          />
        </FadeIn>

        <FadeIn delay={150}>
          <div className="text-center md:text-left">
            <div className="mb-6 flex items-center justify-center gap-4 md:justify-start">
              <BowAccent className="h-4 w-6 text-maddy-brown/50" />
              <h2 className="font-maddy-display text-4xl font-medium tracking-[0.15em] text-maddy-brown uppercase md:text-5xl">
                {intro.greeting}
              </h2>
              <BowAccent className="h-4 w-6 scale-x-[-1] text-maddy-brown/50" />
            </div>

            <DividerLine className="mb-8 md:mx-0" />

            <div className="space-y-5">
              {intro.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-sm leading-[1.85] tracking-[0.08em] text-maddy-brown uppercase md:text-[15px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
