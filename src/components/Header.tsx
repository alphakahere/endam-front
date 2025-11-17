"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/ui/Button";
import { Menu, X } from "lucide-react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ href: "#fonctionnalites", label: "Fonctionnalités" },
		{ href: "#services", label: "Services" },
		{ href: "#impact", label: "Impact" },
		{ href: "#partenaires", label: "Partenaires" },
	];

	return (
		<motion.header
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className={`sticky top-0 z-50 border-b shadow-sm transition-all duration-300 ${
				isScrolled
					? "bg-white/98 backdrop-blur-md border-[#F3F5F5] shadow-md"
					: "bg-white/95 backdrop-blur-sm border-[#F3F5F5] shadow-sm"
			}`}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<nav className="flex items-center justify-between py-3">
					{/* Logo with animation */}
					<motion.div
						className="shrink-0"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: 0.2 }}
						whileHover={{ scale: 1.05 }}
					>
						<Image
							src="/images/logo.png"
							alt="ENDAM"
							width={120}
							height={100}
							className="w-full h-full"
						/>
					</motion.div>

					{/* Desktop Navigation Links with stagger */}
					<div className="hidden md:flex items-center gap-6 lg:gap-8">
						{navLinks.map((link, index) => (
							<motion.div
								key={link.href}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
							>
								<Link
									href={link.href}
									className="text-sm lg:text-base font-normal text-[#4A4A4A] hover:text-[#1B5E20] transition-colors font-inter relative group"
								>
									{link.label}
									<motion.span
										className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1B5E20] group-hover:w-full transition-all duration-300"
										initial={false}
									/>
								</Link>
							</motion.div>
						))}

						{/* CTA Button with animation */}
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.4, delay: 0.7 }}
						>
							<Button>Demander une démo</Button>
						</motion.div>
					</div>

					{/* Mobile Menu Button with animation */}
					<motion.button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="md:hidden p-2 text-[#4A4A4A] hover:text-[#1B5E20] transition-colors"
						aria-label="Toggle menu"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.3, delay: 0.2 }}
						whileTap={{ scale: 0.95 }}
					>
						<AnimatePresence mode="wait">
							{isMenuOpen ? (
								<motion.div
									key="close"
									initial={{ rotate: -90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: 90, opacity: 0 }}
									transition={{ duration: 0.2 }}
								>
									<X size={24} />
								</motion.div>
							) : (
								<motion.div
									key="menu"
									initial={{ rotate: 90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: -90, opacity: 0 }}
									transition={{ duration: 0.2 }}
								>
									<Menu size={24} />
								</motion.div>
							)}
						</AnimatePresence>
					</motion.button>
				</nav>

				{/* Mobile Menu with slide animation */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className="md:hidden overflow-hidden border-t border-[#F3F5F5]"
						>
							<motion.div
								className="py-4 space-y-2"
								initial="closed"
								animate="open"
								exit="closed"
								variants={{
									open: {
										transition: { staggerChildren: 0.1, delayChildren: 0.1 },
									},
									closed: {
										transition: { staggerChildren: 0.05, staggerDirection: -1 },
									},
								}}
							>
								{navLinks.map((link) => (
									<motion.div
										key={link.href}
										variants={{
											open: {
												opacity: 1,
												x: 0,
												transition: { duration: 0.3 },
											},
											closed: {
												opacity: 0,
												x: -20,
												transition: { duration: 0.2 },
											},
										}}
									>
										<Link
											href={link.href}
											onClick={() => setIsMenuOpen(false)}
											className="block text-base font-normal text-[#4A4A4A] hover:text-[#1B5E20] transition-colors font-inter py-2"
										>
											{link.label}
										</Link>
									</motion.div>
								))}
								<motion.div
									variants={{
										open: {
											opacity: 1,
											y: 0,
											transition: { duration: 0.3, delay: 0.4 },
										},
										closed: {
											opacity: 0,
											y: 20,
											transition: { duration: 0.2 },
										},
									}}
								>
									<Button className="w-full mt-4">Demander une démo</Button>
								</motion.div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.header>
	);
}
