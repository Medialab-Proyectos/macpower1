import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustStrip } from "@/components/shared/trust-strip";
import { ArrowRight, Play } from "lucide-react";

export function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,200,180,0.05),transparent_50%)]" />
      
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Apple Business Partner Oficial
            </div>
            
            <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Mac para empresas,{" "}
              <span className="text-primary">listo para TI</span>
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground md:text-xl text-pretty">
              Despliegue zero-touch, gestión centralizada MDM y seguridad de nivel empresarial. 
              Todo el ecosistema Apple con soporte local certificado.
            </p>

            {/* CTAs */}
            <div className="mb-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="#cotizar">
                  Solicitar cotización
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/mac">
                  Ver catálogo
                </Link>
              </Button>
            </div>

            {/* Trust strip */}
            <TrustStrip variant="compact" />
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-secondary to-secondary/50">
              <Image
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=800&fit=crop"
                alt="Mac para empresas - Equipo profesional trabajando"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              
              {/* Video play button overlay */}
              <button className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary/90 text-primary-foreground transition-transform hover:scale-110">
                <Play className="ml-1 h-8 w-8" />
              </button>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-card p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
                  <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Zero-touch deploy</p>
                  <p className="text-sm text-muted-foreground">Configuración automática</p>
                </div>
              </div>
            </div>

            {/* Floating card 2 */}
            <div className="absolute -right-4 top-8 rounded-xl border border-border bg-card p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Seguridad nativa</p>
                  <p className="text-sm text-muted-foreground">FileVault + MDM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
