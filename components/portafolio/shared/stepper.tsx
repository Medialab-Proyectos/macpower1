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
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-muted/20 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {title && (
          <h2 className="mb-12 lg:mb-16 text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {title}
            </span>
          </h2>
        )}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[32px] left-[12%] right-[12%] h-[3px] bg-gradient-to-r from-[#2dd4bf]/20 via-[#2dd4bf]/50 to-[#2dd4bf]/20 rounded-full z-0" />
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-white/10 hover:bg-card/50 hover:border-[#2dd4bf]/30 transition-all"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#2dd4bf] to-[#14b8a6] text-black font-bold text-2xl shadow-lg shadow-[#2dd4bf]/30 group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <h3 className="mb-3 text-xl md:text-2xl font-bold text-balance">{step.title}</h3>
                {step.description && (
                  <p className="text-base text-muted-foreground leading-relaxed text-pretty">{step.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
