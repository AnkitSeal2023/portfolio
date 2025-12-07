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
	title: {
		default: 'Ankit Seal - Full Stack Developer & Software Engineer',
		template: '%s | Ankit Seal'
	},
	description: 'Portfolio of Ankit Seal, a full-stack developer specializing in React, Next.js, TypeScript, Node.js, and DevOps. Explore innovative projects, technical expertise, and digital solutions.',
	keywords: [
		'Ankit Seal',
		'Full Stack Developer',
		'Portfolio',
		'Web Development',
		'Linux',
		'React',
		'Next.js',
		'TypeScript',
		'Node.js',
		'Frontend Developer',
		'Backend Developer',
		'DevOps Engineer',
		'JavaScript Developer',
		'Software Engineer',
		'ankitseal.in',
		'Web Designer'
	],
	authors: [{ name: 'Ankit Seal', url: 'https://ankitseal.in' }],
	creator: 'Ankit Seal',
	publisher: 'Ankit Seal',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL('https://ankitseal.in'),
	alternates: {
		canonical: 'https://ankitseal.in',
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://ankitseal.in',
		siteName: 'Ankit Seal Portfolio',
		title: 'Ankit Seal - Full Stack Developer & Software Engineer',
		description: "Hi, I'm Ankit - a full-stack developer building modern web apps, tools, and digital experiences. Explore my projects and technical expertise.",
		images: [
			{
				url: '/pfp.webp',
				width: 1200,
				height: 630,
				alt: 'Ankit Seal - Full Stack Developer',
			}
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: '@seal_ankit17027',
		creator: '@seal_ankit17027',
		title: 'Ankit Seal - Full Stack Developer',
		description: 'Portfolio showcasing web development projects, skills, and innovative digital solutions',
		images: ['/pfp.webp'],
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

	const creativeWorks = [
		{
			"@context": "https://schema.org",
			"@type": "CreativeWork",
			"name": "ModChat",
			"url": "https://ankitseal.in/projects/modchat",
			"description": "A chat application with modern UI and active chat moderation.",
			"image": "https://ankitseal.in/proj_coming_soon.jpg",
			"author": {
				"@type": "Person",
				"name": "Ankit Seal",
				"url": "https://ankitseal.in"
			},
			"keywords": "Chat Application, Real-time Chat, Chat Moderation, Web Development, Full Stack Development",
			"datePublished": "2025-12-07",
			"dateModified": "2025-12-07"
		},
		{
			"@context": "https://schema.org",
			"@type": "CreativeWork",
			"name": "Spotify Dashboard",
			"url": "https://ankitseal.in/projects/spotify-dashboard",
			"description": "An interactive dashboard showing Spotify analytics and recently played tracks.",
			"image": "https://ankitseal.in/spotify_dashboard.jpg",
			"author": {
				"@type": "Person",
				"name": "Ankit Seal",
				"url": "https://ankitseal.in"
			},
			"keywords": "Spotify, Dashboard, Analytics, Web Development, Full Stack Development",
			"datePublished": "2025-12-07",
			"dateModified": "2025-12-07"
		}
	];

	const personSchema = {
		"@context": "https://schema.org",
		"@mainEntityOfPage": {
			"@type": "WebPage",
			"@id": "https://ankitseal.in#webpage"
		},
		"@type": "Person",
		"@id": "https://ankitseal.in#me",
		"name": "Ankit Seal",
		"url": "https://ankitseal.in",
		"image": "https://ankitseal.in/pfp.webp",
		"jobTitle": "Full Stack Developer",
		"headline": "Full Stack Developer & Software Engineer",
		"description": "Full-stack developer specializing in frontend, backend, system design, and cloud-ready applications.",
		"knowsAbout": [
			"Web Development", "Full Stack Development", "React", "Next.js",
			"Node.js", "MongoDB", "SQL", "TypeScript", "Linux", "DevOps"
		],
		"skills": [
			"Next.js", "React", "TypeScript", "Node.js", "TailwindCSS", "Framer Motion",
			"MongoDB", "SQL", "REST APIs", "System Design"
		],
		"sameAs": [
			"https://github.com/ankitseal",
			"https://linkedin.com/in/ankit-seal-26358328a",
			"https://www.instagram.com/sealankit_04/",
			"https://leetcode.com/u/ankitseal/"
		],
		"contactPoint": {
			"@type": "ContactPoint",
			"contactType": "Portfolio Contact",
			"url": "https://ankitseal.in/contact"
		}
	};

	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": "https://ankitseal.in#website",
		"url": "https://ankitseal.in",
		"name": "Ankit Seal Portfolio",
		"creator": { "@id": "https://ankitseal.in#me" },
		"publisher": { "@id": "https://ankitseal.in#me" },
		"inLanguage": "en",
		"potentialAction": {
			"@type": "SearchAction",
			"target": "https://ankitseal.in/search?q={search_term_string}",
			"query-input": "required name=search_term_string"
		}
	};

	const webPageSchema = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"@id": "https://ankitseal.in#webpage",
		"url": "https://ankitseal.in",
		"name": "Ankit Seal - Full Stack Developer",
		"description": "Portfolio of Ankit Seal showcasing full-stack web development projects, blogs, chatbot integration, Spotify features, and contact information.",
		"isPartOf": {
			"@id": "https://ankitseal.in#website"
		},
		"inLanguage": "en"
	};

	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{
				"@type": "ListItem",
				"@id": "https://ankitseal.in#home",
				"position": 1,
				"name": "Home",
				"item": "https://ankitseal.in"
			},
			{
				"@type": "ListItem",
				"@id": "https://ankitseal.in#about",
				"position": 2,
				"name": "About",
				"item": "https://ankitseal.in/about"
			},
			{
				"@type": "ListItem",
				"@id": "https://ankitseal.in#projects",
				"position": 3,
				"name": "Projects",
				"item": "https://ankitseal.in/projects"
			},
			{
				"@type": "ListItem",
				"@id": "https://ankitseal.in#contact",
				"position": 4,
				"name": "Contact",
				"item": "https://ankitseal.in/contact"
			}
		]
	};

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
				/>

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
				/>

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
				/>

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorks) }}
				/>

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
				/>
			</head>
			<body
				className={`${jetBrainsMono.variable} ${inter.variable} antialiased bg-neutral-100 dark:bg-neutral-950 `}
			>

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
