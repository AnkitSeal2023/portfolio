// small about section inside main page:
import { GitHubCalendar } from "react-github-calendar";
import Image from "next/image";
import Link from "next/link";
import { PixelatedCanvas } from "./ui/pixelated-canvas";
import { useEffect, useState } from "react";
import { Tooltip } from "./ui/tooltip-card";
import KolkataTime from "./kolkata-time";
import { MapPin } from "lucide-react";
import { Mars } from "lucide-react";
import ArrowTooltip from "./ui/tooltip";
import "cal-heatmap/cal-heatmap.css";
import Example from "./github_calendar";

function MyLocation() {
	return (
		<div className=" group flex items-center gap-1">
			<div className="rounded-lg p-0.5 border border-0.5 border-neutral-400 dark:border-neutral-600">
				<MapPin
					size={18}
					className="	group-hover:animate-pulse dark:bg-neutral-800 bg-neutral-200 p-0.5 rounded-md items-center dark:stroke-neutral-400"
				/>
			</div>
			<span className="text-neutral-800 dark:text-neutral-300 font-mono text-sm inline-flex">
				Kolkata, India 🇮🇳
			</span>
		</div>
	);
}

function MyGender() {
	return (
		<div className="group flex items-center gap-1">
			<div className="rounded-lg p-0.5 border border-0.5 border-neutral-400 dark:border-neutral-600">
				<Mars
					size={18}
					className="	group-hover:animate-pulse dark:bg-neutral-800 bg-neutral-200 p-0.5 rounded-md items-center dark:stroke-neutral-400"
				/>
			</div>
			<span className="text-neutral-600 dark:text-neutral-400 font-mono text-sm inline-flex">
				he/him{" "}
			</span>
		</div>
	);
}

function ToolsUsed() {
	return (
		<div className="flex space-x-1">
			<ArrowTooltip title="JavaScript">
				<Link
					href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
					target="_blank"
				>
					<Image
						src={"/js.png"}
						width={20}
						height={20}
						alt="JavaScript Logo"
					/>
				</Link>
			</ArrowTooltip>
			<ArrowTooltip title="TypeScript">
				<Link href="https://www.typescriptlang.org/" target="_blank">
					<Image
						src={"/ts.png"}
						width={20}
						height={20}
						alt="TypeScript Logo"
					/>
				</Link>
			</ArrowTooltip>
			<ArrowTooltip title="GO">
				<Link href="https://golang.org/" target="_blank">
					<Image
						src={"/go.svg"}
						width={20}
						height={20}
						alt="GO Logo"
					/>
				</Link>
			</ArrowTooltip>
			<ArrowTooltip title="HTMX">
				<Link href="https://htmx.org/" target="_blank">
					<Image
						src={"/htmx.svg"}
						width={20}
						height={20}
						alt="HTMX Logo"
						className="bg-neutral-300 rounded-md"
					/>
				</Link>
			</ArrowTooltip>
			<ArrowTooltip title="ZED Editor">
				<Link href="https://zed.dev/" target="_blank">
					<Image
						src={
							"https://zed.dev/_next/static/media/stable-app-logo.9b5f959f.png"
						}
						width={20}
						height={20}
						alt="ZED Logo"
					/>
				</Link>
			</ArrowTooltip>
			<ArrowTooltip title="NextJS">
				<Link href="https://nextjs.org/" target="_blank">
					<Image
						src={"/next.png"}
						width={20}
						height={20}
						alt="NextJS Logo"
						className="bg-white rounded-md"
					/>
				</Link>
			</ArrowTooltip>
			<ArrowTooltip title="Aceternity UI">
				<Link href="https://ui.aceternity.com/" target="_blank">
					<Image
						src={"/aceternity.png"}
						width={20}
						height={20}
						alt="Aceternity Logo"
					/>
				</Link>
			</ArrowTooltip>
			<ArrowTooltip title="ExpressJS">
				<Link href="https://expressjs.com/" target="_blank">
					<Image
						src={"/expressjs.svg"}
						width={20}
						height={20}
						alt="ExpressJS Logo"
						className="bg-yellow-300 rounded-md p-0.5"
					/>
				</Link>
			</ArrowTooltip>
			<ArrowTooltip title="Figma">
				<Link href="https://www.figma.com/" target="_blank">
					<Image
						src={
							"https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
						}
						width={20}
						height={20}
						alt="Figma Logo"
					/>
				</Link>
			</ArrowTooltip>
			<ArrowTooltip title="Linux (arch btw)">
				<Link href="https://www.linux.org/" target="_blank">
					<Image
						src={
							"https://cdn-icons-png.flaticon.com/512/6124/6124995.png"
						}
						width={20}
						height={20}
						alt="Linux Logo"
					/>
				</Link>
			</ArrowTooltip>
			<ArrowTooltip title="Docker">
				<Link href="https://www.docker.com/" target="_blank">
					<Image
						src={
							"https://cdn-icons-png.flaticon.com/512/919/919853.png"
						}
						width={20}
						height={20}
						alt="Docker Logo"
					/>
				</Link>
			</ArrowTooltip>
		</div>
	);
}

