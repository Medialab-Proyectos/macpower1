import { Apple, Monitor, Shield, Cloud, Cpu, Server, HardDrive } from "lucide-react";

const partners = [
  { name: "Apple", icon: Apple },
  { name: "Microsoft", icon: Monitor },
  { name: "Cisco", icon: Shield },
  { name: "Adobe", icon: Cloud },
  { name: "VMware", icon: Cpu },
  { name: "Jamf", icon: Server },
  { name: "Dell", icon: HardDrive },
];

export function PartnersSection() {
  return (
    <section className="border-y border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          {/* Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-xl font-semibold text-foreground md:text-2xl">
              Aliados Estratégicos y Certificaciones
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Respaldados por las mejores marcas tecnológicas del mundo
            </p>
          </div>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/50 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                title={partner.name}
              >
                <partner.icon className="h-6 w-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
