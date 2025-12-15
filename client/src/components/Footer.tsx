import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-industrial-grey text-white border-t-4 border-secondary">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-heading text-secondary">RC MOUSSE</h3>
            <p className="text-sm text-gray-300 max-w-xs">
              Fabricant industriel spécialisé dans la découpe de mousse sur mesure et la confection de coussins pour professionnels.
            </p>
            <div className="flex items-center gap-2">
              <img src="/images/confiance-textile-label.webp" alt="Confiance Textile" className="h-16 w-auto bg-white p-1" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold font-heading mb-4 text-secondary">NAVIGATION</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/"><a className="hover:text-secondary transition-colors">Accueil</a></Link></li>
              <li><Link href="/services"><a className="hover:text-secondary transition-colors">Services</a></Link></li>
              <li><Link href="/tarifs"><a className="hover:text-secondary transition-colors">Tarifs</a></Link></li>
              <li><Link href="/atelier"><a className="hover:text-secondary transition-colors">L'Atelier</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-secondary transition-colors">Contact</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold font-heading mb-4 text-secondary">CONTACT</h3>
            <ul className="space-y-2 text-sm font-mono">
              <li>12/4 rue de commerce</li>
              <li>(entrée rue du travail)</li>
              <li>B-1400 Nivelles</li>
              <li className="pt-2 text-secondary">rc.mousse@skynet.be</li>
              <li>foam@skynet.be</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold font-heading mb-4 text-secondary">HORAIRES</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between border-b border-gray-700 pb-1">
                <span>Lundi - Vendredi</span>
                <span className="font-mono text-gray-400">Sur RDV</span>
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-1">
                <span>Samedi</span>
                <span className="font-mono text-secondary">09:00 - 13:00</span>
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-1">
                <span>Dimanche</span>
                <span className="font-mono text-gray-400">Fermé</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-400 italic">
              Accès réservé aux professionnels (entreprises, indépendants, PME).
            </p>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-xs text-gray-500 font-mono">
          <p>&copy; {new Date().getFullYear()} RC Mousse SPRL. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
