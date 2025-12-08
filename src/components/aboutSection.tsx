// small about section inside main page:

import Image from "next/image";
import Link from "next/link";
import { PixelatedCanvas } from "./ui/pixelated-canvas";
import { Lens } from "./ui/lens";
import { useEffect, useState } from "react";

import KolkataTime from "./kolkata-time";
import { MapPin } from "lucide-react";
import { Mars } from "lucide-react";
import ArrowTooltip from "./ui/tooltip";

function MyLocation() {
	return (
		<div className="flex items-center gap-1">
			<div className="rounded-lg p-0.5 border border-0.5 border-neutral-400 dark:border-neutral-600">
				<MapPin
					size={18}
					className="	 dark:bg-neutral-800 bg-neutral-200 p-0.5 rounded-md items-center dark:stroke-neutral-400"
				/>
			</div>
			<span className="text-neutral-600 dark:text-neutral-400 font-mono text-sm inline-flex">
				Kolkata, India{" "}
			</span>
		</div>
	);
}

function MyGender() {
	return (
		<div className="flex items-center gap-1">
			<div className="rounded-lg p-0.5 border border-0.5 border-neutral-400 dark:border-neutral-600">
				<Mars
					size={18}
					className="	 dark:bg-neutral-800 bg-neutral-200 p-0.5 rounded-md items-center dark:stroke-neutral-400"
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

	return (
		<section id="about" className="scroll-mt-20 ">
			<h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
				About Me
			</h2>
			<div className="flex flex-col md:flex-row items-end gap-x-6">
				<div className="w-full justify-start items-end flex">
					<Lens
						hovering={hovering}
						setHovering={setHovering}
						lensSize={150}
						zoomFactor={1.3}
					>
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
					</Lens>
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
							Tools used:
						</span>
						<ToolsUsed />
					</div>
					<div className="mb-2" />
					<p className="leading-4 text-neutral-700 dark:text-neutral-400 items-center text-sm">
						<span className="mr-0.5">
							Hi, I'm Ankit, a full-stack web developer, I work
							with{" "}
						</span>
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
						<span className="mr-1">,</span>
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
						<span className="mr-1">,</span>
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
						<span className="mr-1">
							, with a growing interest in
						</span>
						<a
							href="https://golang.org/"
							target="_blank"
							className="mt-0.5 inline-flex items-center whitespace-nowrap bg-neutral-200 dark:bg-neutral-900 font-mono border border-neutral-500	 rounded-md p-0.5 border-dashed"
						>
							<Image
								className="inline-block rounded-full"
								src="/go.svg"
								alt="Go	 Logo"
								width={15}
								height={15}
							/>
							<span className="ml-1 ">GO</span>
						</a>
						<span className="mr-1">,</span>
						and cloud technologies.
					</p>
				</div>
			</div>
		</section>
	);
}
