import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
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
	return (
		<div className="flex h-16 w-full justify-center fixed top-0 z-20">
			<div className="max-w-3xl w-full px-3 h-16 flex justify-between items-center py-4 backdrop-blur-sm ">
				<div className="text-neutral-900 dark:text-white flex items-end text-sm md:px-1 ">
					<motion.div
						style={{
							x:pfpx,
							y:pfpy,
							scale,
							position: "fixed",
						}}
						className="rounded-full z-50"
					>
						<Image
							src="/pfp.webp"
							alt="Ankit Profile Picture"
							width={150}
							height={150}
							className=" z-50 rounded-full flex justify-start border p-0.5 border-neutral-300 dark:border-neutral-700"
						/>

					</motion.div>
					<motion.div
						style={{
							x,
							y,
						}}
						className="flex items-end space-x-3 pl-11">
						<Link href="/" className="hover:underline hover:decoration-2 font-semibold "> Projects </Link>
						<Link href="/" className="hover:underline hover:decoration-2 font-semibold "> About </Link>
						<Link href="/" className="hover:underline hover:decoration-2 font-semibold "> Contact </Link>
					</motion.div>
				</div>
				<div className='max-w-12 w-10 pr-5 overflow-hidden'>
					<ThemeToggle />
				</div>
			</div>
		</div>
	);
}
