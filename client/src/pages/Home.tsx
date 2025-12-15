import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Ruler, Scissors, Layers, Truck } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-industrial-grey text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
          <img 
            src="/images/hero-image.png" 
            alt="Atelier RC Mousse" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 mb-6 font-mono text-sm font-bold tracking-wider transform -skew-x-12">
              <span className="block transform skew-x-12">FABRICANT INDUSTRIEL DEPUIS 2000</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
              PRÉCISION <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">SUR MESURE</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl font-light border-l-4 border-secondary pl-6">
              Découpe de mousse et confection de coussins pour professionnels. 
              Qualité industrielle, délais courts, service expert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 rounded-none font-bold font-heading">
                  DEMANDER UN DEVIS
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-none font-heading">
                  NOS SERVICES
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-1/3 h-2 bg-secondary" />
        <div className="absolute bottom-0 right-1/3 w-24 h-2 bg-white" />
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Service 1 */}
            <motion.div variants={fadeIn} className="group relative bg-white border border-border hover:border-secondary transition-colors duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/images/service-decoupe.png" 
                  alt="Découpe de mousse" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-industrial-grey text-white flex items-center justify-center mb-6 -mt-14 relative z-10 border-4 border-white">
                  <Scissors className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">DÉCOUPE SUR MESURE</h3>
                <p className="text-muted-foreground mb-6">
                  Découpe minute pour formes simples ou sur plan pour formes complexes. Précision millimétrique.
                </p>
                <ul className="space-y-2 mb-6 font-mono text-sm text-gray-600">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary"></span>Découpe immédiate</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary"></span>Toutes densités</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary"></span>Formes complexes</li>
                </ul>
                <Link href="/services">
                  <a className="inline-flex items-center text-sm font-bold uppercase tracking-wider hover:text-secondary transition-colors">
                    En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Link>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeIn} className="group relative bg-white border border-border hover:border-secondary transition-colors duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/images/service-coussins.png" 
                  alt="Coussins sur mesure" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-industrial-grey text-white flex items-center justify-center mb-6 -mt-14 relative z-10 border-4 border-white">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">COUSSINS & HOUSSES</h3>
                <p className="text-muted-foreground mb-6">
                  Confection complète de coussins avec housses en tissu ou simili-cuir. Finitions professionnelles.
                </p>
                <ul className="space-y-2 mb-6 font-mono text-sm text-gray-600">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary"></span>Tissus résistants</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary"></span>Cuir-look</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary"></span>Usage intensif</li>
                </ul>
                <Link href="/services">
                  <a className="inline-flex items-center text-sm font-bold uppercase tracking-wider hover:text-secondary transition-colors">
                    En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Link>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={fadeIn} className="group relative bg-white border border-border hover:border-secondary transition-colors duration-300">
              <div className="aspect-video overflow-hidden bg-gray-100 flex items-center justify-center">
                <img 
                  src="/images/product-modules-enfants.webp" 
                  alt="Modules motricité" 
                  className="h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-industrial-grey text-white flex items-center justify-center mb-6 -mt-14 relative z-10 border-4 border-white">
                  <Ruler className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">PROJETS SPÉCIAUX</h3>
                <p className="text-muted-foreground mb-6">
                  Modules de motricité, aménagement de vans, banquettes de restaurant, projets acoustiques.
                </p>
                <ul className="space-y-2 mb-6 font-mono text-sm text-gray-600">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary"></span>Sur plan</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary"></span>Séries limitées</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary"></span>Prototypage</li>
                </ul>
                <Link href="/services">
                  <a className="inline-flex items-center text-sm font-bold uppercase tracking-wider hover:text-secondary transition-colors">
                    En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-secondary rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">RÉSERVÉ AUX PROFESSIONNELS</h2>
              <p className="text-blue-100 text-lg mb-8">
                Nous servons exclusivement les entreprises, indépendants, PME et revendeurs. 
                Notre atelier est optimisé pour répondre aux exigences de qualité et de rapidité des pros.
              </p>
              <div className="flex flex-wrap gap-4 font-mono text-sm">
                <div className="bg-white/10 px-4 py-2 border border-white/20">Architectes</div>
                <div className="bg-white/10 px-4 py-2 border border-white/20">Tapissiers</div>
                <div className="bg-white/10 px-4 py-2 border border-white/20">Restaurants</div>
                <div className="bg-white/10 px-4 py-2 border border-white/20">Collectivités</div>
              </div>
            </div>
            <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <Truck className="w-8 h-8 text-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-bold font-heading text-xl mb-2">STOCK PERMANENT</h4>
                  <p className="text-sm text-blue-100">Large stock de mousses de toutes densités disponibles immédiatement.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Ruler className="w-8 h-8 text-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-bold font-heading text-xl mb-2">DÉCOUPE MINUTE</h4>
                  <p className="text-sm text-blue-100">Pour les formes simples (angles droits), repartez directement avec votre commande.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-concrete">
        <div className="container text-center">
          <h2 className="text-4xl font-heading font-bold mb-6 text-industrial-grey">PRÊT À LANCER VOTRE PROJET ?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Envoyez-nous vos dimensions ou plans pour un devis rapide. 
            Notre équipe technique vous conseillera sur le choix des densités.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-xl px-10 py-8 rounded-none font-bold font-heading shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              DEMANDER UN DEVIS
            </Button>
          </Link>
          <p className="mt-6 text-sm text-gray-500 font-mono">Réponse sous 24-48h ouvrables</p>
        </div>
      </section>
    </div>
  );
}
