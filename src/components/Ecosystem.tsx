import { Smartphone, Grid3x3, BarChart3 } from "lucide-react";

export default function Ecosystem() {
  return (
    <section className="py-20 bg-[#F9FAF9]">
      <div className="container mx-auto px-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-poppins font-medium text-primary mb-4">
            Un écosystème complet pour collecter, analyser et agir
          </h2>
          <p className="text-gray-700 font-inter font-normal text-base lg:text-lg max-w-4xl mx-auto">
            Trois interfaces puissantes travaillant ensemble pour transformer les données agricoles en analyses exploitables
          </p>
        </div>

        {/* Three Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 - Mobile Application */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="bg-gradient-to-b from-[#1B5E20] to-[#4FC3F7] rounded-xl w-16 h-16 flex items-center justify-center mb-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <p className="text-gray-700 font-inter font-normal text-base">
              Application mobile : collecte de données terrain offline et online
            </p>
          </div>

          {/* Card 2 - Web Interface */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="bg-gradient-to-b from-[#1B5E20] to-[#4FC3F7] rounded-xl w-16 h-16 flex items-center justify-center mb-4">
              <Grid3x3 className="w-8 h-8 text-white" />
            </div>
            <p className="text-gray-700 font-inter font-normal text-base">
              Interface web : Recommandations personnalisées à temps réel
            </p>
          </div>

          {/* Card 3 - Decision-maker Tool */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="bg-gradient-to-b from-[#1B5E20] to-[#4FC3F7] rounded-xl w-16 h-16 flex items-center justify-center mb-4">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <p className="text-gray-700 font-inter font-normal text-base">
              Décideur : modélisation prédictive pour planification stratégique
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

