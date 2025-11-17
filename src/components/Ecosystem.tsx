"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Smartphone, Grid3x3, BarChart3 } from "lucide-react";

export default function Ecosystem() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const cards = [
		{
			icon: Smartphone,
			description: "Application mobile : collecte de données terrain offline et online",
		},
		{
			icon: Grid3x3,
			description: "Interface web : Recommandations personnalisées à temps réel",
		},
		{
			icon: BarChart3,
			description: "Décideur : modélisation prédictive pour planification stratégique",
		},
	];

	return (
		<section ref={ref} className="py-20 bg-[#F9FAF9]">
			<div className="container mx-auto px-4 sm:px-6 md:px-10">
				{/* Header Section */}
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.6 }}
				>
					<motion.h2
						className="text-2xl lg:text-3xl font-poppins font-medium text-primary mb-4"
						initial={{ opacity: 0, y: 20 }}
						animate={
							isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Un écosystème complet pour collecter, analyser et agir
					</motion.h2>
					<motion.p
						className="text-gray-700 font-inter font-normal text-base lg:text-lg max-w-4xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={
							isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						Trois interfaces puissantes travaillant ensemble pour
						transformer les données agricoles en analyses exploitables
					</motion.p>
				</motion.div>

				{/* Three Feature Cards */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={{
						visible: {
							transition: {
								staggerChildren: 0.2,
								delayChildren: 0.4,
							},
						},
					}}
				>
					{cards.map((card, index) => {
						const Icon = card.icon;
						return (
							<motion.div
								key={index}
								className="bg-white rounded-2xl p-6 shadow-sm"
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
								whileHover={{ y: -5, scale: 1.02, shadow: "lg" }}
								transition={{ duration: 0.3 }}
							>
								<motion.div
									className="bg-linear-to-b from-[#1B5E20] to-[#4FC3F7] rounded-xl w-16 h-16 flex items-center justify-center mb-4"
									initial={{
										rotate: -180,
										opacity: 0,
										scale: 0,
									}}
									animate={
										isInView
											? {
													rotate: 0,
													opacity: 1,
													scale: 1,
											  }
											: {
													rotate: -180,
													opacity: 0,
													scale: 0,
											  }
									}
									transition={{
										duration: 0.6,
										delay: 0.5 + index * 0.2,
									}}
								>
									<Icon className="w-8 h-8 text-white" />
								</motion.div>
								<p className="text-gray-700 font-inter font-normal text-base">
									{card.description}
								</p>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
