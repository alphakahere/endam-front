"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Leaf, Microscope, UserCheck, Sprout, FileText, Timer } from "lucide-react";

export default function Solutions() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const solutions = [
		{
			icon: Microscope,
			title: "Diagnostic agronomique digital",
		},
		{
			icon: UserCheck,
			title: "Conseil et suivi sur mesure",
		},
		{
			icon: Sprout,
			title: "Accompagnement des projets de régénération des sols",
		},
		{
			icon: FileText,
			title: "Biostimulants naturels à base de microbiotes",
			colStart: "md:col-start-1",
		},
		{
			icon: Timer,
			title: "Accélérateur de maturation de compost",
			colStart: "md:col-start-2",
		},
	];

	return (
		<section ref={ref} className="py-20 bg-white">
			<div className="container mx-auto px-4 sm:px-6 md:px-10">
				{/* Header Section */}
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.6 }}
				>
					{/* Badge */}
					<motion.div
						className="flex items-center justify-center gap-2 mb-4"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={
							isInView
								? { opacity: 1, scale: 1 }
								: { opacity: 0, scale: 0.9 }
						}
						transition={{ duration: 0.4, delay: 0.2 }}
					>
						<div className="bg-[#C8E6C9] rounded-full px-6 py-2 flex items-center gap-2">
							<Leaf className="w-4 h-4 text-primary" />
							<span className="text-primary font-inter font-normal text-sm">
								Nos Solutions
							</span>
						</div>
					</motion.div>

					{/* Subtitle */}
					<motion.p
						className="text-gray-600 font-inter font-normal text-sm mb-2"
						initial={{ opacity: 0, y: 20 }}
						animate={
							isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						Nos Services / Produits
					</motion.p>

					{/* Main Description */}
					<motion.p
						className="text-gray-700 font-inter font-normal text-base lg:text-lg max-w-3xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={
							isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						Des solutions complètes pour accompagner la transformation
						agricole et la régénération des sols
					</motion.p>
				</motion.div>

				{/* Service/Product Cards Grid */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12"
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={{
						visible: {
							transition: {
								staggerChildren: 0.15,
								delayChildren: 0.5,
							},
						},
					}}
				>
					{solutions.map((solution, index) => {
						const Icon = solution.icon;
						return (
							<motion.div
								key={index}
								className={`bg-white rounded-3xl p-6 shadow-sm ${
									solution.colStart || ""
								}`}
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
									className="bg-linear-to-b from-[#1B5E20] to-[#4FC3F7] rounded-xl w-16 h-16 flex items-center justify-center mb-4 mx-auto"
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
										type: "spring",
										stiffness: 200,
										damping: 15,
										delay: 0.6 + index * 0.15,
									}}
								>
									<Icon className="w-8 h-8 text-white" />
								</motion.div>
								<p className="text-gray-700 font-inter font-normal text-base text-center">
									{solution.title}
								</p>
							</motion.div>
						);
					})}
				</motion.div>

				{/* Concluding Statement */}
				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.6, delay: 1.2 }}
				>
					<p className="text-gray-700 font-inter font-normal text-base lg:text-lg max-w-4xl mx-auto">
						Chaque service est conçu pour maximiser la productivité agricole
						tout en préservant et restaurant l'équilibre naturel des
						écosystèmes.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
