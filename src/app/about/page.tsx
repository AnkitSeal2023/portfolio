"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import {
	Code2,
	Database,
	Layers,
	Terminal,
	Globe,
	Sparkles,
} from "lucide-react";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { Tooltip } from "@/components/ui/tooltip-card";

export default function AboutPage() {
	const skills = {
		frontend: [
			{
				name: "React",
				url: "https://react.dev",
				image: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
				description: "Component-based UI library.",
			},
			{
				name: "Next.js",
				url: "https://nextjs.org",
				image: "/next.png",
				description: "React framework with SSR/SSG.",
			},
			{
				name: "TypeScript",
				url: "https://www.typescriptlang.org",
				image: "/ts.png",
				description: "Typed JavaScript for better tooling.",
			},
			{
				name: "Tailwind CSS",
				url: "https://tailwindcss.com",
				image: "/tailwindcss.svg",
				description: "Utility-first CSS framework.",
			},
			{
				name: "Framer Motion",
				url: "https://framer.com/motion",
				image: "https://avatars.githubusercontent.com/u/84441432?s=200&v=4",
				description: "Smooth animations for React.",
			},
		],
		backend: [
			{
				name: "Node.js",
				url: "https://nodejs.org",
				image: "/nodejs.svg",
				description: "Server-side JavaScript runtime.",
			},
			{
				name: "Python",
				url: "https://python.org",
				image: "https://cdn-icons-png.flaticon.com/512/919/919852.png",
				description: "Versatile language for web & AI.",
			},
			{
				name: "PostgreSQL",
				url: "https://postgresql.org",
				image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
				description: "Advanced open-source relational DB.",
			},
			{
				name: "MongoDB",
				url: "https://mongodb.com",
				image: "/mongodb.svg",
				description: "Flexible NoSQL document database.",
			},
			{
				name: "REST APIs",
				url: "https://restfulapi.net",
				image: "https://cdn-icons-png.flaticon.com/512/3143/3143615.png",
				description: "Scalable HTTP-based web services.",
			},
		],
		tools: [
			{
				name: "Git",
				url: "https://git-scm.com",
				image: "https://avatars.githubusercontent.com/u/18133?s=200&v=4",
				description: "Distributed version control.",
			},
			{
				name: "Docker",
				url: "https://docker.com",
				image: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
				description: "Application containerization.",
			},
			{
				name: "Linux",
				url: "https://linux.org",
				image: "https://cdn-icons-png.flaticon.com/512/6124/6124995.png",
				description: "Open-source OS for dev & servers.",
			},
			{
				name: "Zed Editor",
				url: "https://zed.dev/",
				image: "/zed_icon.png",
				description:
					"A lightweight, powerful code editor with extensive extensions for development.",
			},
			{
				name: "Figma",
				url: "https://figma.com",
				image: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
				description: "Collaborative UI/UX design tool.",
			},
		],
	};

	const timeline = [
		{
			year: "2023",
			title: "Started Learning Web Development",
			description: "Began with HTML, CSS, and JavaScript fundamentals.",
		},
		{
			year: "2024",
			title: "Dove into Modern Frameworks",
			description:
				"Mastered React, Next.js, and TypeScript. Built full-stack projects.",
		},
		{
			year: "2025",
			title: "Building & Shipping",
			description:
				"Creating polished web apps and exploring AI integration.",
		},
	];
	return (
		<div className=" w-full h-full flex items-center justify-center">
			<Navbar isSubPage={true} />
			<div className="px-4 font-sans flex flex-col max-w-3xl  bg-neutral-50 dark:bg-neutral-950">
				<ReactLenis root />
				{/* Grid background */}
				<div
					className={cn(
						"fixed inset-0",
						"z-0",
						"bg-size-[20px_20px]",
						"bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]",
						"dark:bg-[radial-gradient(#404040_1px,transparent_1px)]",
					)}
				/>
				<div className="z-0 pointer-events-none  inset-0 fixed flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

				<div className="z-16 h-full max-w-3xl w-full py-24">
					<PixelatedCanvas
						src={"/pixel_art.jpg"}
						width={250}
						dotScale={1}
						height={250}
						className="rounded-lg"
						cellSize={3}
						shape="circle"
						dropoutStrength={0.01}
						distortionMode="swirl"
						tintColor="transparent"
						responsive
						jitterStrength={4}
						jitterSpeed={4}
						fadeOnLeave
						maxFps={30}
					/>
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

					{/* Info Cards */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="mt-12"
					>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
							{/* Location */}
							<div className="col-span-2 border border-neutral-200 dark:border-neutral-800 rounded-lg p-5 bg-linear-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-md">
								<div className="flex items-center gap-2 mb-2">
									<Globe className="size-4 text-neutral-500 dark:text-neutral-400" />
									<span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
										Location
									</span>
								</div>
								<div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
									Kolkata, India 🇮🇳
								</div>
							</div>

							{/* Age */}
							<div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-5 bg-linear-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-md">
								<div className="flex items-center gap-2 mb-2">
									<span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
										Age
									</span>
								</div>
								<div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
									21
								</div>
							</div>

							{/* Role */}
							<div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-5 bg-linear-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-md">
								<div className="flex items-center gap-2 mb-2">
									<Code2 className="size-4 text-neutral-500 dark:text-neutral-400" />
									<span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
										Role
									</span>
								</div>
								<div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
									Full Stack Dev
								</div>
							</div>

							{/* Education */}
							<div className="col-span-2 md:col-span-4 border border-neutral-200 dark:border-neutral-800 rounded-lg p-5 bg-linear-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-md">
								<div className="flex items-center gap-2 mb-2">
									<Layers className="size-4 text-neutral-500 dark:text-neutral-400" />
									<span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
										Education
									</span>
								</div>
								<div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
									B.Tech in Computer Science & Engineering
								</div>
								<div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
									Currently in Final Year
								</div>
							</div>
						</div>
					</motion.div>

					{/* Bio Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="mt-12 space-y-4 text-neutral-700 dark:text-neutral-300"
					>
						<p>
							I'm Ankit, a full-stack developer who builds web
							applications and enjoys learning new technologies.
						</p>
						<p>
							Outside of coding, I tweak my Linux setup, explore
							new tools, and contribute to open-source.
						</p>
					</motion.div>

					{/* Skills Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="mt-16"
					>
						<h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
							Tech Stack
						</h2>

						<div className="space-y-6">
							{/* Frontend */}
							<div>
								<h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3 flex items-center gap-2">
									<Code2 className="size-4 text-neutral-600 dark:text-neutral-400" />
									Frontend
								</h3>
								<div className="flex flex-wrap gap-2">
									{skills.frontend.map((skill) => (
										<Tooltip
											key={skill.name}
											content={skill.description}
											containerClassName="text-neutral-600 dark:text-neutral-400"
										>
											<Link
												href={skill.url}
												target="_blank"
												className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
											>
												<Image
													src={skill.image}
													alt={skill.name}
													width={16}
													height={16}
													className="rounded-sm"
												/>
												<span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
													{skill.name}
												</span>
											</Link>
										</Tooltip>
									))}
								</div>
							</div>
						</div>
						{/* Backend */}
						<div>
							<h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3 flex items-center gap-2">
								<Database className="size-4 text-neutral-600 dark:text-neutral-400" />
								Backend
							</h3>
							<div className="flex flex-wrap gap-2">
								{skills.backend.map((skill) => (
									<Tooltip
										key={skill.name}
										content={skill.description}
										containerClassName="text-neutral-600 dark:text-neutral-400"
									>
										<Link
											href={skill.url}
											target="_blank"
											className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
										>
											<Image
												src={skill.image}
												alt={skill.name}
												width={16}
												height={16}
												className="rounded-sm"
											/>
											<span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
												{skill.name}
											</span>
										</Link>
									</Tooltip>
								))}
							</div>
						</div>
					</motion.div>
					{/* Tools */}
					<div>
						<h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3 flex items-center gap-2">
							<Terminal className="size-4 text-neutral-600 dark:text-neutral-400" />
							Tools & More
						</h3>
						<div className="flex flex-wrap gap-2">
							{skills.tools.map((skill) => (
								<Tooltip
									key={skill.name}
									content={skill.description}
									containerClassName="text-neutral-600 dark:text-neutral-400"
								>
									<Link
										href={skill.url}
										target="_blank"
										className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
									>
										<Image
											src={skill.image}
											alt={skill.name}
											width={16}
											height={16}
											className="rounded-sm"
										/>
										<span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
											{skill.name}
										</span>
									</Link>
								</Tooltip>
							))}
						</div>
					</div>
				</div>

				{/* Journey Timeline */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="z-30"
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
								transition={{
									duration: 0.5,
									delay: 0.5 + index * 0.1,
								}}
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
			</div>
		</div>
	);
}
