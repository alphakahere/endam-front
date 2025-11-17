import Button from "@/ui/Button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="relative overflow-hidden bg-linear-to-r from-primary/10 to-black/5">
			<div className="py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 gap-8 lg:gap-6">
				<div className="w-full lg:w-1/2 order-2 lg:order-1">
					<div className="flex items-center gap-2 bg-white rounded-2xl sm:rounded-3xl w-full sm:w-min px-2 sm:px-3 py-1.5 sm:py-1 mb-4 sm:mb-0">
						<Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDD835] shrink-0" />
						<span className="text-xs sm:text-sm text-primary font-inter font-normal break-words sm:whitespace-nowrap">
							Propulsé par l'IA & les données satellitaires
						</span>
					</div>
					<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins font-medium text-primary my-4 sm:my-5 md:my-6">
						Transformez l'incertitude en productivité et prospérité
					</h1>
					<p className="text-sm sm:text-base text-gray-700 font-inter font-normal mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
						ENDAM Agri offre aux agriculteurs et institutions des données en
						temps réel, des analyses IA et des recommandations intelligentes
						pour augmenter les rendements et réduire les risques.
					</p>
					<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
						<Button className="flex items-center justify-center gap-2 text-xs sm:text-sm w-full sm:w-auto">
							Exprimer vos besoins
							<ArrowRight className="w-4 h-4" />
						</Button>
						<Button
							variant="outline"
							className="text-xs sm:text-sm w-full sm:w-auto"
						>
							Découvrir la plateforme
						</Button>
					</div>
				</div>
				<div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
					<div className="relative w-full sm:max-w-[400px] md:max-w-[800px] lg:max-w-[551px]">
						<div className="relative w-full aspect-[551/368]">
							<Image
								src="/images/hero.png"
								alt="Hero Image"
								fill
								sizes="(max-width: 640px) 100vw, (max-width: 768px) 400px, (max-width: 1024px) 500px, 551px"
								className="rounded-2xl sm:rounded-3xl object-cover"
							/>
						</div>
						{/* Bottom Left Badge */}
						<div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 flex items-center gap-1.5 sm:gap-2 shadow-lg z-10">
							<div className="bg-[#81C784] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
								<TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
							</div>
							<div className="flex flex-col min-w-0">
								<p className="text-primary font-inter font-normal text-xs sm:text-sm truncate">
									+30% Rendement
								</p>
								<p className="text-gray-700 font-inter font-normal text-[10px] sm:text-xs hidden sm:block">
									Augmentation moyenne
								</p>
								<p className="text-gray-700 font-inter font-normal text-[10px] sm:hidden truncate">
									Augm. moyenne
								</p>
							</div>
						</div>
						{/* Top Right Badge */}
						<div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 flex items-center gap-1.5 sm:gap-2 shadow-lg z-10">
							<div className="bg-[#4FC3F7] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
								<Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
							</div>
							<div className="flex flex-col min-w-0">
								<p className="text-primary font-inter font-normal text-xs sm:text-sm">
									55+
								</p>
								<p className="text-gray-700 font-inter font-normal text-[10px] sm:text-xs hidden sm:block">
									Agriculteurs accompagnés
								</p>
								<p className="text-gray-700 font-inter font-normal text-[10px] sm:hidden truncate">
									Agriculteurs
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

