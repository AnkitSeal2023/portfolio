"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function ExpandTechStackOnHover() {
	return (
		<div className="flex pt-5 -space-x-1.5">
			<RevealNextJSOnHover />
			<RevealReactJSOnHover />
			<RevealGOOnHover />
			<RevealExpressJSOnHover />
			<RevealMongoDBOnHover />
			<RevealCSSOnHover />
			<RevealHTMXOnHover />
			<RevealJSOnHover />
		</div>
	);
}
export function RevealGOOnHover() {
	return (
		<motion.div
			className="cursor-default flex items-center  p-0.5 gap-1 aspect-square dark:bg-neutral-800 bg-neutral-100 rounded-full overflow-hidden border "
			initial={{ width: "1.5rem", height: "1.5rem" }} // only icon width
			whileHover={{ width: "3.3rem" }} // expands to show text
			transition={{ type: "tween" }}
		>
			{/* Icon */}
			<div className="flex aspect-square max-h-3 min-h-full bg-neutral-100 dark:bg-neutral-800">
				<Image
					src="/go.svg"
					alt="Settings Icon"
					width={24}
					height={24}
					className="bg-neutral-200 dark:bg-neutral-800 rounded-full"
				/>
			</div>
			{/* Text that reveals left-to-right */}
			<motion.span
				className="whitespace-nowrap text-xs dark:text-white font-extralight"
				initial={{ opacity: 0, x: -10 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.3 }}
			>
				<i>GO</i>
			</motion.span>
		</motion.div>
	);
}
export function RevealAceternityOnHover() {
	return (
		<motion.div
			className="cursor-default flex items-center  p-0.5 gap-1 aspect-square dark:bg-neutral-800 bg-neutral-100 rounded-full overflow-hidden border "
			initial={{ width: "1.5rem", height: "1.5rem" }} // only icon width
			whileHover={{ width: "6.5rem" }} // expands to show text
			transition={{ type: "tween" }}
		>
			{/* Icon */}
			<div className="flex aspect-square max-h-3 min-h-full bg-neutral-100 dark:bg-neutral-800">
				<Image
					src="/aceternity.png"
					alt="Settings Icon"
					width={24}
					height={24}
					className="bg-white rounded-full"
				/>
			</div>
			{/* Text that reveals left-to-right */}
			<motion.span
				className="whitespace-nowrap text-xs dark:text-white font-extralight"
				initial={{ opacity: 0, x: -10 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.3 }}
			>
				Aceternity UI
			</motion.span>
		</motion.div>
	);
}
export function RevealNextJSOnHover() {
	return (
		<motion.div
			className="cursor-default flex items-center  p-0.5 gap-1 aspect-square dark:bg-neutral-800 bg-neutral-100 rounded-full overflow-hidden border "
			initial={{ width: "1.5rem", height: "1.5rem" }} // only icon width
			whileHover={{ width: "4.5rem" }} // expands to show text
			transition={{ type: "tween" }}
		>
			{/* Icon */}
			<div className="flex aspect-square max-h-3 min-h-full bg-neutral-100 dark:bg-neutral-800">
				<Image
					src="/next.png"
					alt="Settings Icon"
					width={24}
					height={24}
					className="bg-white rounded-full"
				/>
			</div>
			{/* Text that reveals left-to-right */}
			<motion.span
				className="whitespace-nowrap text-xs dark:text-white font-extralight"
				initial={{ opacity: 0, x: -10 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.3 }}
			>
				NextJS
			</motion.span>
		</motion.div>
	);
}
export function RevealReactJSOnHover() {
	return (
		<motion.div
			className="cursor-default flex items-center  p-1 gap-1 aspect-square dark:bg-neutral-800 bg-neutral-100 rounded-full overflow-hidden border "
			initial={{ width: "1.5rem", height: "1.5rem" }} // only icon width
			whileHover={{ width: "4.8rem" }} // expands to show text
			transition={{ type: "tween" }}
		>
			{/* Icon */}
			<div className="flex aspect-square max-h-3 min-h-full bg-neutral-100 dark:bg-neutral-800">
				<Image
					src="/react.png"
					alt="Settings Icon"
					width={24}
					height={24}
					className="rounded-full bg-neutral-100 dark:bg-neutral-800"
				/>
			</div>

			{/* Text that reveals left-to-right */}
			<motion.span
				className="whitespace-nowrap text-xs font-extralight dark:text-white "
				initial={{ opacity: 0, x: -10 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.3 }}
			>
				ReactJS
			</motion.span>
		</motion.div>
	);
}
export function RevealExpressJSOnHover() {
	return (
		<motion.div
			className="cursor-default flex items-center  p-0.5 gap-1 aspect-square dark:bg-neutral-800 bg-neutral-100 rounded-full overflow-hidden border "
			initial={{ width: "1.5rem", height: "1.5rem" }} // only icon width
			whileHover={{ width: "4.8rem" }} // expands to show text
			transition={{ type: "tween" }}
		>
			{/* Icon */}
			<div className="flex aspect-square rounded-full max-h-3 min-h-full bg-neutral-100 dark:bg-neutral-700">
				<Image
					src="/expressjs.svg"
					alt="ExpressJS Icon"
					width={24}
					height={24}
					className="bg-white rounded-full p-0.5"
				/>
			</div>
			{/* Text that reveals left-to-right */}
			<motion.span
				className="whitespace-nowrap text-xs dark:text-white font-extralight"
				initial={{ opacity: 0, x: -10 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.3 }}
			>
				Express
			</motion.span>
		</motion.div>
	);
}
export function RevealMongoDBOnHover() {
	return (
		<motion.div
			className="cursor-default flex items-center  p-0.5 gap-1 aspect-square dark:bg-neutral-800 bg-neutral-100 rounded-full overflow-hidden border "
			initial={{ width: "1.5rem", height: "1.5rem" }} // only icon width
			whileHover={{ width: "5.5rem" }} // expands to show text
			transition={{ type: "tween" }}
		>
			{/* Icon */}
			<div className="flex aspect-square rounded-full max-h-3 min-h-full bg-neutral-100 dark:bg-neutral-700">
				<Image
					src="/mongodb.svg"
					alt="MongoDB Icon"
					width={24}
					height={24}
					className="bg-green-950 rounded-full p-0.5"
				/>
			</div>
			{/* Text that reveals left-to-right */}
			<motion.span
				className="whitespace-nowrap text-xs dark:text-white font-extralight"
				initial={{ opacity: 0, x: -10 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.3 }}
			>
				MongoDB
			</motion.span>
		</motion.div>
	);
}
export function RevealCSSOnHover() {
	return (
		<motion.div
			className="cursor-default flex items-center  p-0.5 gap-1 aspect-square dark:bg-neutral-800 bg-neutral-100 rounded-full overflow-hidden border "
			initial={{ width: "1.5rem", height: "1.5rem" }} // only icon width
			whileHover={{ width: "4.2rem" }} // expands to show text
			transition={{ type: "tween" }}
		>
			{/* Icon */}
			<div className="flex aspect-square rounded-full max-h-3 min-h-full bg-blue-400">
				<Image
					src="/css.png"
					alt="CSS Icon"
					width={24}
					height={24}
					className=" rounded-full p-0.5"
				/>
			</div>
			{/* Text that reveals left-to-right */}
			<motion.span
				className="whitespace-nowrap text-xs dark:text-white font-extralight"
				initial={{ opacity: 0, x: -10 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.3 }}
			>
				CSS 3
			</motion.span>
		</motion.div>
	);
}
export function RevealHTMXOnHover() {
	return (
		<motion.div
			className="cursor-default flex items-center  p-0.5 gap-1 aspect-square dark:bg-neutral-800 bg-neutral-100 rounded-full overflow-hidden border "
			initial={{ width: "1.5rem", height: "1.5rem" }} // only icon width
			whileHover={{ width: "4.5rem" }} // expands to show text
			transition={{ type: "tween" }}
		>
			{/* Icon */}
			<div className="flex aspect-square rounded-full max-h-3 min-h-full bg-white dark:bg-neutral-300">
				<Image
					src="/htmx.svg"
					alt="HTMX Icon"
					width={24}
					height={24}
					className=" rounded-full p-0.5"
				/>
			</div>
			{/* Text that reveals left-to-right */}
			<motion.span
				className="whitespace-nowrap text-xs dark:text-white font-extralight"
				initial={{ opacity: 0, x: -10 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.3 }}
			>
				HTMX
			</motion.span>
		</motion.div>
	);
}
export function RevealJSOnHover() {
	return (
		<motion.div
			className="cursor-default flex items-center  p-0.5 gap-1 aspect-square dark:bg-neutral-800 bg-neutral-100 rounded-full overflow-hidden border "
			initial={{ width: "1.5rem", height: "1.5rem" }} // only icon width
			whileHover={{ width: "5.6rem" }} // expands to show text
			transition={{ type: "tween" }}
		>
			{/* Icon */}
			<div className="flex aspect-square rounded-full max-h-3 min-h-full bg-neutral-100 ">
				<Image
					src="/js.png"
					alt="JS Icon"
					width={24}
					height={24}
					className=" rounded-full p-0.5"
				/>
			</div>
			{/* Text that reveals left-to-right */}
			<motion.span
				className="whitespace-nowrap text-xs dark:text-white font-extralight"
				initial={{ opacity: 0, x: -10 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.3 }}
			>
				JavaScript
			</motion.span>
		</motion.div>
	);
}

