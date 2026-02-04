import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

interface FeatureGridProps {
  title?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export function FeatureGrid({ title, features, columns = 4 }: FeatureGridProps) {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {title && (
          <h2 className="mb-12 lg:mb-16 text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {title}
            </span>
          </h2>
        )}
        <div className={cn(
          "grid gap-6 md:gap-8",
          columns === 2 && "sm:grid-cols-2",
          columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
          columns === 4 && "sm:grid-cols-2 lg:grid-cols-4"
        )}>
          {features.map((feature, index) => (
            <Card key={index} className="group relative bg-gradient-to-br from-card/80 to-card/40 border-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-card hover:border-[#2dd4bf]/50 hover:shadow-xl hover:shadow-[#2dd4bf]/10">
              <CardHeader className="pb-3">
                {feature.icon && (
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-[#2dd4bf]/10 text-[#2dd4bf] group-hover:bg-[#2dd4bf]/20 transition-colors">
                    {feature.icon}
                  </div>
                )}
                <CardTitle className="text-xl lg:text-2xl text-balance">{feature.title}</CardTitle>
              </CardHeader>
              {feature.description && (
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-pretty">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
