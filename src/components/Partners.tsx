import Image from "next/image";
import Button from "@/ui/Button";

export default function Partners() {
  return (
    <section className="py-20 bg-[#F9FAF9]">
      <div className="container mx-auto px-10">
        <div className="max-w-5xl mx-auto">
          {/* White Card with Border */}
          <div>
            {/* Main Title */}
            <h2 className="text-2xl lg:text-3xl font-poppins font-medium text-primary text-center mb-4">
              Connecté à des sources de données et institutions de confiance
            </h2>

            {/* Introductory Paragraph */}
            <p className="text-gray-600 font-inter font-normal text-base lg:text-lg text-center mb-12 max-w-3xl mx-auto">
              En partenariat avec des organisations de premier plan pour fournir une intelligence agricole fiable
            </p>

            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
              {/* Partnership Logos and Descriptions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* ANACIM */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Image
                    src="/images/anacim.png"
                    alt="ANACIM Logo"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-primary font-poppins font-medium text-lg mb-2">
                  ANACIM
                </h3>
                <p className="text-gray-600 font-inter font-normal text-sm">
                  Agence Nationale de l'Aviation Civile et de la Météorologie
                </p>
              </div>

              {/* ISRA */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Image
                    src="/images/isra.png"
                    alt="ISRA Logo"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-primary font-poppins font-medium text-lg mb-2">
                  ISRA
                </h3>
                <p className="text-gray-600 font-inter font-normal text-sm">
                  Institut Sénégalais de Recherches Agricoles
                </p>
              </div>

              {/* INP */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Image
                    src="/images/inp.png"
                    alt="INP Logo"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-primary font-poppins font-medium text-lg mb-2">
                  INP
                </h3>
                <p className="text-gray-600 font-inter font-normal text-sm">
                  Institut national de pédologie
                </p>
              </div>
            </div>

            {/* Separator Line */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* API Access Description */}
            <p className="text-gray-600 font-inter font-normal text-base lg:text-lg text-center mb-6">
              Accès API disponible pour les banques, assureurs, coopératives et institutions agricoles
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button variant="outline" className="px-8 py-3">
                Explorer la Documentation API
              </Button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

