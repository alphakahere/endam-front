import { Zap, Database, Leaf, Activity } from "lucide-react";
import Image from "next/image";

export default function Approach() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-[#FDD835]/20 rounded-3xl px-4 py-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-[#8D6E63] font-inter font-normal text-xl">Notre Approche</span>
            </div>
          </div>
          <h2 className="text-base font-poppins font-normal text-primary">
            Comment ça marche ?
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Top Gradient Box */}
            <div className="bg-linear-to-b from-[#1B5E20] to-[#81C784] rounded-2xl p-8 text-white">
              <h3 className="text-xl lg:text-2xl font-poppins font-medium mb-4">
                Une solution complète pour sortir de l'incertitude
              </h3>
              <p className="font-inter font-normal text-base lg:text-lg">
                Endam Agri permet aux petits producteurs africains de sortir de l'incertitude en combinant conseil agricole digitalisé et solutions biologiques innovantes.
              </p>
            </div>

            {/* Bottom White Box */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-[#FDD835] rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-primary font-poppins font-medium text-lg mb-3">
                    Un processus simple et efficace
                  </h3>
                  <p className="text-gray-700 font-inter font-normal text-base leading-relaxed">
                    Nos agents collectent des données agronomiques directement sur le terrain et le producteur reçoit des conseils personnalisés sur les bonnes pratiques agricoles et un itinéraire technique dynamique adaptés à sa parcelle : quoi semer, quand, quels dosages et comment régénérer son sol grâce à des biostimulants et biofertilisants naturels.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Three Phone Mockups */}
            <div className="flex items-center justify-center gap-4">
              {/* Phone 1 - Login/Onboarding */}
              <div>
                  <Image
                    src="/images/app-screen1.png"
                    alt="Application mobile - Collecte de données"
                    width={180}
                    height={320}
                    className="w-full h-auto object-cover rounded-2xl"
                />
              </div>

              {/* Phone 2 - Dashboard */}
              <div>
                  <Image
                    src="/images/app-screen2.png"
                    alt="Application mobile - Tableau de bord"
                    width={180}
                    height={320}
                    className="w-full h-auto object-cover rounded-2xl"
                />
              </div>

              {/* Phone 3 - Map */}
              <div>
                  <Image
                    src="/images/app-screen3.png"
                    alt="Application mobile - Carte"
                    width={180}
                    height={320}
                    className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Bottom Feature Boxes */}
            <div className="grid grid-cols-2 gap-4">
              {/* Analysis Box */}
              <div className="bg-[#81C7841A] rounded-2xl p-6">
                <Database className="w-10 h-10 text-primary mb-2" />
                <h4 className="text-primary font-poppins font-medium text-xl mb-2">
                  Analyse
                </h4>
                <p className="text-gray-700 font-inter font-normal text-base">
                  Données agronomiques
                </p>
              </div>

              {/* Advice Box */}
              <div className="bg-[#FDD8351A] rounded-2xl p-6">
                <Leaf className="w-10 h-10 text-primary mb-2" />
                <h4 className="text-primary font-poppins font-medium text-xl mb-2">
                  Conseils
                </h4>
                <p className="text-gray-700 font-inter font-normal text-base">
                  Personnalisés et adaptés
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

