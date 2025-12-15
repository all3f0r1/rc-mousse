import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, Clock, AlertTriangle } from "lucide-react";

export default function Atelier() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <section className="bg-industrial-grey text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">L'ATELIER</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Situé dans le zoning de Nivelles Sud, notre atelier est équipé de machines de découpe industrielle pour répondre à tous vos besoins.
          </p>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Info */}
            <div className="space-y-12">
              {/* Adresse */}
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary rounded-sm flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-4">ADRESSE</h3>
                  <p className="text-lg font-medium">RC Mousse SPRL</p>
                  <p className="text-muted-foreground">Rue du Commerce 12/4</p>
                  <p className="text-muted-foreground">1400 Nivelles (Zoning Sud)</p>
                  <p className="text-sm text-gray-500 mt-2 italic">Entrée via Rue du Travail (arrière du bâtiment)</p>
                  
                  <div className="mt-6">
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=RC+Mousse+Nivelles" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="font-bold">
                        VOIR SUR GOOGLE MAPS
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary rounded-sm flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-4">HORAIRES</h3>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex justify-between w-full max-w-xs border-b border-gray-100 py-2">
                      <span>Lundi - Vendredi</span>
                      <span className="font-bold">Sur rendez-vous</span>
                    </div>
                    <div className="flex justify-between w-full max-w-xs border-b border-gray-100 py-2">
                      <span>Samedi</span>
                      <span className="font-bold">09:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between w-full max-w-xs border-b border-gray-100 py-2 text-gray-400">
                      <span>Dimanche</span>
                      <span>Fermé</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-yellow-50 border border-yellow-200 p-4 rounded-md flex gap-3 items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-yellow-800">
                      <strong>Attention :</strong> Nous sommes un atelier de fabrication, pas un magasin. 
                      L'accès en semaine se fait uniquement sur rendez-vous pour les professionnels.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Map/Image */}
            <div className="bg-gray-100 aspect-square md:aspect-video lg:aspect-square rounded-lg overflow-hidden border border-border relative">
              <img 
                src="/images/plan-acces.webp" 
                alt="Plan d'accès RC Mousse" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-20 bg-concrete border-t border-border">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">RÈGLES DE L'ATELIER</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-border shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-industrial-grey">PROFESSIONNELS</h3>
              <p className="text-muted-foreground">
                Nous servons prioritairement les entreprises, indépendants, PME et revendeurs sur présentation de carte de visite ou numéro de TVA.
              </p>
            </div>
            <div className="bg-white p-8 border border-border shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-industrial-grey">PAIEMENT</h3>
              <p className="text-muted-foreground">
                Le paiement s'effectue au comptant lors de l'enlèvement. Nous acceptons les cartes bancaires et le liquide. Pas de chèques.
              </p>
            </div>
            <div className="bg-white p-8 border border-border shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-industrial-grey">DÉLAIS</h3>
              <p className="text-muted-foreground">
                Découpe immédiate pour les formes simples (rectangles). Délai de 8 jours environ pour les travaux de couture ou formes complexes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
