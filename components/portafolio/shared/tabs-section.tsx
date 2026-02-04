import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

interface TabItem {
  value: string;
  label: string;
  bullets: string[];
}

interface TabsSectionProps {
  title?: string;
  items: TabItem[];
}

export function TabsSection({ title, items }: TabsSectionProps) {
  return (
    <section className="py-16 bg-black/40">
      <div className="container mx-auto px-4 max-w-4xl">
        {title && (
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
            {title}
          </h2>
        )}
        <Tabs defaultValue={items[0]?.value} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto bg-muted/20 p-1 mb-8">
            {items.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="data-[state=active]:bg-[#2dd4bf] data-[state=active]:text-black py-3 rounded-md transition-all"
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {items.map((item) => (
            <TabsContent key={item.value} value={item.value} className="bg-card/30 p-8 rounded-xl border border-white/5 mt-0 animate-in fade-in-0 zoom-in-95 duration-200">
               <ul className="grid gap-4 sm:grid-cols-1">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#2dd4bf] shrink-0 mt-0.5" />
                    <span className="text-lg text-muted-foreground">{bullet}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
