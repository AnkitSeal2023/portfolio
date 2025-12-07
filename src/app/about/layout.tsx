import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
	title: 'About',
	description: 'Learn about Ankit Seal - a full-stack developer passionate about building modern web applications. Discover my skills, journey, and what drives me in tech.',
	openGraph: {
		title: 'About Ankit Seal',
		description: 'Full-stack developer skilled in React, Next.js, TypeScript, and Node.js. Learn about my journey and expertise.',
		url: 'https://ankitseal.in/about',
	},
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Script id="breadcrumb-schema" type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					"itemListElement": [
						{
							"@type": "ListItem",
							"position": 1,
							"name": "Home",
							"item": "https://ankitseal.in/"
						},
						{
							"@type": "ListItem",
							"position": 2,
							"name": "About",
							"item": "https://ankitseal.in/about"
						}
					]
				})}
			</Script>
			{children}
		</>
	);
}
