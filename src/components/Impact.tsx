import { CheckCircle, Leaf, TrendingUp } from "lucide-react";

export default function Impact() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/impact.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-[#1B5E20]/70 to-[#4FC3F7]/70 z-0" />
      
      <div className="container mx-auto px-10 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-poppins font-medium text-white mb-4">
            Impact mesurable sur la productivité et la durabilité
          </h2>
          <p className="text-white/90 font-inter font-normal text-base lg:text-lg max-w-4xl mx-auto">
            Résultats concrets auprès des agriculteurs et institutions au Sénégal et en Afrique de l'Ouest
          </p>
        </div>

        {/* Four KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
          {/* Card 1 - +30% Rendement */}
          <div className="bg-linear-to-b from-[#1B5E20] to-[#4FC3F7] rounded-2xl p-6 shadow-lg text-white">
            <div className="text-base text-center font-inter font-normal mb-2">+30%</div>
            <p className="text-center font-inter font-normal text-sm">
              Augmentation moyenne du rendement
            </p>
          </div>

          {/* Card 2 - 55+ Agriculteurs */}
          <div className="bg-linear-to-b from-[#1B5E20] to-[#4FC3F7] rounded-2xl p-6 shadow-lg text-white">
            <div className="text-base text-center font-inter font-normal mb-2">55+</div>
            <p className="text-center font-inter font-normal text-sm">
              Agriculteurs accompagnés
            </p>
          </div>

          {/* Card 3 - 100% Données certifiées */}
          <div className="bg-linear-to-b from-[#1B5E20] to-[#4FC3F7] rounded-2xl p-6 shadow-lg text-white">
            <div className="text-base text-center font-inter font-normal mb-2">100%</div>
            <p className="text-center font-inter font-normal text-sm">
              Données certifiées pour les banques
            </p>
          </div>

          {/* Card 4 - -40% Pesticides & Eau */}
          <div className="bg-linear-to-b from-[#1B5E20] to-[#4FC3F7] rounded-2xl p-6 shadow-lg text-white">
            <div className="text-base text-center font-poppins font-bold mb-2">-40%</div>
            <p className="text-center font-inter font-normal text-sm">
              Utilisation pesticides & eau
            </p>
          </div>
        </div>

        {/* Bottom Section: Pillars of Impact */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Décisions Basées sur les Données */}
            <div className="text-center">
              <div className="bg-[#FDD835] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-primary font-poppins font-medium text-lg mb-2">
                Décisions Basées sur les Données
              </h3>
              <p className="text-gray-700 font-inter font-normal text-sm">
                Les agriculteurs prennent des décisions éclairées basées sur des informations en temps réel
              </p>
            </div>

            {/* Pillar 2: Pratiques Durables */}
            <div className="text-center">
              <div className="bg-[#81C784] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-primary font-poppins font-medium text-lg mb-2">
                Pratiques Durables
              </h3>
              <p className="text-gray-700 font-inter font-normal text-sm">
                Impact environnemental réduit grâce à l'agriculture de précision
              </p>
            </div>

            {/* Pillar 3: Croissance Économique */}
            <div className="text-center">
              <div className="bg-[#FDD835] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-primary font-poppins font-medium text-lg mb-2">
                Croissance Économique
              </h3>
              <p className="text-gray-700 font-inter font-normal text-sm">
                Augmentation des revenus et accès aux services financiers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

