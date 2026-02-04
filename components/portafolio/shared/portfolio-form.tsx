"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Loader2 } from "lucide-react";

export function PortfolioForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name) newErrors.name = "Nombre requerido";
    if (!formData.company) newErrors.company = "Empresa requerida";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Email válido requerido";
    if (!formData.interest) newErrors.interest = "Seleccione una opción";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="rounded-lg bg-card p-8 text-center border border-white/10">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#2dd4bf]/10">
          <CheckCircle className="h-8 w-8 text-[#2dd4bf]" />
        </div>
        <h3 className="text-xl font-bold text-foreground">¡Gracias!</h3>
        <p className="mt-2 text-muted-foreground">
          Recibimos tu solicitud. Un asesor te contactará pronto.
        </p>
      </div>
    );
  }

  return (
    <section id="contacto" className="py-16">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight">Hablemos</h2>
        <p className="mb-8 text-muted-foreground">Déjanos tus datos para iniciar.</p>
        
        <form onSubmit={handleSubmit} className="text-left space-y-4 bg-card/50 p-6 rounded-xl border border-white/5 backdrop-blur-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Empresa</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className={errors.company ? "border-red-500" : ""}
              />
              {errors.company && <span className="text-xs text-red-500">{errors.company}</span>}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email corporativo</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="interest">Me interesa</Label>
            <Select onValueChange={(val) => setFormData({ ...formData, interest: val })}>
              <SelectTrigger className={errors.interest ? "border-red-500" : ""}>
                <SelectValue placeholder="Seleccionar solución" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="valor-it">Soluciones IT (Valor IT)</SelectItem>
                <SelectItem value="daas">Soluciones DaaS</SelectItem>
                <SelectItem value="otru">Otro</SelectItem>
              </SelectContent>
            </Select>
            {errors.interest && <span className="text-xs text-red-500">{errors.interest}</span>}
          </div>

          <Button type="submit" className="w-full bg-[#2dd4bf] text-black hover:bg-[#2dd4bf]/90" disabled={isSubmitting}>
            {isSubmitting ? <Loader2 className="animate-spin h-4 w-4" /> : "Enviar solicitud"}
          </Button>

          <p className="text-center text-xs text-muted-foreground mt-4">
            Usaremos tus datos solo para contactarte sobre tu solicitud.
          </p>
        </form>
      </div>
    </section>
  );
}
