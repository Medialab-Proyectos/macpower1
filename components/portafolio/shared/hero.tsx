import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaHref: string; // usually anchor link to form
  secondaryCtaText: string;
  secondaryCtaHref: string;
  imageSrc?: string;
  fallbackGradient?: string;
}

export function Hero({
  title,
  subtitle,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  imageSrc,
  fallbackGradient = "bg-gradient-to-br from-[#2dd4bf]/20 to-purple-500/20"
}: HeroProps) {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-[#2dd4bf] text-black hover:bg-[#2dd4bf]/90 font-semibold rounded-full px-8"
              >
                <Link href={primaryCtaHref}>{primaryCtaText}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-white/20 hover:bg-white/10"
              >
                <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className={`aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl ${!imageSrc ? fallbackGradient : ''}`}>
              {imageSrc ? (
                 <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  {/* Decorative placeholder if no image */}
                  <div className="h-32 w-32 rounded-full bg-[#2dd4bf]/20 blur-2xl" />
                </div>
              )}
            </div>
            
             {/* Decorative blob behind image */}
             <div className="absolute -top-12 -right-12 -z-10 h-[300px] w-[300px] rounded-full bg-[#2dd4bf]/30 blur-[80px] opacity-40" />
          </div>
        </div>

        {/* Decorative elements pattern background */}
        <div className="absolute top-1/2 left-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[100px] opacity-30" />
      </div>
    </section>
  );
}
