import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import Approach from "@/components/Approach";
import Ecosystem from "@/components/Ecosystem";
import Monitoring from "@/components/Monitoring";
import Solutions from "@/components/Solutions";
import Impact from "@/components/Impact";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className="min-h-screen bg-[#F9FAF9]">
			<Header />
			<Hero />
			<Challenge />
			<Approach />
			<Ecosystem />
			<Monitoring />
			<Solutions />
			<Impact />
			<Partners />
			<CTA />
			<Footer />
		</main>
	);
}
