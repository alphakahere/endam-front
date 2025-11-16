import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "ENDAM - Agriculture Intelligente",
	description:
		"Transformez vos opérations agricoles avec des insights basés sur les données et des recommandations IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en">
		  <body className={`${inter.variable} antialiased font-sans`}>
				{children}
			</body>
		</html>
  );
}
