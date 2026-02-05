"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FlipCardFeature {
  title: string;
  icon?: React.ReactNode;
  frontDescription: string;
  backTitle?: string;
  backDescription: string;
  backBullets?: string[];
}

interface FlipCardGridProps {
  title?: string;
  subtitle?: string;
  features: FlipCardFeature[];
  columns?: 2 | 3 | 4;
}

function FlipCard({ feature }: { feature: FlipCardFeature }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={cn(
        "flip-card-container group perspective-1000 h-[320px] cursor-pointer",
        isFlipped && "z-50"
      )}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsFlipped(!isFlipped);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${feature.title}. Click to ${isFlipped ? 'see overview' : 'learn more'}`}
    >
      <div className={cn(
        "flip-card-inner relative w-full h-full transition-all duration-700 transform-style-3d",
        isFlipped && "rotate-y-180"
      )}>
        {/* Front of card */}
        <Card className={cn(
          "flip-card-face flip-card-front absolute inset-0 backface-hidden",
          "bg-gradient-to-br from-card to-card/80 border border-border/50",
          "transition-all duration-300",
          "flex flex-col p-6 relative overflow-hidden"
        )}>
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          {/* Glow effect on hover */}
          <div className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-accent to-primary" />
          
          <div className="flex-1 flex flex-col relative z-10">
            {feature.icon && (
              <div className="mb-4 inline-flex p-3 rounded-xl bg-accent/10 text-accent w-fit transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                {feature.icon}
              </div>
            )}
            <h3 className="text-xl lg:text-2xl font-bold mb-3 text-balance text-foreground">{feature.title}</h3>
            <p className="text-muted-foreground text-base leading-relaxed text-pretty flex-1">
              {feature.frontDescription}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-accent font-medium mt-4 relative z-10 group-hover:gap-3 transition-all">
            <span>Click para más detalles</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </div>
        </Card>

        {/* Back of card */}
        <Card className={cn(
          "flip-card-face flip-card-back absolute inset-0 backface-hidden rotate-y-180",
          "bg-gradient-to-br from-accent/15 via-accent/10 to-primary/10 border-accent/40",
          "flex flex-col p-6 overflow-y-auto relative"
        )}>
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }} />
          
          <div className="relative z-10">
            <h3 className="text-xl lg:text-2xl font-bold mb-4 text-accent">
              {feature.backTitle || feature.title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed mb-4 text-pretty text-foreground/90">
              {feature.backDescription}
            </p>
            {feature.backBullets && feature.backBullets.length > 0 && (
              <ul className="space-y-2.5 text-sm md:text-base">
                {feature.backBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-pretty text-foreground/90">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-accent font-medium mt-auto pt-4 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5"/>
              <path d="m12 19-7-7 7-7"/>
            </svg>
            <span>Click para volver</span>
          </div>
        </Card>
      </div>
    </div>
  );
}

export function FlipCardGrid({ title, subtitle, features, columns = 4 }: FlipCardGridProps) {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {title && (
          <div className="mb-12 lg:mb-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-4 text-foreground">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className={cn(
          "grid gap-6 md:gap-8",
          columns === 2 && "sm:grid-cols-2",
          columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
          columns === 4 && "sm:grid-cols-2 lg:grid-cols-4"
        )}>
          {features.map((feature, index) => (
            <FlipCard key={index} feature={feature} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
