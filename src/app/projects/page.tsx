"use client";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects/projects";

export default function Page() {
	return (
		<main className="flex flex-col items-center justify-center w-full">
			<Navbar isSubPage={true} />
			<Projects />
		</main>
	);
}
