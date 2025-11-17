"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { AlertTriangle, Droplet, TrendingUp, Shield } from "lucide-react";

export default function Challenge() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const cards = [
		{
			icon: Droplet,
			title: "Dépendance à la pluie",
			description: "95 % des terres cultivées dépendent encore des aléas climatiques.",
			bgColor: "bg-[#4FC3F7]/10",
			iconBg: "bg-primary/5",
			iconColor: "text-[#4FC3F7]",
		},
		{
			icon: TrendingUp,
			title: "Rendements limités",
			description:
				"Sans analyses de sols ni suivi digital, le potentiel agricole reste inexploité.",
			bgColor: "bg-[#FDD835]/5",
			iconBg: "bg-[#FDD835]/10",
			iconColor: "text-[#8D6E63]",
		},
		{
			icon: Shield,
			title: "Pratiques agricoles non durables",
			description:
				"L'absence de données fiables conduit à un usage inadapté des intrants, à la dégradation des sols et à une perte de fertilité naturelle.",
			bgColor: "bg-[#81C7841A]",
			iconBg: "bg-[#81C7841A]",
			iconColor: "text-primary",
		},
	];

	return (
		<section ref={ref} className="py-20 bg-white">
			<div className="container mx-auto px-4 sm:px-6 md:px-10">
				{/* Title Section */}
				<motion.div
					className="text-center mb-8"
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.6 }}
				>
					<motion.div
						className="flex items-center justify-center gap-2 mb-4 bg-[#FDD835]/20 rounded-3xl py-2 px-3 w-fit mx-auto"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={
							isInView
								? { opacity: 1, scale: 1 }
								: { opacity: 0, scale: 0.9 }
						}
						transition={{ duration: 0.4, delay: 0.2 }}
					>
						<AlertTriangle className="w-5 h-5 text-white" color="#FDD835" />
						<h2 className="text-xl font-inter font-normal text-[#8D6E63]">
							Le Défi
						</h2>
					</motion.div>

					{/* Challenge Description */}
					<motion.p
						className="text-primary font-inter font-normal text-base lg:text-lg max-w-4xl mx-auto mb-4"
						initial={{ opacity: 0, y: 20 }}
						animate={
							isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						L'agriculture sénégalaise souffre de pratiques inadaptées, de
						sols dégradés et d'un manque de données fiables. Résultat :
						rendements faibles et incertitude permanente.
					</motion.p>

					{/* Solution Statement */}
					<motion.p
						className="text-gray-700 font-inter font-normal text-base lg:text-lg max-w-4xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={
							isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						La Solution ENDAM Agri digitalise le conseil agricole pour
						restaurer la fertilité des sols, améliorer la productivité et
						reconnecter les agriculteurs à la confiance.
					</motion.p>
				</motion.div>

				{/* Three Problem Cards */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 max-w-6xl mx-auto"
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={{
						visible: {
							transition: {
								staggerChildren: 0.2,
								delayChildren: 0.5,
							},
						},
					}}
				>
					{cards.map((card, index) => {
						const Icon = card.icon;
						return (
							<motion.div
								key={index}
								className={`${card.bgColor} rounded-2xl p-6`}
								variants={{
									hidden: { opacity: 0, y: 50, scale: 0.95 },
									visible: {
										opacity: 1,
										y: 0,
										scale: 1,
										transition: {
											duration: 0.5,
											ease: "easeOut",
										},
									},
								}}
								whileHover={{ y: -5, scale: 1.02 }}
								transition={{ duration: 0.3 }}
							>
								<motion.div
									className={`${card.iconBg} rounded-xl w-12 h-12 flex items-center justify-center mb-4`}
									initial={{ rotate: -180, opacity: 0 }}
									animate={
										isInView
											? { rotate: 0, opacity: 1 }
											: { rotate: -180, opacity: 0 }
									}
									transition={{
										duration: 0.6,
										delay: 0.6 + index * 0.2,
									}}
								>
									<Icon
										className={`w-6 h-6 ${card.iconColor}`}
									/>
								</motion.div>
								<h3 className="text-primary font-poppins font-medium text-lg mb-2">
									{card.title}
								</h3>
								<p className="text-gray-700 font-inter font-normal text-sm">
									{card.description}
								</p>
							</motion.div>
						);
					})}
				</motion.div>

				{/* Concluding Statement */}
				<motion.div
					className="text-center mt-12"
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.6, delay: 1.1 }}
				>
					<p className="text-gray-700 font-inter font-normal text-base lg:text-lg max-w-4xl mx-auto">
						Avec ENDAM Agri, les producteurs passent d'une agriculture
						épuisante à une agriculture régénératrice, fondée sur les
						données, la performance et le respect des écosystèmes.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
