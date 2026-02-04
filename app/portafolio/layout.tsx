"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PortafolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Simple breadcrumb logic
  const isValorIT = pathname?.includes("valor-it");
  const isDaaS = pathname?.includes("daas");
  
  const currentPageName = isValorIT ? "Soluciones IT" : isDaaS ? "Soluciones DaaS" : "Portafolio";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="bg-muted/10 py-3 border-b border-border/50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center text-sm text-muted-foreground gap-2">
            <Link href="/" className="hover:text-foreground flex items-center gap-1">
              <Home className="h-4 w-4" />
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className={!isValorIT && !isDaaS ? "text-foreground font-medium" : ""}>
              Portafolio
            </span>
            {(isValorIT || isDaaS) && (
              <>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground font-medium">{currentPageName}</span>
              </>
            )}
          </nav>
        </div>
      </div>
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
}
