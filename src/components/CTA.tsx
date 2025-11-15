import Button from "@/ui/Button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/cta.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      
      <div className="container mx-auto px-10 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-white mb-6">
            Rejoignez la révolution de l'agriculture intelligente
          </h2>

          {/* Subtitle */}
          <p className="text-white/90 font-inter font-normal text-lg lg:text-xl mb-10 max-w-3xl mx-auto">
            Transformez vos opérations agricoles avec des insights basés sur les données et des recommandations IA
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              className="!bg-white !text-primary !border-white hover:!bg-white/90 flex items-center gap-2 px-8 py-3"
            >
              Demander une démo
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              className="!bg-white !text-primary !border-white hover:!bg-white/90 px-8 py-3"
            >
              Devenir Partenaire
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

