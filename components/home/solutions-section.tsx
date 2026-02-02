import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Shield, Laptop, Wrench } from "lucide-react";

const solutions = [
  {
    id: "daas",
    title: "Soluciones DaaS",
    description: "Libérate de la gestión de activos. Mac como servicio con mantenimiento, soporte y renovación incluidos.",
    icon: Cloud,
    href: "#",
    benefits: ["Sin inversión inicial", "Actualización continua", "Soporte incluido"],
  },
  {
    id: "valor-it",
    title: "Soluciones Valor IT",
    description: "Infraestructura de TI completa. Computación, networking, almacenamiento y servicios profesionales.",
    icon: Shield,
    href: "#",
    benefits: ["Consultoría especializada", "Implementación llave en mano", "Monitoreo 24/7"],
  },
  {
    id: "mac-empresas",
    title: "Mac para Empresas",
    description: "El ecosistema Apple completo para tu organización. Despliegue, gestión MDM y soporte empresarial.",
    icon: Laptop,
    href: "/mac-para-empresas",
    benefits: ["Zero-touch deployment", "Gestión centralizada", "Seguridad nativa"],
    featured: true,
  },
  {
    id: "labpower",
    title: "LabPower",
    description: "Servicio técnico certificado Apple. Reparación, mantenimiento y soporte para tu flota de equipos.",
    icon: Wrench,
    href: "#",
    benefits: ["Técnicos certificados", "Piezas originales", "SLA empresarial"],
  },
];

export function SolutionsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Soluciones de valor
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Soluciones tecnológicas diseñadas para impulsar la operación y continuidad de tu negocio
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <Card
              key={solution.id}
              className={`group relative overflow-hidden border-border/50 bg-card/50 transition-all hover:border-primary/50 hover:bg-card ${
                solution.featured ? "ring-1 ring-primary/50 md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {solution.featured && (
                <div className="absolute right-3 top-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-medium text-primary-foreground">
                  Destacado
                </div>
              )}
              <CardHeader className="pb-2">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <solution.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {solution.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  {solution.description}
                </p>
                <ul className="mb-4 space-y-1">
                  {solution.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" size="sm" className="group/btn -ml-2 text-primary" asChild>
                  <Link href={solution.href}>
                    Ver solución
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
