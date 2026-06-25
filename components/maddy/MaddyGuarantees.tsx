import { BowAccent, DividerLine } from "@/components/maddy/Decorations";
import { FadeIn } from "@/components/ui/FadeIn";
import { guarantees } from "@/lib/content";
import { Check } from "lucide-react";

export function MaddyGuarantees() {
  return (
    <section id="guarantees" className="px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <div className="mb-6 flex items-center justify-center gap-4">
            <BowAccent className="h-4 w-6 text-maddy-brown/50" />
            <p className="text-[11px] font-bold tracking-[0.25em] text-maddy-brown/60 uppercase">
              My Promise
            </p>
            <BowAccent className="h-4 w-6 scale-x-[-1] text-maddy-brown/50" />
          </div>

          <h2 className="font-maddy-display text-2xl leading-snug font-medium tracking-wide text-maddy-brown uppercase md:text-3xl lg:text-4xl">
            {guarantees.title}
          </h2>

          <DividerLine className="mx-auto mt-8 mb-12" />
        </FadeIn>

        <FadeIn delay={150}>
          <ul className="space-y-6 text-left md:mx-auto md:max-w-xl">
            {guarantees.items.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-maddy-brown/20 text-maddy-brown">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <span className="pt-0.5 text-sm leading-relaxed tracking-[0.06em] text-maddy-brown uppercase md:text-[15px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
