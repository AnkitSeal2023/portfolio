import type { Metadata } from 'next';

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
	return children;
}
