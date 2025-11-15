import Link from "next/link";
import Image from "next/image";
import Button from "@/ui/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#F3F5F5] shadow-sm">
      <div className="container mx-auto px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
              <Image src="/images/logo.png" alt="ENDAM" width={93} height={63} />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#fonctionnalites"
              className="text-base font-normal text-[#4A4A4A] hover:text-[#1B5E20] transition-colors font-inter"
            >
              Fonctionnalités
            </Link>
            <Link
              href="#services"
              className="text-base font-normal text-[#4A4A4A] hover:text-[#1B5E20] transition-colors font-inter"
            >
              Services
            </Link>
            <Link
              href="#impact"
              className="text-base font-normal text-[#4A4A4A] hover:text-[#1B5E20] transition-colors font-inter"
            >
              Impact
            </Link>
            <Link
              href="#partenaires"
              className="text-base font-normal text-[#4A4A4A] hover:text-[#1B5E20] transition-colors font-inter"
            >
              Partenaires
            </Link>
          </div>

          {/* CTA Button */}
          <Button>
            Demander une démo
          </Button>
        </nav>
      </div>
    </header>
  );
}

