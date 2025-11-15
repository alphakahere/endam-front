import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Statistics from "@/components/Statistics";
import CTA from "@/components/CTA";

export default function Home() {
	return (
		<main className="min-h-screen bg-[#F9FAF9]">
			<Header />
			<Hero />
			<Features />
			<Statistics />
			<CTA />
		</main>
	);
}
