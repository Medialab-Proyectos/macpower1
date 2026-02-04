
interface KPI {
  value: string;
  label: string;
}

interface KPIStripProps {
  kpis: KPI[];
}

export function KPIStrip({ kpis }: KPIStripProps) {
  return (
    <section className="border-y border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
          {kpis.map((kpi, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-bold tracking-tight text-[#2dd4bf] sm:text-4xl">
                {kpi.value}
              </span>
              <span className="mt-2 text-sm text-muted-foreground sm:text-base">
                {kpi.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
