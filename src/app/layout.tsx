import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { JetBrains_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
})
const jetBrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: 'Ankit Seal - Full Stack Developer & Linux Enthusiast',
	description: 'Portfolio of Ankit Seal, a full-stack developer specializing in frontend, backend, and DevOps. View my projects, resume, and get in touch.',
	keywords: ['Ankit Seal', 'Full Stack Developer', 'Portfolio', 'Web Development', 'Linux', 'React', 'Next.js'],
	authors: [{ name: 'Ankit Seal' }],
	creator: 'Ankit Seal',
	publisher: 'Ankit Seal',
	metadataBase: new URL('https://ankitseal.in'),
	alternates: {
		canonical: 'https://ankitseal.in',
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://ankitseal.in',
		siteName: 'Ankit Seal Portfolio',
		title: 'Ankit Seal - Full Stack Developer',
		description: 'Portfolio showcasing web development projects and skills',
		images: [
			{
				url: '/pfp.webp', // Your profile picture as OG image
				width: 800,
				height: 800,
				alt: 'Ankit Seal',
			},
			`/api/og?title=${encodeURIComponent("Ankit Seal - Portfolio")}`
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ankit Seal - Full Stack Developer',
		description: 'Portfolio showcasing web development projects and skills',
		images: ['/pfp.webp'],
		creator: '@seal_ankit17027', // Add your Twitter handle if you have one
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	const personSchema = {
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Ankit Seal",
		"url": "https://ankitseal.in",
		"image": "https://ankitseal.in/pfp.webp",
		"knowsAbout": [
			"Web Development",
			"Full Stack Development",
			"React",
			"Next.js",
			"Node.js",
			"MongoDB",
			"SQL",
			"GO",
			"Linux"
		],
		"sameAs": [
			"https://github.com/ankitseal",
			"https://linkedin.com/in/ankit-seal-26358328a",
			"https://www.instagram.com/sealankit_04/",
			"https://leetcode.com/u/ankitseal/"
		],
		"jobTitle": "Full Stack Developer",
		"description": "Full-stack developer specializing in frontend, backend, and the glue that holds them together."
	};

	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "Ankit Seal Portfolio",
		"url": "https://ankitseal.in",
		"potentialAction": {
			"@type": "SearchAction",
			"target": "https://ankitseal.in/?q={search_term_string}",
			"query-input": "required name=search_term_string"
		}
	};


	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${jetBrainsMono.variable} ${inter.variable} antialiased bg-neutral-100 dark:bg-neutral-950 `}
			>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
				/>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<Analytics />
					<SpeedInsights />
				</ThemeProvider>
			</body>
		</html>
	);
}
