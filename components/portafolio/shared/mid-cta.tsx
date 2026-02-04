import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Step {
  label: string;
}

interface MidCTAProps {
  title: string;
  ctaText: string;
  ctaHref: string;
  steps: Step[];
}

export function MidCTA({ title, ctaText, ctaHref, steps }: MidCTAProps) {
  return (
    <section className="py-16 bg-muted/10 border-y border-white/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 text-2xl font-bold tracking-tight">{title}</h2>
        
        {/* Mini Progress */}
        <div className="flex items-center justify-center gap-2 mb-10 text-sm md:text-base text-muted-foreground">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <span className={`font-semibold ${index === 0 ? "text-[#2dd4bf]" : ""}`}>
                {step.label}
              </span>
              {index < steps.length - 1 && (
                <ArrowRight className="h-4 w-4 mx-2 text-muted-foreground/50" />
              )}
            </div>
          ))}
        </div>

        <Button
          asChild
          size="lg"
          className="bg-[#2dd4bf] text-black hover:bg-[#2dd4bf]/90 font-semibold rounded-full px-8"
        >
          <Link href={ctaHref}>{ctaText}</Link>
        </Button>
      </div>
    </section>
  );
}
