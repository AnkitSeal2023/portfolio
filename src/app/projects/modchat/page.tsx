'use client';

import type { Metadata } from 'next';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Navbar from '@/components/navbar';
import { ArrowLeft, Github, ExternalLink, Code2, Zap, Shield, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
	title: 'ModChat - Real-time Chat Application',
	description: 'ModChat is a feature-rich real-time chat application built with React, Node.js, Socket.io, and MongoDB. Explore the technical implementation, challenges, and solutions.',
	openGraph: {
		title: 'ModChat - Real-time Chat App by Ankit Seal',
		description: 'A powerful real-time messaging platform with modern UI, built using React and Socket.io.',
		images: ['/projects/modchat.png'],
	},
};

export default function ModChatPage() {
	const techStack = [
		'React',
		'Node.js',
		'Socket.io',
		'MongoDB',
		'Express',
		'TypeScript',
		'Tailwind CSS',
	];

	const features = [
		{
			icon: <Zap className="size-5" />,
			title: 'Real-time Messaging',
			description: 'Instant messaging with WebSocket support for seamless communication.',
		},
		{
			icon: <Shield className="size-5" />,
			title: 'Moderation Tools',
			description: 'Built-in moderation features for managing content and users effectively.',
		},
		{
			icon: <Users className="size-5" />,
			title: 'Multi-User Support',
			description: 'Support for multiple users with role-based permissions and channels.',
		},
		{
			icon: <Code2 className="size-5" />,
			title: 'Clean Architecture',
			description: 'Well-structured codebase following best practices and design patterns.',
		},
	];

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

			<div className="z-10 h-full max-w-4xl w-full px-5 py-24">
				{/* Back Button */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					className="pt-16 mb-8"
				>
					<Link
						href="/"
						className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
					>
						<ArrowLeft className="size-4" />
						<span className="text-sm">Back to home</span>
					</Link>
				</motion.div>

				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
						ModChat
					</h1>
					<p className="text-lg text-neutral-600 dark:text-neutral-400 mt-4">
						A real-time chat application with built-in moderation tools
					</p>

					{/* Action Buttons */}
					<div className="flex flex-wrap gap-3 mt-6">
						<a
							href="https://github.com/AnkitSeal2023"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors text-sm font-medium"
						>
							<Github className="size-4" />
							View on GitHub
						</a>
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors text-sm font-medium text-neutral-900 dark:text-neutral-100"
						>
							<ExternalLink className="size-4" />
							Live Demo
						</a>
					</div>
				</motion.div>

				{/* Project Image/Screenshot */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mt-12"
				>
					<div className="relative w-full aspect-video rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
						{/* Placeholder for project screenshot */}
						<div className="absolute inset-0 flex items-center justify-center text-neutral-400 dark:text-neutral-600">
							<div className="text-center">
								<Image
									src="/proj_coming_soon.jpg"
									alt="ModChat Screenshot"
									width={300}
									height={200}
								/>
							</div>
						</div>
						{/* Uncomment when you have a screenshot */}
						{/* <Image
							src="/projects/modchat-screenshot.png"
							alt="ModChat Screenshot"
							fill
							className="object-cover"
						/> */}
					</div>
				</motion.div>

				{/* Overview */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mt-12"
				>
					<h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
						Overview
					</h2>
					<div className="space-y-4 text-neutral-700 dark:text-neutral-300">
						<p>
							ModChat is a modern real-time chat application designed with community moderation in mind.
							Built using WebSocket technology, it provides instant messaging capabilities while offering
							powerful tools for managing conversations and users.
						</p>
						<p>
							The project demonstrates full-stack development skills, including real-time communication,
							database management, user authentication, and responsive UI design.
						</p>
					</div>
				</motion.div>

				{/* Features */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mt-12"
				>
					<h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
						Key Features
					</h2>
					<div className="grid md:grid-cols-2 gap-6">
						{features.map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
								className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
							>
								<div className="flex items-start gap-4">
									<div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400">
										{feature.icon}
									</div>
									<div>
										<h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
											{feature.title}
										</h3>
										<p className="text-sm text-neutral-600 dark:text-neutral-400">
											{feature.description}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Tech Stack */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.5 }}
					className="mt-12"
				>
					<h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
						Tech Stack
					</h2>
					<div className="flex flex-wrap gap-3">
						{techStack.map((tech) => (
							<span
								key={tech}
								className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm font-medium text-neutral-900 dark:text-neutral-100"
							>
								{tech}
							</span>
						))}
					</div>
				</motion.div>

				{/* Implementation Highlights */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="mt-12"
				>
					<h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
						Implementation Highlights
					</h2>
					<div className="space-y-4 text-neutral-700 dark:text-neutral-300">
						<div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-4">
							<h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
								Real-time Communication
							</h3>
							<p className="text-sm">
								Implemented WebSocket connections using Socket.io for bidirectional,
								event-based communication between clients and server with minimal latency.
							</p>
						</div>
						<div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-4">
							<h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
								Scalable Architecture
							</h3>
							<p className="text-sm">
								Built with a modular architecture separating concerns into controllers,
								services, and models for better maintainability and scalability.
							</p>
						</div>
						<div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-4">
							<h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
								Database Design
							</h3>
							<p className="text-sm">
								Designed efficient MongoDB schemas for users, messages, and channels with
								proper indexing for optimal query performance.
							</p>
						</div>
					</div>
				</motion.div>

				{/* Challenges & Learning */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.7 }}
					className="mt-12 mb-20"
				>
					<h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
						Challenges & Learning
					</h2>
					<div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 bg-neutral-50 dark:bg-neutral-900/50">
						<ul className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
							<li className="flex items-start gap-2">
								<span className="mt-1.5 size-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
								<span>
									<strong>State Management:</strong> Managing real-time state across multiple
									connected clients while ensuring data consistency.
								</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-1.5 size-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
								<span>
									<strong>Performance:</strong> Optimizing message delivery and rendering for
									smooth UX even with high message volumes.
								</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-1.5 size-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
								<span>
									<strong>Security:</strong> Implementing proper authentication, authorization,
									and input validation to prevent common vulnerabilities.
								</span>
							</li>
						</ul>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
