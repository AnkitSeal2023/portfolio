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
			{ name: "React", url: "https://react.dev", image: "https://cdn-icons-png.flaticon.com/512/919/919851.png", description: "A JavaScript library for building user interfaces with reusable components and efficient rendering." },
			{ name: "Next.js", url: "https://nextjs.org", image: "/next.png", description: "A React framework for production with hybrid rendering (SSR, SSG) and file-based routing." },
			{ name: "TypeScript", url: "https://www.typescriptlang.org", image: "/ts.png", description: "A typed superset of JavaScript that adds optional static types and improves developer tooling." },
			{ name: "Tailwind CSS", url: "https://tailwindcss.com", image: "https://cdn-icons-png.flaticon.com/512/11162/11162197.png", description: "A utility-first CSS framework for rapidly building custom designs." },
			{ name: "Framer Motion", url: "https://framer.com/motion", image: "https://avatars.githubusercontent.com/u/7850840?s=200&v=4", description: "An animation library for React that makes creating smooth, interactive animations simple." },
		],
		backend: [
			{ name: "Node.js", url: "https://nodejs.org", image: "/nodejs.svg", description: "A JavaScript runtime for building scalable server-side applications with non-blocking I/O." },
			{ name: "Python", url: "https://python.org", image: "https://cdn-icons-png.flaticon.com/512/919/919852.png", description: "A versatile programming language known for simplicity and used in web, data science, and AI." },
			{ name: "PostgreSQL", url: "https://postgresql.org", image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png", description: "A powerful, open-source relational database with advanced features and ACID compliance." },
			{ name: "MongoDB", url: "https://mongodb.com", image: "https://cdn-icons-png.flaticon.com/512/9131/9131479.png", description: "A NoSQL database that stores data in flexible JSON-like documents." },
			{ name: "REST APIs", url: "https://restfulapi.net", image: "https://cdn-icons-png.flaticon.com/512/3143/3143615.png", description: "An architectural style for building scalable web services using HTTP methods." },
		],
		tools: [
			{ name: "Git", url: "https://git-scm.com", image: "https://cdn-icons-png.flaticon.com/512/919/919853.png", description: "A distributed version control system for tracking code changes and collaboration." },
			{ name: "Docker", url: "https://docker.com", image: "https://cdn-icons-png.flaticon.com/512/919/919853.png", description: "A containerization platform for packaging applications and dependencies into isolated environments." },
			{ name: "Linux", url: "https://linux.org", image: "https://cdn-icons-png.flaticon.com/512/6124/6124995.png", description: "An open-source operating system kernel used for servers, development, and embedded systems." },
			{ name: "VS Code", url: "https://code.visualstudio.com", image: "https://cdn-icons-png.flaticon.com/512/906/906337.png", description: "A lightweight, powerful code editor with extensive extensions for development." },
			{ name: "Figma", url: "https://figma.com", image: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png", description: "A collaborative design tool for UI/UX design and prototyping in the browser." },
		],
	};

	const timeline = [
		{
			year: "2023",
			title: "Started Learning Web Development",
			description:
				"Began my journey into full-stack development, learning HTML, CSS, and JavaScript fundamentals.",
		},
		{
			year: "2024",
			title: "Dove into Modern Frameworks",
			description:
				"Mastered React, Next.js, and TypeScript. Built multiple full-stack projects and contributed to open source.",
		},
		{
			year: "2025",
			title: "Building & Shipping",
			description:
				"Currently focused on creating polished web applications and exploring new technologies like AI integration.",
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
										Currently in 3rd Year
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
								I'm Ankit, a full-stack developer. I build web applications and enjoy learning new things along the way.
							</p>
							<p>
								When I'm not coding, I'm probably tweaking my Linux setup, exploring new tools, or contributing to open-source. I like writing clean code and designing interfaces that work well.
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
)}
