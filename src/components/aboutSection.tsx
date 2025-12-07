// small about section inside main page:

import Image from "next/image";
import { PixelatedCanvas } from "./ui/pixelated-canvas";
import Navbar from "./navbar";
import KolkataTime from "./kolkata-time";
import { MapPin } from "lucide-react";

// WARN: Remove interactive false to make it interactive

function MyLocation() {
	return (
		<div className="flex items-center gap-1">
			<MapPin
				size={22}
				className="bg-neutral-800 p-0.5 rounded-md items-center stroke-neutral-400"
			/>
			<span className="text-neutral-600 dark:text-neutral-400 font-mono text-sm inline-flex">
				Kolkata, India{" "}
			</span>
		</div>
	);
}

export default function AboutSection() {
	return (
		<section id="about" className="scroll-mt-20 ">
			<h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
				About Me
			</h2>
			<div className="flex flex-col md:flex-row items-end gap-x-6">
				<div className="w-full justify-start items-end flex">
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
						interactive={false}
					/>
				</div>
				<div className="flex flex-col justify-end h-full pt-2">
					<h3 className="text-neutral-700 dark:text-neutral-200 text-2xl font-semibold mb-1">
						Ankit Seal
					</h3>
					<div className="mb-1 space-y-1">
						<KolkataTime />
						<MyLocation />
					</div>
					<div className="mb-2" />
					<p className="leading-4 text-neutral-700 dark:text-neutral-400 items-center text-md">
						<span className="mr-0.5">
							Hi, I'm Ankit, a full-stack web developer, I work
							with{" "}
						</span>
						<a
							href="https://nextjs.org/"
							target="_blank"
							className="inline-flex items-center whitespace-nowrap bg-neutral-300 dark:bg-neutral-900 font-mono border border-neutral-500	 rounded-md p-0.5 border-dashed"
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
							className="inline-flex items-center whitespace-nowrap bg-neutral-300 dark:bg-neutral-900 font-mono border border-neutral-500	 rounded-md p-0.5 border-dashed"
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
							className="mt-0.5 inline-flex items-center whitespace-nowrap bg-neutral-300 dark:bg-neutral-900 font-mono border border-neutral-500	 rounded-md p-0.5 border-dashed"
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
							className="mt-0.5 inline-flex items-center whitespace-nowrap bg-neutral-300 dark:bg-neutral-900 font-mono border border-neutral-500	 rounded-md p-0.5 border-dashed"
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
