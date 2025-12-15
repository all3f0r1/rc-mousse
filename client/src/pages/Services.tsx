import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Scissors, Layers, Ruler, Truck, PenTool, Sofa } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Découpe de Mousse",
      description: "Découpe sur mesure de blocs de mousse polyéther, haute résilience (HR) ou Bultex. Formes simples (rectangles) ou complexes (arrondis, biseaux) selon vos plans.",
      details: ["Découpe minute pour formes simples", "Toutes densités disponibles", "Précision industrielle"]
    },
    {
      icon: <Sofa className="w-8 h-8" />,
      title: "Confection de Coussins",
      description: "Réalisation complète de coussins pour canapés, banquettes, chaises. Remplissage de housses existantes ou création complète.",
      details: ["Rénovation de canapés", "Coussins de caravane/mobil-home", "Matelas sur mesure"]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Housses & Tissus",
      description: "Confection de housses sur mesure en tissu ou simili-cuir (cuir-look). Large choix de matériaux résistants pour usage intensif.",
      details: ["Tissus d'ameublement", "Simili-cuir résistant", "Finitions soignées"]
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Projets Spéciaux",
      description: "Étude et réalisation de projets spécifiques : modules de motricité, acoustique, emballage technique, aménagement de vans.",
      details: ["Modules psychomotricité", "Aménagement véhicules", "Prototypage"]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <section className="bg-industrial-grey text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">NOS SERVICES</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            De la simple découpe à la confection complète, nous accompagnons les professionnels dans tous leurs projets de mousse et d'ameublement.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-6 border border-border hover:border-secondary transition-colors bg-white group"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gray-100 flex items-center justify-center text-industrial-grey group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-mono text-gray-600">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 border-y border-border">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">COMMENT TRAVAILLONS-NOUS ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Demande", text: "Envoyez vos dimensions ou venez à l'atelier avec vos gabarits." },
              { step: "02", title: "Devis", text: "Estimation immédiate ou devis sous 24h pour projets complexes." },
              { step: "03", title: "Production", text: "Découpe minute ou fabrication en atelier selon le projet." },
              { step: "04", title: "Retrait", text: "Enlèvement à l'atelier de Nivelles (pas d'envoi postal)." }
            ].map((item, index) => (
              <div key={index} className="relative p-6 bg-white border border-border">
                <div className="text-6xl font-heading font-bold text-gray-100 absolute top-2 right-4 -z-10">{item.step}</div>
                <h3 className="text-xl font-bold mb-3 font-heading">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-industrial-grey text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold mb-6">UN PROJET SPÉCIFIQUE ?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Pour les formes complexes, les arrondis ou les projets d'envergure, le mieux est de nous contacter directement.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
                NOUS CONTACTER
              </Button>
            </Link>
            <Link href="/#calculator">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-bold">
                CALCULATEUR EN LIGNE
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
