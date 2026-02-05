import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Feature {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  imageSrc?: string;
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
          <h2 className="mb-12 lg:mb-16 text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance text-foreground">
            {title}
          </h2>
        )}
        <div className={cn(
          "grid gap-6 md:gap-8",
          columns === 2 && "sm:grid-cols-2",
          columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
          columns === 4 && "sm:grid-cols-2 lg:grid-cols-4"
        )}>
          {features.map((feature, index) => (
            <Card key={index} className="group relative bg-card/50 border-border/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-card hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 overflow-hidden">
              {/* Background image if provided */}
              {feature.imageSrc && (
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Image 
                    src={feature.imageSrc} 
                    alt={feature.title} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
              )}
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Subtle glow effect */}
              <div className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-accent to-primary -z-10" />
              
              <CardHeader className="pb-3 relative z-10">
                {feature.icon && (
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>
                )}
                <CardTitle className="text-xl lg:text-2xl text-balance text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              {feature.description && (
                <CardContent className="relative z-10">
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
