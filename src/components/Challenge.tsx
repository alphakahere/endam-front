import { AlertTriangle, Droplet, TrendingUp, Shield } from "lucide-react";

export default function Challenge() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-10">
        {/* Title Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4 bg-[#FDD835]/20 rounded-3xl py-2 px-3 w-fit mx-auto">
            <AlertTriangle className="w-5 h-5 text-white" color="#FDD835" />
            <h2 className="text-xl font-inter font-normal text-[#8D6E63]">
              Le Défi
            </h2>
          </div>
          
          {/* Challenge Description */}
          <p className="text-primary font-inter font-normal text-base lg:text-lg max-w-4xl mx-auto mb-4">
            L'agriculture sénégalaise souffre de pratiques inadaptées, de sols dégradés et d'un manque de données fiables. Résultat : rendements faibles et incertitude permanente.
          </p>
          
          {/* Solution Statement */}
          <p className="text-gray-700 font-inter font-normal text-base lg:text-lg max-w-4xl mx-auto">
            La Solution ENDAM Agri digitalise le conseil agricole pour restaurer la fertilité des sols, améliorer la productivité et reconnecter les agriculteurs à la confiance.
          </p>
        </div>

        {/* Three Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 max-w-6xl mx-auto">
          {/* Card 1 - Dépendance à la pluie */}
          <div className="bg-[#4FC3F7]/10 rounded-2xl p-6">
            <div className="bg-primary/5 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
              <Droplet className="w-6 h-6 text-[#4FC3F7]" />
            </div>
            <h3 className="text-primary font-poppins font-medium text-lg mb-2">
              Dépendance à la pluie
            </h3>
            <p className="text-gray-700 font-inter font-normal text-sm">
              95 % des terres cultivées dépendent encore des aléas climatiques.
            </p>
          </div>

          {/* Card 2 - Rendements limités */}
          <div className="bg-[#FDD835]/5 rounded-2xl p-6">
            <div className="bg-[#FDD835]/10 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-#8D6E63" />
            </div>
            <h3 className="text-primary font-poppins font-medium text-lg mb-2">
              Rendements limités
            </h3>
            <p className="text-gray-700 font-inter font-normal text-sm">
              Sans analyses de sols ni suivi digital, le potentiel agricole reste inexploité.
            </p>
          </div>

          {/* Card 3 - Pratiques agricoles non durables */}
          <div className="bg-[#81C7841A] rounded-2xl p-6">
            <div className="bg-[#81C7841A] rounded-xl w-12 h-12 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
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

