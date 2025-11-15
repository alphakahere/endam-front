import { Leaf, Microscope, UserCheck, Sprout, FileText, Timer } from "lucide-react";

export default function Solutions() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-[#C8E6C9] rounded-full px-6 py-2 flex items-center gap-2">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-primary font-inter font-normal text-sm">Nos Solutions</span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-gray-600 font-inter font-normal text-sm mb-2">
            Nos Services / Produits
          </p>

          {/* Main Description */}
          <p className="text-gray-700 font-inter font-normal text-base lg:text-lg max-w-3xl mx-auto">
            Des solutions complètes pour accompagner la transformation agricole et la régénération des sols
          </p>
        </div>

        {/* Service/Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {/* Card 1 - Diagnostic agronomique digital */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="bg-[#4FC3F7] rounded-xl w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <Microscope className="w-8 h-8 text-white" />
            </div>
            <p className="text-gray-700 font-inter font-normal text-base text-center">
              Diagnostic agronomique digital
            </p>
          </div>

          {/* Card 2 - Conseil et suivi sur mesure */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="bg-[#4FC3F7] rounded-xl w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <UserCheck className="w-8 h-8 text-white" />
            </div>
            <p className="text-gray-700 font-inter font-normal text-base text-center">
              Conseil et suivi sur mesure
            </p>
          </div>

          {/* Card 3 - Accompagnement des projets de régénération des sols */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="bg-[#4FC3F7] rounded-xl w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <Sprout className="w-8 h-8 text-white" />
            </div>
            <p className="text-gray-700 font-inter font-normal text-base text-center">
              Accompagnement des projets de régénération des sols
            </p>
          </div>

          {/* Card 4 - Biostimulants naturels à base de microbiotes */}
          <div className="bg-white rounded-3xl p-6 shadow-sm md:col-start-1">
            <div className="bg-[#4FC3F7] rounded-xl w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <p className="text-gray-700 font-inter font-normal text-base text-center">
              Biostimulants naturels à base de microbiotes
            </p>
          </div>

          {/* Card 5 - Accélérateur de maturation de compost */}
          <div className="bg-white rounded-3xl p-6 shadow-sm md:col-start-2">
            <div className="bg-[#4FC3F7] rounded-xl w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <Timer className="w-8 h-8 text-white" />
            </div>
            <p className="text-gray-700 font-inter font-normal text-base text-center">
              Accélérateur de maturation de compost
            </p>
          </div>
        </div>

        {/* Concluding Statement */}
        <div className="text-center">
          <p className="text-gray-700 font-inter font-normal text-base lg:text-lg max-w-4xl mx-auto">
            Chaque service est conçu pour maximiser la productivité agricole tout en préservant et restaurant l'équilibre naturel des écosystèmes.
          </p>
        </div>
      </div>
    </section>
  );
}

