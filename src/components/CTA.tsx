"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Button from "@/ui/Button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
			{/* Background Image */}
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: "url(/images/cta.jpg)",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			{/* Overlay for better text readability */}
			<div className="absolute inset-0 bg-black/40 z-0" />

			<div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
				<motion.div
					className="max-w-4xl mx-auto text-center"
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.8 }}
				>
					{/* Main Title */}
					<motion.h2
						className="text-3xl lg:text-5xl font-poppins font-bold text-white mb-6"
						initial={{ opacity: 0, y: 30 }}
						animate={
							isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
						}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						Rejoignez la révolution de l'agriculture intelligente
					</motion.h2>

					{/* Subtitle */}
					<motion.p
						className="text-white/90 font-inter font-normal text-lg lg:text-xl mb-10 max-w-3xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={
							isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						Transformez vos opérations agricoles avec des insights basés sur
						les données et des recommandations IA
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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
						<motion.div
							variants={{
								hidden: { opacity: 0, y: 30, scale: 0.9 },
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
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							<Button
								variant="outline"
								className="!bg-white !text-primary !border-white hover:!bg-white/90 flex items-center gap-2 px-8 py-3"
							>
								Demander une démo
								<ArrowRight className="w-5 h-5" />
							</Button>
						</motion.div>
						<motion.div
							variants={{
								hidden: { opacity: 0, y: 30, scale: 0.9 },
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
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							<Button
								variant="outline"
								className="!bg-white !text-primary !border-white hover:!bg-white/90 px-8 py-3"
							>
								Devenir Partenaire
							</Button>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
