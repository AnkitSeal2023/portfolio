'use client';

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Navbar from '@/components/navbar';
import { Mail, Github, Linkedin, Twitter, Send, MessageSquare } from 'lucide-react';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const socialLinks = [
		{
			id: 1,
			name: "Email",
			designation: "ankitseal2021@gmail.com",
			image: "https://cdn-icons-png.flaticon.com/512/9068/9068642.png",
			url: "mailto:ankitseal2021@gmail.com",
			icon: <Mail className="size-5" />,
			handle: "ankitseal2021@gmail.com"
		},
		{
			id: 2,
			name: "GitHub",
			designation: "AnkitSeal2023",
			image: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
			url: "https://github.com/AnkitSeal2023",
			icon: <Github className="size-5" />,
			handle: "@AnkitSeal2023"
		},
		{
			id: 3,
			name: "LinkedIn",
			designation: "Ankit Seal",
			image: "https://cdn-icons-png.flaticon.com/512/4494/4494497.png",
			url: "https://www.linkedin.com/in/ankit-seal-26358328a/",
			icon: <Linkedin className="size-5" />,
			handle: "Ankit Seal"
		},
		{
			id: 4,
			name: "Twitter/X",
			designation: "@seal_ankit17027",
			image: "https://cdn-icons-png.flaticon.com/512/3670/3670151.png",
			url: "https://x.com/seal_ankit17027",
			icon: <Twitter className="size-5" />,
			handle: "@seal_ankit17027"
		},
		{
			id: 5,
			name: "Discord",
			designation: "ankit2004",
			image: "https://cdn-icons-png.flaticon.com/512/5968/5968756.png",
			url: "https://discord.com/users/ankit2004",
			icon: <MessageSquare className="size-5" />,
			handle: "ankit2004"
		},
	];

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission (replace with actual API call)
		await new Promise(resolve => setTimeout(resolve, 1500));

		// Create mailto link as fallback
		const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
		const body = encodeURIComponent(
			`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
		);
		window.location.href = `mailto:ankitseal2021@gmail.com?subject=${subject}&body=${body}`;

		setIsSubmitting(false);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};

	return (
		<div className='relative flex w-full items-center justify-center bg-neutral-50 dark:bg-neutral-950 min-h-screen'>
			{/* Grid background */}
			<div
				className={cn(
					"absolute inset-0",
					"z-0",
					"bg-size-[20px_20px]",
					"bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]",
					"dark:bg-[radial-gradient(#404040_1px,transparent_1px)]",
				)} />
			<div className="z-0 pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

			<Navbar isSubPage={true} />

			<div className="z-10 h-full max-w-3xl w-full px-5 py-24">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="pt-16"
				>
					<h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
						Get in Touch
					</h1>
					<p className="text-lg text-neutral-600 dark:text-neutral-400 mt-4">
						Have a project in mind? Let's talk about it.
					</p>
				</motion.div>

				{/* Quick Contact Methods */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mt-12"
				>
					<h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
						Connect with me
					</h2>
					<div className="flex flex-wrap gap-4">
						{socialLinks.map((link) => (
							<a
								key={link.id}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-3 px-4 py-3 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all"
							>
								<div className="text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
									{link.icon}
								</div>
								<div className="text-left">
									<div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
										{link.name}
									</div>
									<div className="text-xs text-neutral-600 dark:text-neutral-400">
										{link.handle}
									</div>
								</div>
							</a>
						))}
					</div>
				</motion.div>

				{/* Contact Form */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mt-16"
				>
					<h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
						Send me a message
					</h2>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								value={formData.name}
								onChange={handleChange}
								className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all"
								placeholder="Your name"
							/>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								value={formData.email}
								onChange={handleChange}
								className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all"
								placeholder="your.email@example.com"
							/>
						</div>

						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								required
								value={formData.message}
								onChange={handleChange}
								rows={6}
								className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all resize-none"
								placeholder="Tell me about your project or idea..."
							/>
						</div>

						<Button
							type="submit"
							disabled={isSubmitting}
							className="w-full md:w-auto px-8 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
						>
							{isSubmitting ? (
								<>
									<div className="size-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
									Sending...
								</>
							) : (
								<>
									<Send className="size-4" />
									Send Message
								</>
							)}
						</Button>
					</form>
				</motion.div>

				{/* Additional Info */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mt-16 mb-20"
				>
					<div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 bg-neutral-50 dark:bg-neutral-900/50">
						<h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
							📬 What to expect
						</h3>
						<ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
							<li className="flex items-start gap-2">
								<span className="mt-1.5 size-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
								<span>I typically respond within 24-48 hours</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-1.5 size-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
								<span>Open to freelance projects, collaborations, and interesting opportunities</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-1.5 size-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
								<span>Feel free to reach out even just to say hi!</span>
							</li>
						</ul>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
