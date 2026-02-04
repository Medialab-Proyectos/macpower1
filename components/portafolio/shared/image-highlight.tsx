import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageHighlightProps {
  imageSrc: string;
  fallbackGradient?: string;
  text: string;
  className?: string;
}

export function ImageHighlight({
  imageSrc,
  fallbackGradient = "from-cyan-900 via-blue-900 to-indigo-900",
  text,
  className,
}: ImageHighlightProps) {
  return (
    <section
      className={cn(
        "relative w-full h-[400px] overflow-hidden flex items-center justify-center",
        className,
      )}
    >
      {/* Background Image or Gradient */}
      <div
        className={cn("absolute inset-0 bg-gradient-to-r", fallbackGradient)}
      />

      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="Highlights"
          fill
          className="object-cover opacity-60 mix-blend-overlay"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/40" />{" "}
        {/* Overlay for text readability */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg max-w-4xl mx-auto">
          {text}
        </h2>
      </div>
    </section>
  );
}
