import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
	title: 'ModChat - Real-time Chat Application',
	description: 'ModChat is a feature-rich real-time chat application built with React, Node.js, Socket.io, and MongoDB. Explore the technical implementation, challenges, and solutions.',
	openGraph: {
		title: 'ModChat - Real-time Chat App by Ankit Seal',
		description: 'A powerful real-time messaging platform with modern UI, built using React and Socket.io.',
		images: ['/projects/modchat.png'],
		url: 'https://ankitseal.in/projects/modchat',
	},
};

export default function ModChatLayout({
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
							"name": "Projects",
							"item": "https://ankitseal.in/projects"
						},
						{
							"@type": "ListItem",
							"position": 3,
							"name": "ModChat",
							"item": "https://ankitseal.in/projects/modchat"
						}
					]
				})}
			</Script>
			{children}
		</>
	);
}
