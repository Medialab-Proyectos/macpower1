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
      className="flip-card-container group perspective-1000 h-[320px] cursor-pointer"
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
          "bg-gradient-to-br from-card/80 to-card/40 border-white/10 backdrop-blur-sm",
          "transition-all duration-300 hover:border-[#2dd4bf]/50 hover:shadow-xl hover:shadow-[#2dd4bf]/10",
          "flex flex-col p-6"
        )}>
          <div className="flex-1 flex flex-col">
            {feature.icon && (
              <div className="mb-4 inline-flex p-3 rounded-xl bg-[#2dd4bf]/10 text-[#2dd4bf] w-fit">
                {feature.icon}
              </div>
            )}
            <h3 className="text-xl lg:text-2xl font-bold mb-3 text-balance">{feature.title}</h3>
            <p className="text-muted-foreground text-base leading-relaxed text-pretty flex-1">
              {feature.frontDescription}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#2dd4bf] font-medium mt-4">
            <span>Click para más detalles</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </div>
        </Card>

        {/* Back of card */}
        <Card className={cn(
          "flip-card-face flip-card-back absolute inset-0 backface-hidden rotate-y-180",
          "bg-gradient-to-br from-[#2dd4bf]/20 to-[#2dd4bf]/5 border-[#2dd4bf]/30 backdrop-blur-sm",
          "flex flex-col p-6 overflow-y-auto"
        )}>
          <div>
            <h3 className="text-xl lg:text-2xl font-bold mb-4 text-[#2dd4bf]">
              {feature.backTitle || feature.title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed mb-4 text-pretty">
              {feature.backDescription}
            </p>
            {feature.backBullets && feature.backBullets.length > 0 && (
              <ul className="space-y-2 text-sm md:text-base">
                {feature.backBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#2dd4bf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-pretty">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-[#2dd4bf] font-medium mt-auto pt-4">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                {title}
              </span>
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
