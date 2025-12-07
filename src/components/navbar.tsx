import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Lens } from "@/components/ui/lens";
import ThemeToggle from "./theme-toggle";

type isSubPage = { isSubPage?: boolean };

export default function Navbar(props: isSubPage) {
	const { scrollYProgress } = useScroll(); // 0 → 1 a user scrolls the whole page
	const x = useTransform(scrollYProgress, [0, 0.04, 0.1], [-40, 30, 10]);
	const y = useTransform(scrollYProgress, [0, 0.1], [0, 0]);
	// const pfpx = useTransform(scrollYProgress, [0, 0.1], [5, -54]);
	// const pfpy = useTransform(scrollYProgress, [0, 0.1], [180, 65]);
	// const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.3]);
	const [windowWidth, setWindowWidth] = useState(0);

	// Track window width
	useEffect(() => {
		const updateWidth = () => setWindowWidth(window.innerWidth);
		updateWidth(); // Set initial width
		window.addEventListener('resize', updateWidth);
		return () => window.removeEventListener('resize', updateWidth);
	}, []);

	// Responsive values based on screen width
	const isMobile = windowWidth < 768; // Tailwind 'md' breakpoint
	const isTablet = windowWidth >= 768 && windowWidth < 1024;

	// Adjust transforms based on device width
	const pfpx = useTransform(
		scrollYProgress,
		isMobile ? [0, 0.05] : [0, 0.1],
		[5, -54]
	);
	const pfpy = useTransform(
		scrollYProgress,
		isMobile ? [0, 0.05] : [0, 0.1],
		[180, 65]
	);
	const scale = useTransform(
		scrollYProgress,
		isMobile ? [0, 0.05] : [0, 0.1],
		[1, 0.3]
	);
	const [hovering, setHovering] = useState(false);

	return (
		<nav className="flex h-16 w-full justify-center fixed top-0 z-20"
		>
			<div className="max-w-3xl w-full px-3 h-16 flex justify-between items-center py-4 backdrop-blur-xs ">
				<div className="text-neutral-900 dark:text-white flex items-end text-sm md:px-1 ">
					<motion.div
						style={{
							...props.isSubPage ? { x: -54, y: 65, scale: 0.3, position: "fixed" } : {
								x: pfpx,
								y: pfpy,
								scale,
								position: "fixed",
							}
						}}
						className="cursor-pointer rounded-full z-50"
						onClick={() => { window.location.href = "/"; }}
					>
						{(() => {
							const [lensEnabled, setLensEnabled] = useState(true);

							useEffect(() => {
								const unsubscribe = scrollYProgress.onChange((latest) => {
									if (latest < 0.06) {
										setLensEnabled(true);
									} else {
										setLensEnabled(false);
									}
								});
								return () => unsubscribe();
							}, [scrollYProgress]);

							return lensEnabled ? (
								<Lens hovering={hovering} setHovering={setHovering} lensSize={100} zoomFactor={1.3}>
									<Image
										src="/pfp.webp"
										alt="Ankit Profile Picture"
										width={150}
										height={150}
										className="z-50 rounded-full flex justify-start border p-0.5 border-neutral-300 dark:border-neutral-700"
									/>
								</Lens>
							) : (
								<Image
									src="/pfp.webp"
									alt="Ankit Profile Picture"
									width={150}
									height={150}
									className="z-50 rounded-full flex justify-start border p-0.5 border-neutral-300 dark:border-neutral-700"
								/>
							);
						})()}

					</motion.div>
					<motion.div
						style={{
							...props.isSubPage ? { x: 10, y: 0, } : {
								x,
								y,
							}
						}}
						className="flex items-end space-x-3 pl-11">
						<Link href="/projects" className="hover:underline hover:decoration-2 font-semibold "> Projects </Link>
						<Link href="/about" className="hover:underline hover:decoration-2 font-semibold "> About </Link>
						<Link href="/contact" className="hover:underline hover:decoration-2 font-semibold "> Contact </Link>
					</motion.div>
				</div>
				<div className='max-w-12 w-10 pr-5 overflow-hidden'>
					<ThemeToggle />
				</div>
			</div>
		</nav>
	);
}
