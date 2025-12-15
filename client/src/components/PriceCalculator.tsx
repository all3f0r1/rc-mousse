import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Calculator, AlertCircle, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Données de prix extraites
const FOAM_TYPES = [
  {
    id: "25kg",
    name: "25kg/m³ - Ferme (Siège) ou Très Souple (Dos)",
    shortName: "25kg/m³ Standard",
    description: "Entrée de gamme. Convient pour dossiers ou usage occasionnel.",
    price: 465, // Prix au m³
    color: "bg-yellow-50 border-yellow-200 text-yellow-900"
  },
  {
    id: "30kg",
    name: "30kg/m³ - Souple ou Ferme",
    shortName: "30kg/m³ Confort",
    description: "Standard pour assises de canapés et matelas d'appoint.",
    price: 525,
    color: "bg-orange-50 border-orange-200 text-orange-900"
  },
  {
    id: "35kg",
    name: "35kg/m³ - Très Ferme ou Très Souple",
    shortName: "35kg/m³ Premium",
    description: "Haute qualité. Idéal pour usage quotidien et intensif.",
    price: 635,
    color: "bg-red-50 border-red-200 text-red-900"
  },
  {
    id: "38kg",
    name: "38kg/m³ - Haute Résilience (HR)",
    shortName: "38kg/m³ HR Luxe",
    description: "Le top confort. Mousse HR pour matelas et canapés haut de gamme.",
    price: 705,
    color: "bg-blue-50 border-blue-200 text-blue-900"
  }
];

export default function PriceCalculator() {
  const [dimensions, setDimensions] = useState({ length: "", width: "", thickness: "" });
  const [selectedFoam, setSelectedFoam] = useState(FOAM_TYPES[0].id);
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCalculate = () => {
    setError(null);
    setResult(null);
    setIsAnimating(true);

    // Validation
    const L = parseFloat(dimensions.length);
    const l = parseFloat(dimensions.width);
    const e = parseFloat(dimensions.thickness);

    if (isNaN(L) || isNaN(l) || isNaN(e) || L <= 0 || l <= 0 || e <= 0) {
      setError("Veuillez entrer des dimensions valides (nombres positifs).");
      setIsAnimating(false);
      return;
    }

    // Calcul du volume en cm³
    const volumeCm3 = L * l * e;
    
    // Règles métier (bricomousse.be)
    if (volumeCm3 < 1000) {
      setError("Le volume est trop petit (minimum 1000 cm³). Ex: 10x10x10cm.");
      setIsAnimating(false);
      return;
    }
    
    if (volumeCm3 > 1000000) { // 1m³
      setError("Le volume dépasse 1m³. Pour de tels volumes, veuillez nous contacter directement pour un devis sur mesure.");
      setIsAnimating(false);
      return;
    }

    // Calcul du prix
    const foam = FOAM_TYPES.find(f => f.id === selectedFoam);
    if (!foam) return;

    const price = (volumeCm3 / 1000000) * foam.price;
    
    // Simulation d'un petit délai pour l'effet "calcul"
    setTimeout(() => {
      setResult(price);
      setIsAnimating(false);
    }, 400);
  };

  const currentFoam = FOAM_TYPES.find(f => f.id === selectedFoam);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl border-2 border-industrial-grey/10 overflow-hidden">
      <CardHeader className="bg-industrial-grey text-white">
        <CardTitle className="flex items-center gap-2 text-2xl font-heading">
          <Calculator className="w-6 h-6 text-secondary" />
          CALCULATEUR DE PRIX
        </CardTitle>
        <CardDescription className="text-gray-300">
          Estimation immédiate pour découpe rectangulaire (mousse brute)
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6 space-y-6">
        {/* Sélection de la mousse */}
        <div className="space-y-3">
          <Label htmlFor="foam-type" className="text-base font-bold">Type de mousse</Label>
          <Select value={selectedFoam} onValueChange={setSelectedFoam}>
            <SelectTrigger id="foam-type" className="h-12 text-lg border-2 focus:ring-secondary">
              <SelectValue placeholder="Choisir une mousse" />
            </SelectTrigger>
            <SelectContent>
              {FOAM_TYPES.map((foam) => (
                <SelectItem key={foam.id} value={foam.id} className="py-3">
                  <span className="font-bold">{foam.shortName}</span>
                  <span className="text-muted-foreground ml-2 text-sm">- {foam.price}€/m³</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <AnimatePresence mode="wait">
            {currentFoam && (
              <motion.div
                key={currentFoam.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className={`p-4 rounded-md text-sm ${currentFoam.color}`}
              >
                <p className="font-medium">{currentFoam.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="length">Longueur (cm)</Label>
            <div className="relative">
              <Input 
                id="length" 
                type="number" 
                placeholder="ex: 200" 
                value={dimensions.length}
                onChange={(e) => setDimensions({...dimensions, length: e.target.value})}
                className="pr-8 text-lg"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">cm</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="width">Largeur (cm)</Label>
            <div className="relative">
              <Input 
                id="width" 
                type="number" 
                placeholder="ex: 90" 
                value={dimensions.width}
                onChange={(e) => setDimensions({...dimensions, width: e.target.value})}
                className="pr-8 text-lg"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">cm</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="thickness">Épaisseur (cm)</Label>
            <div className="relative">
              <Input 
                id="thickness" 
                type="number" 
                placeholder="ex: 10" 
                value={dimensions.thickness}
                onChange={(e) => setDimensions({...dimensions, thickness: e.target.value})}
                className="pr-8 text-lg"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">cm</span>
            </div>
          </div>
        </div>

        {/* Messages d'erreur */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Erreur</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Résultat */}
        <AnimatePresence>
          {result !== null && !error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-secondary/10 border-2 border-secondary p-6 rounded-lg text-center"
            >
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-1">Prix estimé TTC</p>
              <div className="text-5xl font-bold text-industrial-grey font-heading">
                {result.toFixed(2)} €
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                *Prix pour la mousse brute uniquement, hors housse et découpes spéciales.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
      
      <CardFooter className="bg-gray-50 p-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <p className="text-xs text-gray-500 text-center sm:text-left max-w-xs">
          Ce calculateur fournit une estimation. Le prix final sera confirmé sur devis.
        </p>
        <Button 
          onClick={handleCalculate} 
          size="lg" 
          className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg px-8"
          disabled={isAnimating}
        >
          {isAnimating ? "CALCUL..." : "CALCULER LE PRIX"}
        </Button>
      </CardFooter>
    </Card>
  );
}
