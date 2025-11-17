"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { CheckCircle, Leaf, TrendingUp } from "lucide-react";

export default function Impact() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const kpiCards = [
		{
			value: "+30%",
			description: "Augmentation moyenne du rendement",
			fontStyle: "font-inter",
		},
		{ value: "55+", description: "Agriculteurs accompagnés", fontStyle: "font-inter" },
		{
			value: "100%",
			description: "Données certifiées pour les banques",
			fontStyle: "font-inter",
		},
		{
			value: "-40%",
			description: "Utilisation pesticides & eau",
			fontStyle: "font-poppins font-bold",
		},
	];

	const pillars = [
		{
			icon: CheckCircle,
			title: "Décisions Basées sur les Données",
			description:
				"Les agriculteurs prennent des décisions éclairées basées sur des informations en temps réel",
			bgColor: "bg-[#FDD835]",
			iconColor: "text-primary",
		},
		{
			icon: Leaf,
			title: "Pratiques Durables",
			description: "Impact environnemental réduit grâce à l'agriculture de précision",
			bgColor: "bg-[#81C784]",
			iconColor: "text-white",
		},
		{
			icon: TrendingUp,
			title: "Croissance Économique",
			description: "Augmentation des revenus et accès aux services financiers",
			bgColor: "bg-[#FDD835]",
			iconColor: "text-primary",
		},
	];

	return (
		<section ref={ref} className="py-20 relative overflow-hidden">
			{/* Background Image with Gradient Overlay */}
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: "url(/images/impact.png)",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			<div className="absolute inset-0 bg-linear-to-b from-[#1B5E20]/70 to-[#4FC3F7]/70 z-0" />

			<div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
				{/* Header Section */}
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.6 }}
				>
					<motion.h2
						className="text-2xl lg:text-3xl font-poppins font-medium text-white mb-4"
						initial={{ opacity: 0, y: 20 }}
						animate={
							isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Impact mesurable sur la productivité et la durabilité
					</motion.h2>
					<motion.p
						className="text-white/90 font-inter font-normal text-base lg:text-lg max-w-4xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={
							isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						Résultats concrets auprès des agriculteurs et institutions au
						Sénégal et en Afrique de l'Ouest
					</motion.p>
				</motion.div>

				{/* Four KPI Cards */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto"
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={{
						visible: {
							transition: {
								staggerChildren: 0.15,
								delayChildren: 0.4,
							},
						},
					}}
				>
					{kpiCards.map((card, index) => (
						<motion.div
							key={index}
							className="bg-linear-to-b from-[#1B5E20] to-[#4FC3F7] rounded-2xl p-6 shadow-lg text-white"
							variants={{
								hidden: { opacity: 0, y: 50, scale: 0.9 },
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
							whileHover={{ y: -5, scale: 1.05 }}
							transition={{ duration: 0.3 }}
						>
							<motion.div
								className={`text-base text-center ${card.fontStyle} mb-2`}
								initial={{ scale: 0 }}
								animate={isInView ? { scale: 1 } : { scale: 0 }}
								transition={{
									type: "spring",
									stiffness: 200,
									damping: 15,
									delay: 0.5 + index * 0.15,
								}}
							>
								{card.value}
							</motion.div>
							<p className="text-center font-inter font-normal text-sm">
								{card.description}
							</p>
						</motion.div>
					))}
				</motion.div>

				{/* Bottom Section: Pillars of Impact */}
				<motion.div
					className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl max-w-6xl mx-auto"
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.8, delay: 1 }}
				>
					<motion.div
						className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
						{pillars.map((pillar, index) => {
							const Icon = pillar.icon;
							return (
								<motion.div
									key={index}
									className="text-center"
									variants={{
										hidden: { opacity: 0, y: 30 },
										visible: {
											opacity: 1,
											y: 0,
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
										className={`${pillar.bgColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}
										initial={{ rotate: -180, scale: 0 }}
										animate={
											isInView
												? { rotate: 0, scale: 1 }
												: { rotate: -180, scale: 0 }
										}
										transition={{
											duration: 0.6,
											delay: 1.3 + index * 0.2,
										}}
									>
										<Icon
											className={`w-8 h-8 ${pillar.iconColor}`}
										/>
									</motion.div>
									<h3 className="text-primary font-poppins font-medium text-lg mb-2">
										{pillar.title}
									</h3>
									<p className="text-gray-700 font-inter font-normal text-sm">
										{pillar.description}
									</p>
								</motion.div>
							);
						})}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