function AboutContent() {
	return (
		<div className="leading-4 text-neutral-700 dark:text-neutral-400 items-center text-sm">
			<span className="mr-0.5">
				Hi, I'm Ankit, a full-stack web developer, I work with{" "}
			</span>
			<Tooltip
				containerClassName="text-neutral-600 dark:text-neutral-400"
				content="Next.js is a React framework that lets you build production-ready apps with hybrid rendering (SSR, SSG, and client-side) and file-based routing."
			>
				<a
					href="https://nextjs.org/"
					target="_blank"
					className="inline-flex items-center whitespace-nowrap bg-neutral-200 dark:bg-neutral-900 font-mono border border-neutral-500	 rounded-md p-0.5 border-dashed"
				>
					<Image
						className="inline-block bg-white rounded-full"
						src="/next.png"
						alt="NextJS Logo"
						width={15}
						height={15}
					/>
					<span className="ml-1">NextJS</span>
				</a>
			</Tooltip>
			<span className="mr-1">,</span>
			<Tooltip
				containerClassName="text-neutral-600 dark:text-neutral-400"
				content="TypeScript is a statically typed superset of JavaScript that adds optional types and compile-time checks to catch errors early and improve tooling."
			>
				<a
					href="https://www.typescriptlang.org/"
					target="_blank"
					className="inline-flex items-center whitespace-nowrap bg-neutral-200 dark:bg-neutral-900 font-mono border border-neutral-500	 rounded-md p-0.5 border-dashed"
				>
					<Image
						className="inline-block bg-white rounded-full"
						src="/ts.png"
						alt="TypeScript Logo"
						width={15}
						height={15}
					/>
					<span className="ml-1">TypeScript</span>
				</a>
			</Tooltip>
			<span className="mr-1">,</span>
			<Tooltip
				containerClassName="text-neutral-600 dark:text-neutral-400"
				content="Node.js is a JavaScript runtime built on Chrome's V8 engine that lets you run JS on the server with an event-driven, non-blocking I/O model for high-concurrency applications. "
			>
				<a
					href="https://nodejs.org/"
					target="_blank"
					className="mt-0.5 inline-flex items-center whitespace-nowrap bg-neutral-200 dark:bg-neutral-900 font-mono border border-neutral-500	 rounded-md p-0.5 border-dashed"
				>
					<Image
						className="inline-block rounded-full"
						src="/nodejs.svg"
						alt="NodeJS Logo"
						width={15}
						height={15}
					/>
					<span className="ml-1">NodeJS</span>
				</a>
			</Tooltip>
			<span className="mr-1">, with a growing interest in</span>
			<Tooltip
				containerClassName="text-neutral-600 dark:text-neutral-400"
				content="Go (Golang) is a statically typed, compiled language from Google focused on simplicity, fast builds, and safe concurrency with goroutines and channels."
			>
				<a
					href="https://golang.org/"
					target="_blank"
					className="mt-0.5 inline-flex items-center whitespace-nowrap bg-neutral-200 dark:bg-neutral-900 font-mono border border-neutral-500	 rounded-md p-0.5 border-dashed"
				>
					<Image
						className=" inline-block rounded-full"
						src="/go.svg"
						alt="Go	 Logo"
						width={15}
						height={15}
					/>
					<span className="ml-1 ">GO</span>
				</a>
			</Tooltip>
			<span className="mr-1">,</span>
			and cloud technologies.
		</div>
	);
}

type ToolItem = {
	id: number;
	name: string;
	designation: string;
	image: string;
	url: string;
};

export default function AboutSection() {
	const [hovering, setHovering] = useState(false);
	const [windowWidth, setWindowWidth] = useState(0);

	// Track window width
	useEffect(() => {
		const updateWidth = () => setWindowWidth(window.innerWidth);
		updateWidth(); // Set initial width
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	}, []);

	// Responsive values based on screen width
	const isMobile = windowWidth < 768; // Tailwind 'md' breakpoint
	return (
		<section id="about" className="scroll-mt-20  ">
			<h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
				About Me
			</h2>
			<div className="flex flex-col md:flex-row items-end gap-x-6">
				<div className="w-full md:justify-start items-end flex justify-center	">
					{!isMobile ? (
						<PixelatedCanvas
							src={"/pixel_art.jpg"}
							width={250}
							dotScale={0.9}
							height={250}
							className="rounded-lg"
							cellSize={3}
							shape="circle"
							dropoutStrength={0.01}
							distortionMode="swirl"
							tintColor="transparent"
							responsive
							jitterStrength={3}
							jitterSpeed={3}
							fadeOnLeave
							maxFps={30}
						/>
					) : (
						<Image
							src={"/static_pixel_art.png"}
							width={250}
							height={250}
							alt="Pixel Art Portrait"
						/>
					)}
				</div>
				<div className="flex flex-col justify-end h-full pt-2">
					<h3 className="text-neutral-700 dark:text-neutral-200 text-2xl font-semibold mb-1">
						Ankit Seal
					</h3>
					<div className="mb-1 space-y-1 text-neutral-700 dark:text-neutral-400 items-center text-sm">
						<KolkataTime />
						<MyLocation />
						<MyGender />
						<span className="font-mono font-semibold text-neutral-600 dark:text-neutral-200">
							Tech Stack:
						</span>
						<ToolsUsed />
					</div>
					<div className="mb-2" />
					<AboutContent />
				</div>
			</div>
			<div className="mt-10 text-neutral-600 dark:text-neutral-200">
				<span className="text-2xl font-semibold my-1 text-neutral-900 dark:text-neutral-200">
					{" "}
					Github activity{" "}
				</span>
				<div className="p-5 border-2 rounded-md dark:text-neutral-500">
					<GitHubCalendar username="AnkitSeal2023" />
				</div>
			</div>
		</section>
	);
}
