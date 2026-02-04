import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

interface AccordionSectionProps {
  title?: string;
  items: FaqItem[];
  id?: string;
  imageSrc?: string;
}

export function AccordionSection({ title, items, id, imageSrc }: AccordionSectionProps) {
  return (
    <section id={id} className="py-16">
      <div className={cn("container mx-auto px-4", imageSrc ? "" : "max-w-3xl")}>
        {title && (
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">
            {title}
          </h2>
        )}
        
        <div className={cn("grid gap-12", imageSrc ? "lg:grid-cols-2 lg:items-center" : "grid-cols-1")}>
          {imageSrc && (
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/10 shadow-xl lg:order-2">
              <Image 
                src={imageSrc} 
                alt={title || "Section Image"} 
                fill 
                className="object-cover" 
              />
               {/* Decorative glow */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          )}

          <div className={imageSrc ? "lg:order-1" : ""}>
             <Accordion type="single" collapsible className="w-full">
              {items.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-[#2dd4bf] transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground whitespace-pre-line">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
