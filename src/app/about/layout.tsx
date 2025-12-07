import type { Metadata } from 'next';

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
	return children;
}
