import Button from "@/ui/Button";
import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-primary/10 to-black/5 ">
      <div className="py-20 flex items-center justify-between container mx-auto px-10">
     <div className="lg:w-1/2">
        <div className="flex items-center gap-2 bg-white rounded-3xl w-min px-2 py-1">
          <Zap className="w-5 h-5 text-[#FDD835]"/> 
          <span className="whitespace-nowrap text-sm text-primary font-inter font-normal">Propulsé par l'IA & les données satellitaires</span>
        </div>
        <h1 className="text-lg lg:text-xl font-poppins font-medium text-primary my-4">
        Transformez l'incertitude en productivité et prospérité
        </h1>
        <p className="text-gray-700 font-inter font-normal text-base mb-4">ENDAM Agri offre aux agriculteurs et institutions des données en temps réel, des analyses IA et des recommandations intelligentes pour augmenter les rendements et réduire les risques.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="flex items-center gap-2">
          Exprimer vos besoins
            <ArrowRight />
          </Button>
          <Button variant="outline">
          Découvrir la plateforme
          </Button>
        </div>
      </div>
        <div className="lg:w-1/2 flex justify-end">
          <div className="relative" style={{ width: '551px' }}>
            <Image src="/images/hero.png"
              alt="Hero Image"
              width={551}
              height={368}
              className="rounded-3xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 flex items-center gap-2">
              <div className="bg-[#81C784] w-12 h-12 rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M16.5059 7.22168H22.6956V13.4115" stroke="white" stroke-width="2.06326" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M22.6951 7.22168L13.9262 15.9905L8.76809 10.8324L2.0625 17.538" stroke="white" stroke-width="2.06326" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col">
                <p className="text-primary font-inter font-normal text-sm">+30% Rendement</p>
                <p className="text-gray-700 font-inter font-normal text-xs">Augmentation moyenne</p>
              </div>
            </div>
          </div>
      </div>
     </div>
    </section>
  );
}

