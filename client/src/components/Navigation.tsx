import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/atelier", label: "L'Atelier" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2">
            <img 
              src="/images/logo-rc-mousse.webp" 
              alt="RC Mousse" 
              className="h-10 w-auto object-contain"
            />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary font-heading uppercase tracking-wide",
                  location === link.href
                    ? "text-primary border-b-2 border-secondary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="default" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-none skew-x-[-10deg]">
              <span className="skew-x-[10deg]">DEVIS GRATUIT</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="flex items-center space-x-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-background">
          <div className="container flex flex-col space-y-4 py-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary font-heading uppercase tracking-wide",
                    location === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full bg-secondary text-secondary-foreground font-bold rounded-none">
                DEVIS GRATUIT
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
