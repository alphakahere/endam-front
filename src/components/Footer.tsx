import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-10 py-12">
        {/* Top Section - Four Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Leftmost Column - Logo and Description */}
          <div>
            <div className="mb-4">
              <Image 
                src="/images/logo.png" 
                alt="ENDAM Agri" 
                width={93} 
                height={63}
                className="brightness-0 invert"
              />
            </div>
            <p className="text-white/80 font-inter font-normal text-sm leading-relaxed">
              Innovation pour les agriculteurs africains. Transformer l'agriculture grâce aux données et à la technologie.
            </p>
          </div>

          {/* Produit Column */}
          <div>
            <h3 className="text-white font-poppins font-medium text-lg mb-4">
              Produit
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#fonctionnalites" className="text-white/80 font-inter font-normal text-sm hover:text-white transition-colors">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="#technologie" className="text-white/80 font-inter font-normal text-sm hover:text-white transition-colors">
                  Technologie
                </Link>
              </li>
              <li>
                <Link href="#impact" className="text-white/80 font-inter font-normal text-sm hover:text-white transition-colors">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="#tarifs" className="text-white/80 font-inter font-normal text-sm hover:text-white transition-colors">
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>

          {/* Entreprise Column */}
          <div>
            <h3 className="text-white font-poppins font-medium text-lg mb-4">
              Entreprise
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#a-propos" className="text-white/80 font-inter font-normal text-sm hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/80 font-inter font-normal text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#partenaires" className="text-white/80 font-inter font-normal text-sm hover:text-white transition-colors">
                  Partenaires
                </Link>
              </li>
              <li>
                <Link href="#carrieres" className="text-white/80 font-inter font-normal text-sm hover:text-white transition-colors">
                  Carrières
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources Column */}
          <div>
            <h3 className="text-white font-poppins font-medium text-lg mb-4">
              Ressources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#api" className="text-white/80 font-inter font-normal text-sm hover:text-white transition-colors">
                  Accès API
                </Link>
              </li>
              <li>
                <Link href="#documentation" className="text-white/80 font-inter font-normal text-sm hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#mentions-legales" className="text-white/80 font-inter font-normal text-sm hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="#confidentialite" className="text-white/80 font-inter font-normal text-sm hover:text-white transition-colors">
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright Notice */}
          <p className="text-white/80 font-inter font-normal text-sm">
            © 2025 ENDAM Agri – Innovation pour les agriculteurs africains.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a 
              href="mailto:contact@endam.agri" 
              className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

