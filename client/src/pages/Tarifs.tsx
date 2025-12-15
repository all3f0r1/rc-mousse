import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Info } from "lucide-react";
import PriceCalculator from "@/components/PriceCalculator";

export default function Tarifs() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <section className="bg-industrial-grey text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">TARIFS & DEVIS</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Transparence totale sur nos prix de découpe. Utilisez notre calculateur pour une estimation immédiate.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full lg:w-2/3">
              <PriceCalculator />
            </div>
            
            <div className="w-full lg:w-1/3 space-y-8">
              <div className="bg-white p-6 border border-border shadow-sm">
                <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-secondary" />
                  INFOS PRIX
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Prix TTC (TVA 21% incluse)</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Découpe à angle droit incluse</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Pas de frais de dossier pour &gt; 10€</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 border border-blue-100">
                <h3 className="text-xl font-heading font-bold mb-4 text-blue-900">REMISES PRO</h3>
                <p className="text-blue-800 text-sm mb-4">
                  Des tarifs dégressifs sont appliqués automatiquement pour les commandes en volume :
                </p>
                <ul className="space-y-2 text-sm text-blue-700 font-mono">
                  <li>• Plaques entières (120x200cm) : -25%</li>
                  <li>• Séries &gt; 10 pièces : Sur devis</li>
                  <li>• Volume &gt; 1m³ : Sur devis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="py-20 bg-white border-t border-border">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">BESOIN D'UNE FORME SPÉCIALE ?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Le calculateur ne gère que les formes rectangulaires. Pour les arrondis, biseaux, trapèzes ou projets de couture, demandez un devis personnalisé.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-industrial-grey text-white hover:bg-black font-bold px-8">
              DEMANDER UN DEVIS COMPLET
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
