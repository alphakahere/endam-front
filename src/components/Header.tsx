"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/ui/Button";
import { Menu, X } from "lucide-react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#F3F5F5] shadow-sm">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<nav className="flex items-center justify-between py-3">
					{/* Logo */}
					<div className="shrink-0">
						<Image
							src="/images/logo.png"
							alt="ENDAM"
							width={120}
							height={100}
							className="w-full h-full"
						/>
					</div>

					{/* Right side: Navigation Links + CTA Button */}
					<div className="hidden md:flex items-center gap-6 lg:gap-8">
						<Link
							href="#fonctionnalites"
							className="text-sm lg:text-base font-normal text-[#4A4A4A] hover:text-[#1B5E20] transition-colors font-inter"
						>
							Fonctionnalités
						</Link>
						<Link
							href="#services"
							className="text-sm lg:text-base font-normal text-[#4A4A4A] hover:text-[#1B5E20] transition-colors font-inter"
						>
							Services
						</Link>
						<Link
							href="#impact"
							className="text-sm lg:text-base font-normal text-[#4A4A4A] hover:text-[#1B5E20] transition-colors font-inter"
						>
							Impact
						</Link>
						<Link
							href="#partenaires"
							className="text-sm lg:text-base font-normal text-[#4A4A4A] hover:text-[#1B5E20] transition-colors font-inter"
						>
							Partenaires
						</Link>
						<Button>Demander une démo</Button>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="md:hidden p-2 text-[#4A4A4A] hover:text-[#1B5E20] transition-colors"
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</nav>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden border-t border-[#F3F5F5] py-4 space-y-4">
						<Link
							href="#fonctionnalites"
							onClick={() => setIsMenuOpen(false)}
							className="block text-base font-normal text-[#4A4A4A] hover:text-[#1B5E20] transition-colors font-inter py-2"
						>
							Fonctionnalités
						</Link>
						<Link
							href="#services"
							onClick={() => setIsMenuOpen(false)}
							className="block text-base font-normal text-[#4A4A4A] hover:text-[#1B5E20] transition-colors font-inter py-2"
						>
							Services
						</Link>
						<Link
							href="#impact"
							onClick={() => setIsMenuOpen(false)}
							className="block text-base font-normal text-[#4A4A4A] hover:text-[#1B5E20] transition-colors font-inter py-2"
						>
							Impact
						</Link>
						<Link
							href="#partenaires"
							onClick={() => setIsMenuOpen(false)}
							className="block text-base font-normal text-[#4A4A4A] hover:text-[#1B5E20] transition-colors font-inter py-2"
						>
							Partenaires
						</Link>
						<Button className="w-full mt-4">Demander une démo</Button>
					</div>
				)}
			</div>
		</header>
	);
}
