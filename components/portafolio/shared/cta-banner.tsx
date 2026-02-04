import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CTABannerProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
}

export function CTABanner({ title, subtitle, ctaText, ctaHref }: CTABannerProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-[#2dd4bf]/10 to-transparent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
          {title}
        </h2>
        <p className="mb-8 text-xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col items-center gap-2">
          <Button
            asChild
            size="lg"
            className="bg-[#2dd4bf] text-black hover:bg-[#2dd4bf]/90 font-semibold rounded-full px-12 h-14 text-lg"
          >
            <Link href={ctaHref}>{ctaText}</Link>
          </Button>
          <span className="text-sm text-muted-foreground mt-2">
            Respuesta en menos de 24 horas hábiles. Sin compromiso.
          </span>
        </div>
      </div>
    </section>
  );
}