export function RevealTypeScriptOnHover() {
	return (
		<motion.div
			className="cursor-default flex items-center  p-0.5 gap-1 aspect-square dark:bg-neutral-800 bg-neutral-100 rounded-full overflow-hidden border "
			initial={{ width: "1.5rem", height: "1.5rem" }} // only icon width
			whileHover={{ width: "5.6rem" }} // expands to show text
			transition={{ type: "tween" }}
		>
			{/* Icon */}
			<div className="cursor-default flex aspect-square rounded-full max-h-3 min-h-full bg-neutral-100 ">
				<Image
					src="/ts.png"
					alt="JS Icon"
					width={24}
					height={24}
					className=" rounded-full "
				/>
			</div>
			{/* Text that reveals left-to-right */}
			<motion.span
				className="whitespace-nowrap text-xs dark:text-white font-extralight"
				initial={{ opacity: 0, x: -10 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.3 }}
			>
				TypeScript
			</motion.span>
		</motion.div>
	);
}
export function RevealHTMLOnHover() {
	return (
		<motion.div
			className="cursor-default flex items-center  p-0.5 gap-1 aspect-square dark:bg-neutral-800 bg-neutral-100 rounded-full overflow-hidden border "
			initial={{ width: "1.5rem", height: "1.5rem" }} // only icon width
			whileHover={{ width: "4.4rem" }} // expands to show text
			transition={{ type: "tween" }}
		>
			{/* Icon */}
			<div className="flex aspect-square rounded-full max-h-3 min-h-full bg-neutral-100 dark:bg-neutral-800">
				<Image
					src="/html.png"
					alt="HTML Icon"
					width={24}
					height={24}
					className=" rounded-full bg-transparent dark:bg-neutral-800"
				/>
			</div>
			{/* Text that reveals left-to-right */}
			<motion.span
				className="whitespace-nowrap text-xs dark:text-white font-extralight"
				initial={{ opacity: 0, x: -10 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.3 }}
			>
				HTML
			</motion.span>
		</motion.div>
	);
}
export function RevealTailwindOnHover() {
	return (
		<motion.div
			className="cursor-default flex items-center  p-0.5 gap-1 aspect-square dark:bg-neutral-800 bg-neutral-100 rounded-full overflow-hidden border "
			initial={{ width: "1.5rem", height: "1.5rem" }} // only icon width
			whileHover={{ width: "6.5rem" }} // expands to show text
			transition={{ type: "tween" }}
		>
			{/* Icon */}
			<div className="flex aspect-square rounded-full max-h-3 min-h-full bg-neutral-100 dark:bg-neutral-800">
				<Image
					src="/tailwindcss.svg"
					alt="TailwindCSS Icon"
					width={24}
					height={24}
					className=" rounded-full bg-transparent dark:bg-neutral-800"
				/>
			</div>
			{/* Text that reveals left-to-right */}
			<motion.span
				className="whitespace-nowrap text-xs dark:text-white font-extralight"
				initial={{ opacity: 0, x: -10 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.3 }}
			>
				TailwindCSS
			</motion.span>
		</motion.div>
	);
}
export function RevealPostgresOnHover() {
	return (
		<motion.div
			className="cursor-default flex items-center  p-0.5 gap-1 aspect-square dark:bg-neutral-800 bg-neutral-100 rounded-full overflow-hidden border "
			initial={{ width: "1.5rem", height: "1.5rem" }} // only icon width
			whileHover={{ width: "6.5rem" }} // expands to show text
			transition={{ type: "tween" }}
		>
			{/* Icon */}
			<div className="flex aspect-square rounded-full max-h-3 min-h-full bg-neutral-100 dark:bg-neutral-60">
				<Image
					src="/postgres.png"
					alt="Postgres Icon"
					width={24}
					height={24}
					className=" rounded-full bg-transparent dark:bg-neutral-600 p-0.5"
				/>
			</div>
			{/* Text that reveals left-to-right */}
			<motion.span
				className="whitespace-nowrap text-xs dark:text-white font-extralight"
				initial={{ opacity: 0, x: -10 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.3 }}
			>
				PostgreSQL
			</motion.span>
		</motion.div>
	);
}
