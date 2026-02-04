
import { Hero } from "@/components/portafolio/shared/hero";
import { KPIStrip } from "@/components/portafolio/shared/kpi-strip";
import { FeatureGrid } from "@/components/portafolio/shared/feature-grid";
import { Stepper } from "@/components/portafolio/shared/stepper";
import { TabsSection } from "@/components/portafolio/shared/tabs-section";
import { AccordionSection } from "@/components/portafolio/shared/accordion-section";
import { CTABanner } from "@/components/portafolio/shared/cta-banner";
import { PortfolioForm } from "@/components/portafolio/shared/portfolio-form";
import { ImageHighlight } from "@/components/portafolio/shared/image-highlight";
import { Globe, DollarSign, Headphones, Clock } from "lucide-react";

export const metadata = {
  title: "Soluciones DaaS | MacPower",
  description: "Tecnología bajo control, continuidad sin interrupciones.",
};

const kpis = [
  { value: "+15M USD", label: "Ventas anuales" },
  { value: "+25 años", label: "De experiencia" },
  { value: "+1000", label: "Proyectos ejecutados" },
  { value: "8 Países", label: "Presencia regional" },
];

const valueProps = [
  { title: "Cobertura", icon: <Globe className="h-8 w-8" />, description: "Servicio en +20 ciudades." },
  { title: "Precio", icon: <DollarSign className="h-8 w-8" />, description: "Tarifas competitivas fijas." },
  { title: "Soporte", icon: <Headphones className="h-8 w-8" />, description: "Mesa de ayuda especializada." },
  { title: "Disponibilidad", icon: <Clock className="h-8 w-8" />, description: "SLA garantizados." },
];

const stepperSteps = [
  { title: "Alistamiento", description: "Configuración inicial y personalización." },
  { title: "Migración", description: "Borrado seguro e inventario." },
  { title: "Mantenimiento", description: "Preventivo anual incluido." },
  { title: "Soporte", description: "Reemplazo máx 3 días hábiles." },
];

const benefitsTabs = [
  { 
    value: "financieros", 
    label: "Financieros", 
    bullets: ["Convierte CAPEX en OPEX.", "Canon deducible de renta.", "Sin costos ocultos de mantenimiento."] 
  },
  { 
    value: "operativos", 
    label: "Operativos", 
    bullets: ["Renovación tecnológica programada.", "Estandarización de flota.", "Reducción de carga al equipo TI."] 
  },
  { 
    value: "tributarios", 
    label: "Tributarios", 
    bullets: ["Beneficios fiscales por renta operativa.", "Mejora los índices de liquidez.", "Eficiencia en activos fijos."] 
  },
  { 
    value: "empresa", 
    label: "Empresa", 
    bullets: ["Enfoque en el core de negocio.", "Satisfacción de empleados.", "Continuidad operativa asegurada."] 
  },
];

const terms = [
  { question: "Cuidados del equipo", answer: "El cliente es responsable del buen uso de los equipos. Daños por mal uso, líquidos o golpes no están cubiertos por la garantía estándar." },
  { question: "Responsabilidad del cliente", answer: "Reportar fallas inmediatamente, permitir mantenimientos programados y asegurar los equipos si se requiere movilidad externa." },
  { question: "Condiciones comerciales", answer: "Forma de pago mensual anticipada. Precios en moneda local + IVA. Contratos a 12, 24 o 36 meses. Cancelación anticipada sujeta a penalidad. Devolución de equipos al finalizar el contrato en buen estado." },
];

export default function DaaSPage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero
        title="Soluciones DaaS"
        subtitle="Tecnología bajo control, continuidad sin interrupciones."
        primaryCtaText="Cotizar DaaS"
        primaryCtaHref="#contacto"
        secondaryCtaText="Hablar con un asesor"
        secondaryCtaHref="#contacto"
        imageSrc="/images/portafolio/daas/hero.jpg"
      />
      
      <KPIStrip kpis={kpis} />
      
      <FeatureGrid 
        title="Propuesta de Valor" 
        features={valueProps} 
        columns={4} 
      />
      
      <Stepper 
        title="La renta incluye" 
        steps={stepperSteps} 
      />

      <TabsSection 
        title="Beneficios" 
        items={benefitsTabs} 
      />

      <ImageHighlight 
        imageSrc="/images/portafolio/daas/banner.jpg"
        text="Menos interrupciones. Más control. Mejor previsibilidad."
      />

      <AccordionSection 
        title="Términos y condiciones" 
        items={terms} 
      />

      <CTABanner 
        title="Equipa tu empresa hoy"
        subtitle="Hardware de última generación sin descapitalizarte."
        ctaText="Cotizar DaaS"
        ctaHref="#contacto"
      />

      <PortfolioForm />
    </main>
  );
}
