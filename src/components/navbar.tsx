import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
	const { scrollYProgress } = useScroll(); // 0 → 1 a user scrolls the whole page
	const x = useTransform(scrollYProgress, [0, 0.06, 0.2], [-40, 30, 10]);
	const y = useTransform(scrollYProgress, [0, 0.1], [0, 0]);
	return (
		<div className="flex h-16 w-full justify-center fixed top-0 z-10">
			<div className="max-w-3xl w-full px-3 h-16 flex justify-between items-center py-4 backdrop-blur-sm ">
				<div className="text-neutral-900 dark:text-white flex items-end text-sm md:px-1 ">
					<motion.div
						style={{
							x,
							y,
						}}
						className="flex items-end space-x-3 pl-11">
						<Link href="/" className="hover:underline font-semibold "> Projects </Link>
						<Link href="/" className="hover:underline font-semibold "> About </Link>
						<Link href="/" className="hover:underline font-semibold "> Contact </Link>
					</motion.div>
				</div>
				<div className='max-w-12 w-10 pr-5 overflow-hidden'>
					<ThemeToggle />
				</div>
			</div>
		</div>
	);
}
