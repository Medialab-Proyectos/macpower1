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
      {/* Abstract Circuit Background - Silicon/Motherboard inspired */}
      <div className="pointer-events-none absolute inset-0">
        {/* Base deep black layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
        
        {/* Abstract circuit trace paths - highly blurred */}
        <div className="absolute inset-0 opacity-20">
          {/* Horizontal traces */}
          <div 
            className="absolute left-0 top-[20%] h-px w-full blur-xl"
            style={{ 
              background: 'linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.15) 20%, rgba(34, 197, 94, 0.25) 50%, rgba(34, 197, 94, 0.15) 80%, transparent)',
            }}
          />
          <div 
            className="absolute left-0 top-[45%] h-px w-full blur-xl"
            style={{ 
              background: 'linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.1) 30%, rgba(34, 197, 94, 0.2) 60%, transparent)',
            }}
          />
          <div 
            className="absolute left-0 top-[70%] h-px w-full blur-xl"
            style={{ 
              background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.12) 10%, transparent 40%, rgba(34, 197, 94, 0.18) 70%, transparent)',
            }}
          />
          
          {/* Vertical traces */}
          <div 
            className="absolute left-[25%] top-0 h-full w-px blur-xl"
            style={{ 
              background: 'linear-gradient(180deg, transparent, rgba(34, 197, 94, 0.12) 30%, rgba(34, 197, 94, 0.18) 50%, transparent 80%)',
            }}
          />
          <div 
            className="absolute left-[60%] top-0 h-full w-px blur-xl"
            style={{ 
              background: 'linear-gradient(180deg, rgba(34, 197, 94, 0.15) 20%, transparent 50%, rgba(34, 197, 94, 0.12) 80%)',
            }}
          />
        </div>

        {/* Microchip connection nodes - soft green energy points */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute left-[20%] top-[25%] h-24 w-24 rounded-full blur-2xl"
            style={{ background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2), transparent 70%)' }}
          />
          <div 
            className="absolute right-[30%] top-[40%] h-32 w-32 rounded-full blur-2xl"
            style={{ background: 'radial-gradient(circle, rgba(34, 197, 94, 0.15), transparent 70%)' }}
          />
          <div 
            className="absolute left-[50%] bottom-[30%] h-28 w-28 rounded-full blur-2xl"
            style={{ background: 'radial-gradient(circle, rgba(34, 197, 94, 0.18), transparent 70%)' }}
          />
        </div>

        {/* Ambient light from circuit activity - very subtle pulse */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{ 
            background: 'radial-gradient(ellipse 80% 50% at 30% 40%, rgba(34, 197, 94, 0.08), transparent 60%)',
            animation: 'pulse-slow 8s ease-in-out infinite'
          }}
        />
        
        {/* Silicon surface texture simulation */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Glassmorphism Layer - Frosted separation */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 backdrop-blur-[0.5px]" />
      </div>
      
      {/* Content container with glass effect */}
      <div className="relative mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-20">
        {/* Subtle frosted glass panel behind content */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/[0.02] bg-white/[0.01] backdrop-blur-sm" />
        
        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
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
            {/* Subtle green glow behind carousel - circuit energy */}
            <div className="absolute inset-0 -z-10 rounded-2xl opacity-40 blur-3xl" style={{ background: 'radial-gradient(ellipse, rgba(34, 197, 94, 0.12), transparent 70%)' }} />
            
            {/* Glassmorphic container */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 bg-black/40 backdrop-blur-xl shadow-2xl">
              {/* Frosted glass layer */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
              
              {/* Very subtle noise texture for glass realism */}
              <div 
                className="pointer-events-none absolute inset-0 opacity-[0.015]"
                style={{
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' /%3E%3C/svg%3E")',
                }}
              />
              
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
                    className="object-cover"
                    priority={index === 0}
                    style={{ 
                      filter: 'contrast(0.95) saturate(0.9)',
                    }}
                  />
                  {/* Subtle vignette for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                  
                  {/* Soft shadow only - no glow on product */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              ))}
              
              {/* Glass reflection effect */}
              <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 bg-gradient-to-br from-white/[0.03] to-transparent blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
