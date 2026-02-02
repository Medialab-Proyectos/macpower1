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
    <section className="relative overflow-hidden bg-background">
      {/* Decorative corner elements */}
      <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 border-l-2 border-t-2 border-primary/20" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 border-b-2 border-r-2 border-primary/20" />
      
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Content */}
          <div className="order-2 lg:order-1">
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
                  <h1 className="mb-4 text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
                    {slide.title}
                  </h1>
                  <p className="mb-8 text-lg text-muted-foreground text-pretty">
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
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    )}
                    aria-label={`Ir a slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-1">
                <button
                  onClick={prevSlide}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label="Slide anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label="Siguiente slide"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Image carousel */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-secondary/30">
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
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent lg:from-background/40" />
                </div>
              ))}
              
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-primary/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
