'use client';

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Navbar from '@/components/navbar';
import { Code2, Database, Layers, Terminal, Globe, Sparkles } from 'lucide-react';

export default function AboutPage() {
	const skills = {
		frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
		backend: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
		tools: ['Git', 'Docker', 'Linux', 'VS Code', 'Figma'],
	};

	const timeline = [
		{
			year: '2023',
			title: 'Started Learning Web Development',
			description: 'Began my journey into full-stack development, learning HTML, CSS, and JavaScript fundamentals.',
		},
		{
			year: '2024',
			title: 'Dove into Modern Frameworks',
			description: 'Mastered React, Next.js, and TypeScript. Built multiple full-stack projects and contributed to open source.',
		},
		{
			year: '2025',
			title: 'Building & Shipping',
			description: 'Currently focused on creating polished web applications and exploring new technologies like AI integration.',
		},
	];

	return (
		<div className='relative flex w-full items-center justify-center bg-neutral-50 dark:bg-neutral-950'>
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
						About Me
					</h1>
					<p className="text-lg text-neutral-600 dark:text-neutral-400 mt-4">
						Developer, tinkerer, and Linux enthusiast.
					</p>
				</motion.div>

				{/* Bio Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mt-12 space-y-4 text-neutral-700 dark:text-neutral-300"
				>
					<p>
						I'm Ankit, a full-stack developer who loves building things for the web.
						I started coding because I was curious about how websites worked, and that
						curiosity turned into a genuine passion for creating digital experiences.
					</p>
					<p>
						When I'm not coding, you'll find me tweaking my Linux setup (yes, I'm that person),
						exploring new frameworks, or diving into open-source projects. I believe in writing
						clean, maintainable code and designing interfaces that people actually enjoy using.
					</p>
					<p>
						I'm currently focused on building modern web applications with React and Next.js,
						while also exploring backend development and DevOps practices. Always learning,
						always building.
					</p>
				</motion.div>

				{/* Skills Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mt-16"
				>
					<h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
						Tech Stack
					</h2>

					<div className="grid md:grid-cols-3 gap-6">
						{/* Frontend */}
						<div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
							<div className="flex items-center gap-2 mb-4">
								<Code2 className="size-5 text-neutral-600 dark:text-neutral-400" />
								<h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
									Frontend
								</h3>
							</div>
							<ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
								{skills.frontend.map((skill) => (
									<li key={skill} className="flex items-center gap-2">
										<span className="size-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
										{skill}
									</li>
								))}
							</ul>
						</div>

						{/* Backend */}
						<div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
							<div className="flex items-center gap-2 mb-4">
								<Database className="size-5 text-neutral-600 dark:text-neutral-400" />
								<h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
									Backend
								</h3>
							</div>
							<ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
								{skills.backend.map((skill) => (
									<li key={skill} className="flex items-center gap-2">
										<span className="size-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
										{skill}
									</li>
								))}
							</ul>
						</div>

						{/* Tools */}
						<div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
							<div className="flex items-center gap-2 mb-4">
								<Terminal className="size-5 text-neutral-600 dark:text-neutral-400" />
								<h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
									Tools & More
								</h3>
							</div>
							<ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
								{skills.tools.map((skill) => (
									<li key={skill} className="flex items-center gap-2">
										<span className="size-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
										{skill}
									</li>
								))}
							</ul>
						</div>
					</div>
				</motion.div>

				{/* Journey Timeline */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mt-16"
				>
					<h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
						My Journey
					</h2>

					<div className="space-y-8">
						{timeline.map((item, index) => (
							<motion.div
								key={item.year}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
								className="flex gap-6"
							>
								<div className="flex flex-col items-center">
									<div className="flex items-center justify-center size-10 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-mono text-sm font-semibold shrink-0">
										{item.year.slice(2)}
									</div>
									{index !== timeline.length - 1 && (
										<div className="w-px h-full bg-neutral-200 dark:bg-neutral-800 mt-2" />
									)}
								</div>
								<div className="pb-8">
									<h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
										{item.title}
									</h3>
									<p className="text-sm text-neutral-600 dark:text-neutral-400">
										{item.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* What I'm Up To */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="mt-16 mb-20"
				>
					<h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
						Currently
					</h2>
					<div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
						<div className="space-y-4 text-neutral-700 dark:text-neutral-300">
							<div className="flex items-start gap-3">
								<Sparkles className="size-5 text-neutral-600 dark:text-neutral-400 shrink-0 mt-0.5" />
								<p>
									Building full-stack applications with Next.js and exploring AI integrations
								</p>
							</div>
							<div className="flex items-start gap-3">
								<Globe className="size-5 text-neutral-600 dark:text-neutral-400 shrink-0 mt-0.5" />
								<p>
									Contributing to open-source projects and learning from the developer community
								</p>
							</div>
							<div className="flex items-start gap-3">
								<Layers className="size-5 text-neutral-600 dark:text-neutral-400 shrink-0 mt-0.5" />
								<p>
									Deepening my understanding of system design and scalable architecture
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
