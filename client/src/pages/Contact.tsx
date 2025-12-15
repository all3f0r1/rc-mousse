import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <section className="bg-industrial-grey text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">CONTACTEZ-NOUS</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Une question ? Un projet ? Envoyez-nous un message ou passez nous voir à l'atelier (sur rendez-vous).
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 border border-border shadow-sm">
              <h2 className="text-2xl font-heading font-bold mb-6">ENVOYER UN MESSAGE</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom / Société</Label>
                    <Input id="name" placeholder="Votre nom" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="votre@email.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input id="subject" placeholder="Demande de devis, question technique..." />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Décrivez votre projet..." className="min-h-[150px]" />
                </div>

                <div className="bg-gray-50 p-4 text-sm text-muted-foreground border border-border rounded-md">
                  <p>Pour les demandes de devis, merci de préciser :</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Dimensions exactes (L x l x épaisseur)</li>
                    <li>Type de mousse souhaité (si connu)</li>
                    <li>Usage prévu (assise, dossier, matelas...)</li>
                  </ul>
                </div>

                <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
                  ENVOYER LE MESSAGE
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-industrial-grey text-white p-8">
                <h3 className="text-xl font-heading font-bold mb-6">COORDONNÉES</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-secondary flex-shrink-0" />
                    <div>
                      <p className="font-bold">RC Mousse SPRL</p>
                      <p className="text-gray-300">Rue du Commerce 12/4</p>
                      <p className="text-gray-300">1400 Nivelles (Zoning Sud)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-secondary flex-shrink-0" />
                    <div>
                      <p className="font-bold">Téléphone</p>
                      <p className="text-gray-300">+32 (0)67 21 21 21</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-secondary flex-shrink-0" />
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="text-gray-300">info@rc-mousse.be</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 border border-border">
                <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-secondary" />
                  HORAIRES D'OUVERTURE
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium">Lundi - Vendredi</span>
                    <span>Sur rendez-vous</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium">Samedi</span>
                    <span>09:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span className="font-medium">Dimanche</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
