
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/portafolio/shared/hero";
import { KPIStrip } from "@/components/portafolio/shared/kpi-strip";
import { FeatureGrid } from "@/components/portafolio/shared/feature-grid";
import { AccordionSection } from "@/components/portafolio/shared/accordion-section";
import { MidCTA } from "@/components/portafolio/shared/mid-cta";
import { CTABanner } from "@/components/portafolio/shared/cta-banner";
import { PortfolioForm } from "@/components/portafolio/shared/portfolio-form";
import { ImageHighlight } from "@/components/portafolio/shared/image-highlight";
import { StickyCTA } from "@/components/shared/sticky-cta";
import { 
  Server, 
  ShieldCheck, 
  Lock, 
  Activity, 
  Scan, 
  Eye, 
  Zap, 
  RotateCcw 
} from "lucide-react";

export const metadata = {
  title: "Soluciones IT (Valor IT) | MacPower",
  description: "Infraestructura robusta + ciberseguridad + continuidad para tu empresa.",
};

const kpis = [
  { value: "+15M USD", label: "Ventas anuales" },
  { value: "+25 años", label: "De experiencia" },
  { value: "+1000", label: "Proyectos ejecutados" },
  { value: "8 Países", label: "Presencia regional" },
];

const uenFeatures = [
  { title: "Soluciones IaaS", icon: <Server className="h-8 w-8" />, description: "Infraestructura escalable y segura." },
  { title: "Ciber Recuperación", icon: <RotateCcw className="h-8 w-8" />, description: "Resiliencia ante desastres." },
  { title: "Ciber Protección", icon: <ShieldCheck className="h-8 w-8" />, description: "Defensa proactiva de datos." },
  { title: "Soluciones SOC", icon: <Activity className="h-8 w-8" />, description: "Centro de operaciones de seguridad." },
];

const nistFeatures = [
  { title: "Identify", icon: <Scan className="h-6 w-6" />, description: "Identificar riesgos" },
  { title: "Protect", icon: <ShieldCheck className="h-6 w-6" />, description: "Implementar controles" },
  { title: "Detect", icon: <Eye className="h-6 w-6" />, description: "Monitoreo continuo" },
  { title: "Respond", icon: <Zap className="h-6 w-6" />, description: "Respuesta a incidentes" },
  { title: "Recover", icon: <RotateCcw className="h-6 w-6" />, description: "Restauración de servicios" },
];

const socUseCases = [
  { question: "Ransomware", answer: "Detectamos patrones de cifrado anómalos y bloqueamos ataques antes de que paralicen tu operación. Respuesta inmediata para minimizar el impacto." },
  { question: "Suplantación de marca/identidad", answer: "Monitoreamos la web superficial y profunda para detectar uso no autorizado de tu marca y credenciales comprometidas." },
];

const faqs = [
  { question: "¿Qué incluye el servicio SOC?", answer: "Incluye monitoreo 24/7, detección de amenazas, respuesta a incidentes y reportes periódicos de seguridad." },
  { question: "¿Cuáles son los tiempos de respuesta?", answer: "Nuestros SLAs garantizan respuesta inicial en menos de 15 minutos para incidentes críticos." },
  { question: "¿Cómo iniciamos?", answer: "Comenzamos con un diagnóstico de seguridad para identificar brechas y diseñar una estrategia a medida." },
  { question: "¿Se integra con mi infraestructura actual?", answer: "Sí, nuestras soluciones son agnósticas y se integran con entornos on-premise y nube." },
];

export default function ValorITPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero
        title="Soluciones IT (Valor IT)"
        subtitle="Infraestructura robusta + ciberseguridad + continuidad."
        primaryCtaText="Hablar con un asesor"
        primaryCtaHref="#contacto"
        secondaryCtaText="Solicitar propuesta"
        secondaryCtaHref="#contacto"
        imageSrc="/images/portafolio/valor-it/hero.jpg"
      />
      
      <KPIStrip kpis={kpis} />
      
      <FeatureGrid 
        title="Nuestras Unidades de Negocio" 
        features={uenFeatures} 
        columns={4} 
      />
      
      <div className="bg-muted/10">
        <FeatureGrid 
          title="Estrategia de Ciberseguridad (NIST)" 
          features={nistFeatures} 
          columns={4} 
        />
      </div>

      <AccordionSection 
        title="Casos de Uso SOC" 
        items={socUseCases} 
        imageSrc="/images/portafolio/valor-it/soc.jpg"
      />

      <MidCTA 
        title="Tu camino a la seguridad total"
        ctaText="Hablar con un asesor"
        ctaHref="#contacto"
        steps={[
          { label: "Diagnóstico" },
          { label: "Propuesta" },
          { label: "Implementación" },
        ]}
      />

      <ImageHighlight 
        imageSrc="/images/portafolio/valor-it/banner.jpg"
        text="Seguridad y eficiencia sin compromisos."
      />

      <AccordionSection 
        title="Preguntas frecuentes" 
        items={faqs} 
      />

      <CTABanner 
        title="Protege tu empresa hoy"
        subtitle="No esperes a un incidente para tomar acción."
        ctaText="Hablar con un asesor"
        ctaHref="#contacto"
      />

      <PortfolioForm />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
