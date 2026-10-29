"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import KolkataTime from "@/components/kolkata-time";
import { SocialLinks } from "@/components/mylinks";
import ThemeToggle from "@/components/theme-toggle";

const NAV_LINKS = [
	{ href: "/projects", label: "Projects" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
];

function navLinks(className: string) {
	return (
		<nav className={className} aria-label="Main">
			{NAV_LINKS.map((link) => (
				<Link
					key={link.href}
					href={link.href}
					className="text-sm font-medium text-soft hover:text-ink transition-colors"
				>
					{link.label}
				</Link>
			))}
		</nav>
	);
}

/** The identity column: pixel portrait, pointer-reactive on desktop. */
function Portrait() {
	const [isMobile, setIsMobile] = useState(false);
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	useEffect(() => {
		const updateWidth = () => setIsMobile(window.innerWidth < 1024);
		updateWidth();
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	}, []);

	if (isMobile) {
		return (
			<div className="relative block size-40">
				{!isImageLoaded && (
					<Skeleton className="absolute inset-0 size-40 rounded-lg z-10" />
				)}
				<Image
					src="/static_pixel_art.png"
					width={160}
					height={160}
					alt="Pixel art portrait of Ankit Seal"
					className={`rounded-lg transition-opacity duration-300 ${
						isImageLoaded ? "opacity-100" : "opacity-0"
					}`}
					onLoad={() => setIsImageLoaded(true)}
					onLoadingComplete={() => setIsImageLoaded(true)}
				/>
			</div>
		);
	}

	return (
		<PixelatedCanvas
			src="/pixel_art.jpg"
			width={340}
			height={340}
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
	);
}

function StageInfo({ className }: { className?: string }) {
	return (
		<div className={className}>
			<p className="text-[13px] text-soft leading-relaxed">
				Kolkata, India ·{" "}
				<span className="whitespace-nowrap">UTC +5:30</span>
			</p>
			<KolkataTime className="text-[13px] mt-1" />
			<SocialLinks className="mt-4" />
		</div>
	);
}

/** Slim top bar, pointless on desktop where the stage carries navigation. */
function MobileTopBar() {
	return (
		<div className="lg:hidden flex items-center justify-between px-5 h-14 bg-paper sticky top-0 z-30">
			<Link
				href="/"
				className="flex items-center gap-2"
				aria-label="Ankit Seal — home"
			>
				<Image
					src="/pfp.webp"
					alt=""
					width={32}
					height={32}
					className="rounded-full bg-stage"
				/>
				<span className="text-sm font-semibold text-ink">
					Ankit Seal
				</span>
			</Link>
			<div className="flex items-center gap-4">
				{navLinks("flex items-center gap-4")}
				<ThemeToggle />
			</div>
		</div>
	);
}

function Stage() {
	return (
		<motion.aside
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
			className="bg-stage max-lg:px-5 max-lg:py-10 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center lg:sticky lg:top-0 lg:h-svh lg:px-10 lg:py-8 lg:flex lg:flex-col"
		>
			{/* Desktop navigation */}
			<div className="hidden lg:flex items-center justify-between">
				{navLinks("flex items-center gap-6")}
				<ThemeToggle />
			</div>

			<div className="flex flex-col items-center text-center lg:flex-1 lg:justify-center lg:gap-8">
				<Portrait />
				<div className="mt-4 lg:mt-0">
					<p className="text-lg font-semibold text-ink">Ankit Seal</p>
					<p className="text-[13px] text-soft mt-0.5">
						Full-stack developer
					</p>
				</div>
				<StageInfo className="lg:hidden" />
			</div>

			{/* Desktop bottom strip: location on the left margin, socials on the right */}
			<div className="hidden lg:flex items-center justify-between gap-4">
				<div>
					<p className="text-[13px] text-soft leading-relaxed">
						Kolkata, India ·{" "}
						<span className="whitespace-nowrap">UTC +5:30</span>
					</p>
					<KolkataTime className="text-[13px] mt-1" />
				</div>
				<SocialLinks />
			</div>
		</motion.aside>
	);
}

/** Designed close: the name returns large, links, and the legal line. */
export function SiteFooter() {
	return (
		<footer className="mt-8 pb-16">
			<p className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
				Ankit Seal
			</p>
			<div className="mt-5 flex flex-col gap-4">
				<SocialLinks className="justify-start -ml-2" />
				<p className="text-[13px] text-soft">
					Kolkata, India · © {new Date().getFullYear()} Ankit Seal ·
					Design inspired by ramx.in
				</p>
			</div>
		</footer>
	);
}

/**
 * Split stage: the portrait column never moves on desktop while the
 * reading column scrolls. On phones everything stacks.
 */
export default function Shell({ children }: { children: React.ReactNode }) {
	return (
		<MotionConfig reducedMotion="user">
			<div className="font-sans min-h-svh w-full bg-paper text-ink selection:bg-stage">
				<MobileTopBar />
				<div className="lg:grid lg:grid-cols-[45fr_55fr]">
					<Stage />
					<main className="min-w-0 max-lg:px-5 lg:pl-16 xl:pl-20 lg:pr-10 max-w-[52rem]">
						{children}
					</main>
				</div>
			</div>
		</MotionConfig>
	);
}
