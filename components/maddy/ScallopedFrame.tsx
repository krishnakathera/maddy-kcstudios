import Image from "next/image";

interface ScallopedFrameProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export function ScallopedFrame({ src, alt, priority = false }: ScallopedFrameProps) {
  return (
    <div className="relative mx-auto w-full max-w-[280px] md:max-w-[320px]">
      <div
        className="relative aspect-[6/7] overflow-hidden bg-maddy-cream p-3 shadow-[0_8px_32px_rgba(74,55,40,0.1)]"
        style={{
          borderRadius: "50% 50% 45% 45% / 12% 12% 8% 8%",
          border: "2px solid rgba(74, 55, 40, 0.2)",
        }}
      >
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ borderRadius: "50% 50% 42% 42% / 10% 10% 6% 6%" }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            priority={priority}
            sizes="(max-width: 768px) 280px, 320px"
          />
        </div>
      </div>
    </div>
  );
}
