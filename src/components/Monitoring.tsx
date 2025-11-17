"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { MapPin, Camera, AlertTriangle, CheckCircle, Leaf, Brain } from "lucide-react";
import Image from "next/image";

export default function Monitoring() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const steps = [
		{
			icon: MapPin,
			step: "Step 1",
			title: "Cartographie & Configuration",
			description:
				"Cartographie des limites GPS avec géolocalisation précise et identification des parcelles.",
		},
		{
			icon: Camera,
			step: "Step 2",
			title: "Suivi Phénologique",
			description:
				"Analyse d'images par IA pour suivre les stades de croissance et les patterns de développement des cultures.",
		},
		{
			icon: AlertTriangle,
			step: "Step 3",
			title: "Détection d'Anomalies",
			description:
				"Détection précoce des maladies, carences nutritives et stress hydrique grâce aux données satellitaires et terrain.",
		},
		{
			icon: CheckCircle,
			step: "Step 4",
			title: "Recommandations Personnalisées",
			description:
				"Conseils agronomiques contextualisés adaptés aux conditions uniques de chaque parcelle.",
		},
	];

	return (
		<section ref={ref} className="py-20 bg-white">
			<div className="container mx-auto px-4 sm:px-6 md:px-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
					{/* Left Column - Text and Features */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={
							isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
						}
						transition={{ duration: 0.8 }}
					>
						{/* Header Badge */}
						<motion.div
							className="flex items-center gap-2 bg-[#E3F2FD] rounded-2xl w-min px-4 py-2 mb-6 shadow-sm shrink-0"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={
								isInView
									? { opacity: 1, scale: 1 }
									: { opacity: 0, scale: 0.9 }
							}
							transition={{ duration: 0.4, delay: 0.2 }}
						>
							<Brain className="w-5 h-5 text-[#64B5F6]" />
							<span className="text-gray-700 font-inter font-normal text-sm whitespace-nowrap">
								Propulsé par l'IA
							</span>
						</motion.div>

						{/* Main Title */}
						<motion.h2
							className="text-2xl lg:text-3xl font-poppins font-medium text-primary mb-4"
							initial={{ opacity: 0, y: 20 }}
							animate={
								isInView
									? { opacity: 1, y: 0 }
									: { opacity: 0, y: 20 }
							}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							Suivi intelligent et traçable des cultures pour chaque
							parcelle
						</motion.h2>

						{/* Description */}
						<motion.p
							className="text-gray-700 font-inter font-normal text-base lg:text-lg mb-8"
							initial={{ opacity: 0, y: 20 }}
							animate={
								isInView
									? { opacity: 1, y: 0 }
									: { opacity: 0, y: 20 }
							}
							transition={{ duration: 0.6, delay: 0.4 }}
						>
							De la cartographie du champ à la récolte, nous offrons une
							traçabilité complète et des recommandations intelligentes
							à chaque stade de croissance.
						</motion.p>

						{/* Four Steps */}
						<motion.div
							className="space-y-6"
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
							{steps.map((stepItem, index) => {
								const Icon = stepItem.icon;
								return (
									<motion.div
										key={index}
										className="flex gap-4"
										variants={{
											hidden: { opacity: 0, x: -30 },
											visible: {
												opacity: 1,
												x: 0,
												transition: {
													duration: 0.5,
													ease: "easeOut",
												},
											},
										}}
										whileHover={{ x: 5 }}
										transition={{ duration: 0.3 }}
									>
										<div className="relative shrink-0">
											<motion.div
												className="bg-linear-to-b from-[#1B5E20] to-[#4FC3F7] rounded-full w-14 h-14 flex items-center justify-center border-2 border-[#C8E6C9]"
												initial={{
													rotate: -180,
													scale: 0,
												}}
												animate={
													isInView
														? {
																rotate: 0,
																scale: 1,
														  }
														: {
																rotate: -180,
																scale: 0,
														  }
												}
												transition={{
													type: "spring",
													stiffness: 200,
													damping: 15,
													delay:
														0.6 +
														index * 0.15,
												}}
											>
												{stepItem.icon ===
												MapPin ? (
													<div className="relative w-6 h-6 flex items-center justify-center">
														<Icon className="w-4 h-4 text-white absolute" />
													</div>
												) : (
													<Icon className="w-6 h-6 text-white" />
												)}
											</motion.div>
										</div>
										<div>
											<div className="flex flex-col gap-2 mb-1">
												<span className="text-gray-400 font-inter font-normal text-sm">
													{stepItem.step}
												</span>
												<h3 className="text-primary font-poppins font-medium text-lg">
													{stepItem.title}
												</h3>
											</div>
											<p className="text-gray-700 font-inter font-normal text-sm">
												{stepItem.description}
											</p>
										</div>
									</motion.div>
								);
							})}
						</motion.div>
					</motion.div>

					{/* Right Column - Image */}
					<motion.div
						className="relative"
						initial={{ opacity: 0, x: 50 }}
						animate={
							isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
						}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<motion.div
							className="relative rounded-3xl overflow-hidden"
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							<Image
								src="/images/corn.png"
								alt="Corn field"
								width={600}
								height={800}
								className="w-full h-auto object-cover"
							/>
							{/* Overlay Badge */}
							<motion.div
								className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-lg max-w-[200px]"
								initial={{ opacity: 0, y: 20, scale: 0.9 }}
								animate={
									isInView
										? { opacity: 1, y: 0, scale: 1 }
										: { opacity: 0, y: 20, scale: 0.9 }
								}
								transition={{ duration: 0.6, delay: 1.1 }}
								whileHover={{ scale: 1.05, y: -5 }}
							>
								<div className="flex items-center gap-2 mb-2">
									<Leaf className="w-5 h-5 text-primary" />
									<span className="text-gray-700 font-inter font-normal text-sm">
										100% Numérique
									</span>
								</div>
								<p className="text-gray-500 font-inter font-normal text-xs">
									Rapport de Traçabilité
								</p>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
