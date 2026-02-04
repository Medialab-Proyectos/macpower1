import { Check } from "lucide-react";

interface Step {
  title: string;
  description?: string;
}

interface StepperProps {
  title?: string;
  steps: Step[];
}

export function Stepper({ title, steps }: StepperProps) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
            {title}
          </h2>
        )}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[24px] left-[15%] right-[15%] h-[2px] bg-border z-0" />
          
          <div className="grid gap-8 md:grid-cols-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-background border-2 border-[#2dd4bf] text-[#2dd4bf] font-bold text-lg shadow-[0_0_15px_rgba(45,212,191,0.3)]">
                  {index + 1}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                {step.description && (
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
