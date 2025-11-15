import { AlertTriangle, Droplet, TrendingUp, Shield } from "lucide-react";

export default function Challenge() {
  return (
    <section className="py-20 bg-[#F9FAF9]">
      <div className="container mx-auto px-10">
        {/* Title Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-[#FDD835] rounded-lg p-1.5">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-poppins font-medium text-primary">
              Le Défi
            </h2>
          </div>
          
          {/* Challenge Description */}
          <p className="text-primary font-inter font-normal text-base lg:text-lg max-w-4xl mx-auto mb-4">
            L'agriculture sénégalaise souffre de pratiques inadaptées, de sols dégradés et d'un manque de données fiables. Résultat : rendements faibles et incertitude permanente.
          </p>
          
          {/* Solution Statement */}
          <p className="text-primary font-inter font-normal text-base lg:text-lg max-w-4xl mx-auto">
            La Solution ENDAM Agri digitalise le conseil agricole pour restaurer la fertilité des sols, améliorer la productivité et reconnecter les agriculteurs à la confiance.
          </p>
        </div>

        {/* Three Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 max-w-6xl mx-auto">
          {/* Card 1 - Dépendance à la pluie */}
          <div className="bg-[#E3F2FD] rounded-2xl p-6">
            <div className="bg-[#90CAF9] rounded-xl w-12 h-12 flex items-center justify-center mb-4">
              <Droplet className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-primary font-poppins font-medium text-lg mb-2">
              Dépendance à la pluie
            </h3>
            <p className="text-gray-700 font-inter font-normal text-sm">
              95 % des terres cultivées dépendent encore des aléas climatiques.
            </p>
          </div>

          {/* Card 2 - Rendements limités */}
          <div className="bg-[#FFF9C4] rounded-2xl p-6">
            <div className="bg-[#FDD835] rounded-xl w-12 h-12 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-primary font-poppins font-medium text-lg mb-2">
              Rendements limités
            </h3>
            <p className="text-gray-700 font-inter font-normal text-sm">
              Sans analyses de sols ni suivi digital, le potentiel agricole reste inexploité.
            </p>
          </div>

          {/* Card 3 - Pratiques agricoles non durables */}
          <div className="bg-[#C8E6C9] rounded-2xl p-6">
            <div className="bg-[#81C784] rounded-xl w-12 h-12 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-primary font-poppins font-medium text-lg mb-2">
              Pratiques agricoles non durables
            </h3>
            <p className="text-gray-700 font-inter font-normal text-sm">
              L'absence de données fiables conduit à un usage inadapté des intrants, à la dégradation des sols et à une perte de fertilité naturelle.
            </p>
          </div>
        </div>

        {/* Concluding Statement */}
        <div className="text-center mt-12">
          <p className="text-gray-700 font-inter font-normal text-base lg:text-lg max-w-4xl mx-auto">
            Avec ENDAM Agri, les producteurs passent d'une agriculture épuisante à une agriculture régénératrice, fondée sur les données, la performance et le respect des écosystèmes.
          </p>
        </div>
      </div>
    </section>
  );
}

