"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Zap, Database, Activity, Brain } from "lucide-react";
import Image from "next/image";

export default function Approach() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const phoneImages = [
		{
			src: "/images/app-screen1.png",
			alt: "Application mobile - Collecte de données",
		},
		{
			src: "/images/app-screen2.png",
			alt: "Application mobile - Tableau de bord",
		},
		{
			src: "/images/app-screen3.png",
			alt: "Application mobile - Carte",
		},
	];

	const featureBoxes = [
		{
			icon: Database,
			title: "Analyse",
			description: "Données agronomiques",
			bgColor: "bg-[#81C7841A]",
		},
		{
			icon: Brain,
			title: "Conseils",
			description: "Personnalisés et adaptés",
			bgColor: "bg-[#FDD8351A]",
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
						<div className="bg-[#FDD835]/20 rounded-3xl px-4 py-2 flex items-center gap-2">
							<Zap className="w-5 h-5 text-primary" />
							<span className="text-[#8D6E63] font-inter font-normal text-xl">
								Notre Approche
							</span>
						</div>
					</motion.div>
					<motion.h2
						className="text-base font-poppins font-normal text-primary"
						initial={{ opacity: 0, y: 20 }}
						animate={
							isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						Comment ça marche ?
					</motion.h2>
				</motion.div>

				{/* Two Column Layout */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
					{/* Left Column */}
					<motion.div
						className="flex flex-col gap-6"
						initial={{ opacity: 0, x: -50 }}
						animate={
							isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
						}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						{/* Top Gradient Box */}
						<motion.div
							className="bg-linear-to-b from-[#1B5E20] to-[#81C784] rounded-2xl p-8 text-white"
							initial={{ opacity: 0, y: 30 }}
							animate={
								isInView
									? { opacity: 1, y: 0 }
									: { opacity: 0, y: 30 }
							}
							transition={{ duration: 0.6, delay: 0.5 }}
							whileHover={{ scale: 1.02, y: -5 }}
						>
							<h3 className="text-xl lg:text-2xl font-poppins font-medium mb-4">
								Une solution complète pour sortir de l'incertitude
							</h3>
							<p className="font-inter font-normal text-base lg:text-lg">
								Endam Agri permet aux petits producteurs africains
								de sortir de l'incertitude en combinant conseil
								agricole digitalisé et solutions biologiques
								innovantes.
							</p>
						</motion.div>

						{/* Bottom White Box */}
						<motion.div
							className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
							initial={{ opacity: 0, y: 30 }}
							animate={
								isInView
									? { opacity: 1, y: 0 }
									: { opacity: 0, y: 30 }
							}
							transition={{ duration: 0.6, delay: 0.7 }}
							whileHover={{ scale: 1.02, y: -5 }}
						>
							<div className="flex items-start gap-4">
								<motion.div
									className="bg-[#FDD835] rounded-full w-12 h-12 flex items-center justify-center shrink-0"
									initial={{ rotate: -180, scale: 0 }}
									animate={
										isInView
											? { rotate: 0, scale: 1 }
											: { rotate: -180, scale: 0 }
									}
									transition={{ duration: 0.6, delay: 0.8 }}
								>
									<Activity className="w-6 h-6 text-primary" />
								</motion.div>
								<div>
									<h3 className="text-primary font-poppins font-medium text-lg mb-3">
										Un processus simple et efficace
									</h3>
									<p className="text-gray-700 font-inter font-normal text-base leading-relaxed">
										Nos agents collectent des données
										agronomiques directement sur le terrain
										et le producteur reçoit des conseils
										personnalisés sur les bonnes pratiques
										agricoles et un itinéraire technique
										dynamique adaptés à sa parcelle : quoi
										semer, quand, quels dosages et comment
										régénérer son sol grâce à des
										biostimulants et biofertilisants
										naturels.
									</p>
								</div>
							</div>
						</motion.div>
					</motion.div>

					{/* Right Column */}
					<motion.div
						className="flex flex-col gap-6"
						initial={{ opacity: 0, x: 50 }}
						animate={
							isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
						}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						{/* Three Phone Mockups */}
						<motion.div
							className="flex items-center justify-center gap-4"
							initial="hidden"
							animate={isInView ? "visible" : "hidden"}
							variants={{
								visible: {
									transition: {
										staggerChildren: 0.2,
										delayChildren: 0.6,
									},
								},
							}}
						>
							{phoneImages.map((phone, index) => (
								<motion.div
									key={index}
									variants={{
										hidden: {
											opacity: 0,
											y: 50,
											scale: 0.9,
										},
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
									whileHover={{
										y: -10,
										scale: 1.05,
										zIndex: 10,
									}}
									transition={{ duration: 0.3 }}
								>
									<Image
										src={phone.src}
										alt={phone.alt}
										width={180}
										height={320}
										className="w-full h-auto object-cover rounded-2xl"
									/>
								</motion.div>
							))}
						</motion.div>

						{/* Bottom Feature Boxes */}
						<motion.div
							className="grid grid-cols-2 gap-4"
							initial="hidden"
							animate={isInView ? "visible" : "hidden"}
							variants={{
								visible: {
									transition: {
										staggerChildren: 0.2,
										delayChildren: 1.2,
									},
								},
							}}
						>
							{featureBoxes.map((box, index) => {
								const Icon = box.icon;
								return (
									<motion.div
										key={index}
										className={`${box.bgColor} rounded-2xl p-6`}
										variants={{
											hidden: {
												opacity: 0,
												scale: 0.9,
												y: 30,
											},
											visible: {
												opacity: 1,
												scale: 1,
												y: 0,
												transition: {
													duration: 0.5,
													ease: "easeOut",
												},
											},
										}}
										whileHover={{ y: -5, scale: 1.05 }}
										transition={{ duration: 0.3 }}
									>
										<motion.div
											initial={{
												rotate: -90,
												opacity: 0,
											}}
											animate={
												isInView
													? {
															rotate: 0,
															opacity: 1,
													  }
													: {
															rotate: -90,
															opacity: 0,
													  }
											}
											transition={{
												duration: 0.5,
												delay: 1.3 + index * 0.2,
											}}
										>
											<Icon className="w-10 h-10 text-primary mb-2" />
										</motion.div>
										<h4 className="text-primary font-poppins font-medium text-xl mb-2">
											{box.title}
										</h4>
										<p className="text-gray-700 font-inter font-normal text-base">
											{box.description}
										</p>
									</motion.div>
								);
							})}
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
