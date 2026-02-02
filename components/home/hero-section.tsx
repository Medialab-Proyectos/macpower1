"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&h=600&fit=crop",
    title: "Tecnología que impulsa empresas sin límites",
    subtitle: "En MacPower IT Solutions transformamos la forma en que las organizaciones operan, conectan y se protegen.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop",
    title: "Mac para empresas, listo para TI",
    subtitle: "Despliegue zero-touch, gestión centralizada y seguridad de nivel empresarial desde el primer día.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=600&fit=crop",
    title: "Soluciones IT que aceleran tu negocio",
    subtitle: "Más de 15 años especializados en ecosistema Apple corporativo con presencia en 5 países.",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative overflow-hidden bg-black">
      {/* Mac Surface Background - Subtle abstract texture */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,30,40,0.4),transparent_70%)]" />
      </div>

      {/* Neon Green Energy Pulses - Very subtle, phosphorescent */}
      <div className="pointer-events-none absolute inset-0">
        {/* Pulse 1 - Top left */}
        <div 
          className="absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-pulse-slow rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 50%, transparent 100%)' 
          }}
        />
        
        {/* Pulse 2 - Right side */}
        <div 
          className="absolute right-0 top-1/4 h-[500px] w-[500px] translate-x-1/3 rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(74, 222, 128, 0.08) 0%, rgba(34, 197, 94, 0.04) 50%, transparent 100%)',
            animation: 'float 8s ease-in-out infinite' 
          }}
        />
        
        {/* Pulse 3 - Bottom center */}
        <div 
          className="absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, rgba(34, 197, 94, 0.03) 50%, transparent 100%)',
            animation: 'float 10s ease-in-out infinite 2s' 
          }}
        />
      </div>

      {/* Animated gradient overlay - Slow movement */}
      <div className="pointer-events-none absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-green-950/20 via-transparent to-cyan-950/10"
          style={{ animation: 'gradient-shift 15s ease-in-out infinite alternate' }}
        />
      </div>

      {/* Subtle grid pattern for depth */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}
      />
      
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Content */}
          <div className="order-2 lg:order-1 relative z-10">
            <div className="relative">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={cn(
                    "transition-all duration-500",
                    index === currentSlide
                      ? "opacity-100"
                      : "pointer-events-none absolute inset-0 opacity-0"
                  )}
                >
                  <h1 className="mb-4 text-3xl font-bold leading-tight text-white drop-shadow-2xl md:text-4xl lg:text-5xl text-balance">
                    {slide.title}
                  </h1>
                  <p className="mb-8 text-lg text-gray-200 text-pretty">
                    {slide.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/mac-para-empresas">
                  Solicitar cotización
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/mac">Explorar Macs</Link>
              </Button>
            </div>

            {/* Slide indicators */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      index === currentSlide
                        ? "w-8 bg-green-400 shadow-lg shadow-green-500/50"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    )}
                    aria-label={`Ir a slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-1">
                <button
                  onClick={prevSlide}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-gray-900/40 text-white backdrop-blur-sm transition-all hover:border-green-400/40 hover:bg-green-500/20"
                  aria-label="Slide anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-gray-900/40 text-white backdrop-blur-sm transition-all hover:border-green-400/40 hover:bg-green-500/20"
                  aria-label="Siguiente slide"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Image carousel */}
          <div className="order-1 lg:order-2 relative z-10">
            {/* Glow effect behind carousel */}
            <div className="absolute inset-0 -z-10 translate-y-4 rounded-2xl bg-gradient-to-br from-green-500/20 via-cyan-500/10 to-transparent blur-2xl" />
            
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-xl">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={cn(
                    "absolute inset-0 transition-all duration-700",
                    index === currentSlide
                      ? "translate-x-0 opacity-100"
                      : index < currentSlide
                      ? "-translate-x-full opacity-0"
                      : "translate-x-full opacity-0"
                  )}
                >
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover opacity-90 mix-blend-luminosity"
                    priority={index === 0}
                  />
                  {/* Glassmorphic overlay with subtle green tint */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-cyan-500/5" />
                  
                  {/* Soft light reflection effect */}
                  <div className="absolute right-0 top-0 h-1/2 w-1/2 bg-gradient-to-br from-white/5 to-transparent blur-2xl" />
                </div>
              ))}
              
              {/* Decorative frame with glassmorphic style */}
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-green-500/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
