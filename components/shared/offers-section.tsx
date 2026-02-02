"use client";

import React from "react"

import { useState, useEffect } from "react";
import { ArrowRight, Tag, Clock, X, Check, Gift, CreditCard, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { getActiveOffers, type Offer } from "@/lib/offers";
import { trackEvent } from "@/lib/analytics";

const iconMap: Record<string, React.ReactNode> = {
  percentage: <Percent className="h-5 w-5" />,
  fixed: <Tag className="h-5 w-5" />,
  bundle: <Gift className="h-5 w-5" />,
  financing: <CreditCard className="h-5 w-5" />,
};

export function OffersSection() {
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [mounted, setMounted] = useState(false);
  const offers = getActiveOffers().slice(0, 3);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOfferClick = (offer: Offer) => {
    trackEvent("promo_clicked", { promo_id: offer.id, promo_name: offer.title });
    setSelectedOffer(offer);
  };

  if (offers.length === 0) return null;

  return (
    <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-10 text-center">
          <Badge variant="secondary" className="mb-4">
            Ofertas Exclusivas
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Ofertas para empresas
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Aprovecha condiciones especiales diseñadas para potenciar la transformación digital de tu negocio
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <OfferCard 
              key={offer.id} 
              offer={offer} 
              onClick={() => handleOfferClick(offer)} 
            />
          ))}
        </div>
      </div>

      {/* Offer Details Modal */}
      <Dialog open={!!selectedOffer} onOpenChange={() => setSelectedOffer(null)}>
        <DialogContent className="max-w-lg bg-card border-border">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                {selectedOffer && iconMap[selectedOffer.discountType]}
              </div>
              {selectedOffer?.badge && (
                <Badge variant="secondary">{selectedOffer.badge}</Badge>
              )}
            </div>
            <DialogTitle className="text-xl text-foreground">
              {selectedOffer?.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {selectedOffer?.description}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 pt-4">
            {/* Validity */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Válido hasta: {mounted && selectedOffer ? new Date(selectedOffer.validUntil).toLocaleDateString('es-CO', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              }) : selectedOffer?.validUntil}</span>
            </div>

            {/* Terms */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Términos y condiciones:</p>
              <ul className="space-y-2">
                {selectedOffer?.terms.map((term, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {term}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-border">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Solicitar esta oferta
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="mt-2 text-xs text-center text-muted-foreground">
                Un asesor te contactará para aplicar esta promoción a tu cotización
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

function OfferCard({ offer, onClick }: { offer: Offer; onClick: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Format date only on client to avoid hydration mismatch
  const formattedDate = mounted 
    ? new Date(offer.validUntil).toLocaleDateString('es-CO', { month: 'short', day: 'numeric' })
    : offer.validUntil.slice(5); // Fallback to MM-DD format from ISO string

  return (
    <div 
      className="group relative bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all cursor-pointer"
      onClick={onClick}
    >
      {/* Badge */}
      {offer.badge && (
        <Badge 
          className="absolute -top-2 right-4 bg-primary text-primary-foreground"
        >
          {offer.badge}
        </Badge>
      )}

      {/* Icon */}
      <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit text-primary">
        {iconMap[offer.discountType]}
      </div>

      {/* Content */}
      <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
        {offer.title}
      </h3>
      <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
        {offer.description}
      </p>

      {/* Validity */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
        <Clock className="h-3 w-3" />
        <span>Hasta {formattedDate}</span>
      </div>

      {/* CTA */}
      <Button 
        variant="ghost" 
        size="sm" 
        className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
      >
        Ver detalles
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
}
