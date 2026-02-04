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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h2>
        )}
        <div className={cn(
          "grid gap-6",
          columns === 2 && "sm:grid-cols-2",
          columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
          columns === 4 && "sm:grid-cols-2 lg:grid-cols-4"
        )}>
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 border-white/5 backdrop-blur-sm transition-all hover:bg-card hover:border-[#2dd4bf]/30">
              <CardHeader>
                {feature.icon && <div className="mb-4 text-[#2dd4bf]">{feature.icon}</div>}
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              {feature.description && (
                <CardContent>
                  <CardDescription className="text-base">
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
