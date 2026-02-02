"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SearchBar } from "@/components/shared/search-bar";
import {
  Menu,
  ChevronDown,
  Monitor,
  Laptop,
  GraduationCap,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "#" },
  { name: "Portafolio", href: "#portafolio" },
  {
    name: "Valor",
    href: "#",
    children: [
      { name: "Soluciones DaaS", href: "#" },
      { name: "Soluciones Valor IT", href: "#" },
      { name: "LabPower", href: "#" },
    ],
  },
  {
    name: "Apple",
    href: "/apple",
    children: [
      { name: "Apple para empresas", href: "/mac-para-empresas", icon: Laptop },
      { name: "Apple para educación", href: "/apple-educacion", icon: GraduationCap },
      { name: "Catálogo Apple", href: "/mac", icon: Monitor },
    ],
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6">
        {/* Logo - original color on light, white on dark */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/frame-2021.png"
            alt="MacPower IT Solutions - Apple Business Partner"
            width={320}
            height={40}
            className="h-8 w-auto dark:brightness-0 dark:invert"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) =>
            item.children ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-56 bg-card border-border"
                >
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.name} asChild>
                      <Link
                        href={child.href}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        {child.icon && (
                          <child.icon className="h-4 w-4 text-primary" />
                        )}
                        {child.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                key={item.name}
                variant="ghost"
                asChild
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                <Link href={item.href}>{item.name}</Link>
              </Button>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <SearchBar variant="compact" />
          </div>

          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="hidden text-xs lg:flex"
              >
                <span className="flex items-center gap-1">
                  <span className="text-lg">🇨🇴</span>
                  Colombia
                  <ChevronDown className="h-3 w-3" />
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-border">
              <DropdownMenuItem>
                <span className="mr-2">🇨🇴</span> Colombia
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="mr-2">🇲🇽</span> México
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="mr-2">🇵🇪</span> Perú
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 bg-background border-border"
            >
              <div className="flex flex-col gap-4 pt-8">
                <SearchBar variant="full" />
                <nav className="flex flex-col gap-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() =>
                          !item.children && setMobileOpen(false)
                        }
                        className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <div className="ml-4 mt-1 flex flex-col gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                            >
                              {child.icon && (
                                <child.icon className="h-4 w-4 text-primary" />
                              )}
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
