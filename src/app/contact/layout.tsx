import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact',
	description: 'Get in touch with Ankit Seal. Send a message or connect through social media. Open to collaboration, freelance work, and exciting opportunities.',
	openGraph: {
		title: 'Contact Ankit Seal',
		description: "Let's connect! Reach out for collaboration, freelance projects, or just to say hi.",
		url: 'https://ankitseal.in/contact',
	},
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
