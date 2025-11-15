import { Zap, MapPin, Camera, AlertTriangle, CheckCircle, Leaf, Crosshair } from "lucide-react";
import Image from "next/image";

export default function Monitoring() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text and Features */}
          <div>
            {/* Header Badge */}
            <div className="flex items-center gap-2 bg-[#E3F2FD] rounded-2xl w-min px-4 py-2 mb-6 shadow-sm">
              <Zap className="w-5 h-5 text-[#64B5F6]" />
              <span className="text-gray-700 font-inter font-normal text-sm">Propulsé par l'IA</span>
            </div>

            {/* Main Title */}
            <h2 className="text-2xl lg:text-3xl font-poppins font-medium text-primary mb-4">
              Suivi intelligent et traçable des cultures pour chaque parcelle
            </h2>

            {/* Description */}
            <p className="text-gray-700 font-inter font-normal text-base lg:text-lg mb-8">
              De la cartographie du champ à la récolte, nous offrons une traçabilité complète et des recommandations intelligentes à chaque stade de croissance.
            </p>

            {/* Four Steps */}
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="relative flex-shrink-0">
                  <div className="bg-gradient-to-b from-[#1B5E20] to-[#81C784] rounded-full w-14 h-14 flex items-center justify-center border-2 border-[#C8E6C9]">
                    <div className="relative w-6 h-6 flex items-center justify-center">
                      <Crosshair className="w-5 h-5 text-white opacity-70 absolute" />
                      <MapPin className="w-4 h-4 text-white absolute" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-400 font-inter font-normal text-sm">Step 1</span>
                    <h3 className="text-primary font-poppins font-medium text-lg">
                      Cartographie & Configuration
                    </h3>
                  </div>
                  <p className="text-gray-700 font-inter font-normal text-sm">
                    Cartographie des limites GPS avec géolocalisation précise et identification des parcelles.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="relative flex-shrink-0">
                  <div className="bg-gradient-to-b from-[#1B5E20] to-[#81C784] rounded-full w-14 h-14 flex items-center justify-center border-2 border-[#C8E6C9]">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-400 font-inter font-normal text-sm">Step 2</span>
                    <h3 className="text-primary font-poppins font-medium text-lg">
                      Suivi Phénologique
                    </h3>
                  </div>
                  <p className="text-gray-700 font-inter font-normal text-sm">
                    Analyse d'images par IA pour suivre les stades de croissance et les patterns de développement des cultures.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="relative flex-shrink-0">
                  <div className="bg-gradient-to-b from-[#1B5E20] to-[#81C784] rounded-full w-14 h-14 flex items-center justify-center border-2 border-[#C8E6C9]">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-400 font-inter font-normal text-sm">Step 3</span>
                    <h3 className="text-primary font-poppins font-medium text-lg">
                      Détection d'Anomalies
                    </h3>
                  </div>
                  <p className="text-gray-700 font-inter font-normal text-sm">
                    Détection précoce des maladies, carences nutritives et stress hydrique grâce aux données satellitaires et terrain.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="relative flex-shrink-0">
                  <div className="bg-gradient-to-b from-[#1B5E20] to-[#81C784] rounded-full w-14 h-14 flex items-center justify-center border-2 border-[#C8E6C9]">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-400 font-inter font-normal text-sm">Step 4</span>
                    <h3 className="text-primary font-poppins font-medium text-lg">
                      Recommandations Personnalisées
                    </h3>
                  </div>
                  <p className="text-gray-700 font-inter font-normal text-sm">
                    Conseils agronomiques contextualisés adaptés aux conditions uniques de chaque parcelle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/corn.png"
                alt="Corn field"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-lg max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="w-5 h-5 text-primary" />
                  <span className="text-gray-700 font-inter font-normal text-sm">100% Numérique</span>
                </div>
                <p className="text-gray-500 font-inter font-normal text-xs">
                  Rapport de Traçabilité
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

