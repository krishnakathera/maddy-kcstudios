import { BowAccent, DividerLine } from "@/components/maddy/Decorations";
import { FadeIn } from "@/components/ui/FadeIn";
import { services } from "@/lib/content";

export function MaddyServices() {
  return (
    <section id="services" className="bg-maddy-cream-dark/60 px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="mb-14 text-center">
            <div className="mb-4 flex items-center justify-center gap-4">
              <BowAccent className="h-4 w-6 text-maddy-brown/50" />
              <p className="text-[11px] font-bold tracking-[0.25em] text-maddy-brown/60 uppercase">
                What I Offer
              </p>
              <BowAccent className="h-4 w-6 scale-x-[-1] text-maddy-brown/50" />
            </div>
            <h2 className="font-maddy-display text-3xl font-medium text-maddy-brown md:text-4xl lg:text-5xl">
              Wedding day support, handled with care
            </h2>
            <DividerLine className="mx-auto mt-8" />
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 100}>
              <article className="flex h-full flex-col rounded-2xl border border-maddy-brown/10 bg-maddy-cream p-8 text-center transition-shadow hover:shadow-[0_8px_32px_rgba(74,55,40,0.08)] md:text-left">
                <span className="font-maddy-display text-3xl text-maddy-brown/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-maddy-display text-xl font-medium text-maddy-brown md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-maddy-muted">
                  {service.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
