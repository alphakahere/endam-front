"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Button from "@/ui/Button";

export default function Partners() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const partners = [
		{
			logo: "/images/anacim.png",
			name: "ANACIM",
			description: "Agence Nationale de l'Aviation Civile et de la Météorologie",
		},
		{
			logo: "/images/isra.png",
			name: "ISRA",
			description: "Institut Sénégalais de Recherches Agricoles",
		},
		{
			logo: "/images/inp.png",
			name: "INP",
			description: "Institut national de pédologie",
		},
	];

	return (
		<section ref={ref} className="py-20 bg-[#F9FAF9]">
			<div className="container mx-auto px-4 sm:px-6 md:px-10">
				<div className="max-w-5xl mx-auto">
					{/* White Card with Border */}
					<div>
						{/* Main Title */}
						<motion.h2
							className="text-2xl lg:text-3xl font-poppins font-medium text-primary text-center mb-4"
							initial={{ opacity: 0, y: 30 }}
							animate={
								isInView
									? { opacity: 1, y: 0 }
									: { opacity: 0, y: 30 }
							}
							transition={{ duration: 0.6 }}
						>
							Connecté à des sources de données et institutions de
							confiance
						</motion.h2>

						{/* Introductory Paragraph */}
						<motion.p
							className="text-gray-600 font-inter font-normal text-base lg:text-lg text-center mb-12 max-w-3xl mx-auto"
							initial={{ opacity: 0, y: 20 }}
							animate={
								isInView
									? { opacity: 1, y: 0 }
									: { opacity: 0, y: 20 }
							}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							En partenariat avec des organisations de premier plan pour
							fournir une intelligence agricole fiable
						</motion.p>

						<motion.div
							className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg"
							initial={{ opacity: 0, y: 50, scale: 0.95 }}
							animate={
								isInView
									? { opacity: 1, y: 0, scale: 1 }
									: { opacity: 0, y: 50, scale: 0.95 }
							}
							transition={{ duration: 0.8, delay: 0.3 }}
						>
							{/* Partnership Logos and Descriptions */}
							<motion.div
								className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
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
								{partners.map((partner, index) => (
									<motion.div
										key={index}
										className="text-center"
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
										whileHover={{ y: -5, scale: 1.05 }}
										transition={{ duration: 0.3 }}
									>
										<motion.div
											className="mb-4 flex justify-center"
											initial={{
												scale: 0,
												rotate: -180,
											}}
											animate={
												isInView
													? {
															scale: 1,
															rotate: 0,
													  }
													: {
															scale: 0,
															rotate: -180,
													  }
											}
											transition={{
												type: "spring",
												stiffness: 200,
												damping: 15,
												delay: 0.6 + index * 0.2,
											}}
										>
											<Image
												src={partner.logo}
												alt={`${partner.name} Logo`}
												width={120}
												height={120}
												className="object-contain"
											/>
										</motion.div>
										<h3 className="text-primary font-poppins font-medium text-lg mb-2">
											{partner.name}
										</h3>
										<p className="text-gray-600 font-inter font-normal text-sm">
											{partner.description}
										</p>
									</motion.div>
								))}
							</motion.div>

							{/* Separator Line */}
							<motion.div
								className="border-t border-gray-200 my-8"
								initial={{ scaleX: 0 }}
								animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
								transition={{ duration: 0.6, delay: 1.1 }}
							/>

							{/* API Access Description */}
							<motion.p
								className="text-gray-600 font-inter font-normal text-base lg:text-lg text-center mb-6"
								initial={{ opacity: 0, y: 20 }}
								animate={
									isInView
										? { opacity: 1, y: 0 }
										: { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.6, delay: 1.2 }}
							>
								Accès API disponible pour les banques, assureurs,
								coopératives et institutions agricoles
							</motion.p>

							{/* CTA Button */}
							<motion.div
								className="flex justify-center"
								initial={{ opacity: 0, scale: 0.9 }}
								animate={
									isInView
										? { opacity: 1, scale: 1 }
										: { opacity: 0, scale: 0.9 }
								}
								transition={{ duration: 0.5, delay: 1.3 }}
							>
								<motion.div
									whileHover={{ scale: 1.05, y: -2 }}
									whileTap={{ scale: 0.95 }}
								>
									<Button
										variant="outline"
										className="px-8 py-3"
									>
										Explorer la Documentation API
									</Button>
								</motion.div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
