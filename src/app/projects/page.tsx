"use client";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects/projects";
import { cn } from "@/lib/utils";
import { ReactLenis } from "lenis/react";

export default function Page() {
	return (
		<main className="flex flex-col items-center justify-center w-full my-20">
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
			<Navbar isSubPage={true} />
			<Projects />
		</main>
	);
}
