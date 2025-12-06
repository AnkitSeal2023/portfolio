'use client';
import Lenis from 'lenis'
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Send } from 'lucide-react';
import Navbar from '@/components/navbar';
import HobbiesList from '@/components/hobbies';
import { AnimatedTooltipPreview } from '@/components/mylinks';
import { ResumeCard } from '@/components/resume-button';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { SpotifyLastPlayedToast } from '@/components/spotify-lastplayed';
import LoadingScreen from '@/components/loading-screen';
import Projects from '@/components/projects/projects';

export default function Page() {
	const [isLoading, setIsLoading] = useState(true);
	const [resourcesReady, setResourcesReady] = useState({
		document: false,
		fonts: false,
		images: false,
		lenis: false,
	});
	const [minLoadTimePassed, setMinLoadTimePassed] = useState(false);

	// Enforce minimum loading screen display time (for progress bar animation)
	useEffect(() => {
		const minLoadTimer = setTimeout(() => {
			setMinLoadTimePassed(true);
		}, 1500); // Minimum 1.5 seconds to let progress bar animate smoothly

		return () => clearTimeout(minLoadTimer);
	}, []);

	// Track when all resources are ready AND minimum time has passed
	useEffect(() => {
		const allReady = Object.values(resourcesReady).every(Boolean);
		if (allReady && minLoadTimePassed && isLoading) {
			// Small delay to ensure smooth transition after progress reaches 100%
			const timer = setTimeout(() => {
				setIsLoading(false);
			}, 400);
			return () => clearTimeout(timer);
		}
	}, [resourcesReady, minLoadTimePassed, isLoading]);

	// Initialize Lenis smooth scroll
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
			smoothWheel: true,
		});
		let rafId = 0;
		function raf(time: number) {
			lenis.raf(time);
			rafId = requestAnimationFrame(raf);
		}
		rafId = requestAnimationFrame(raf);

		// Mark Lenis as ready after a brief initialization
		const lenisReadyTimer = setTimeout(() => {
			setResourcesReady(prev => ({ ...prev, lenis: true }));
		}, 100);

		return () => {
			clearTimeout(lenisReadyTimer);
			cancelAnimationFrame(rafId);
			lenis.destroy();
		};
	}, []);

	// Check document ready state
	useEffect(() => {
		if (document.readyState === 'complete') {
			setResourcesReady(prev => ({ ...prev, document: true }));
		} else {
			const handleLoad = () => {
				setResourcesReady(prev => ({ ...prev, document: true }));
			};
			window.addEventListener('load', handleLoad);
			return () => window.removeEventListener('load', handleLoad);
		}
	}, []);

	// Check fonts loaded
	useEffect(() => {
		if (typeof document !== 'undefined' && 'fonts' in document) {
			document.fonts.ready.then(() => {
				setResourcesReady(prev => ({ ...prev, fonts: true }));
			});
		} else {
			// Fallback if fonts API not available
			setResourcesReady(prev => ({ ...prev, fonts: true }));
		}
	}, []);

	// Preload critical images (profile picture)
	useEffect(() => {
		const imagesToPreload = ['/pfp.webp'];
		let loadedCount = 0;

		const imagePromises = imagesToPreload.map((src) => {
			return new Promise<void>((resolve) => {
				const img = new window.Image();
				img.onload = () => {
					loadedCount++;
					if (loadedCount === imagesToPreload.length) {
						setResourcesReady(prev => ({ ...prev, images: true }));
					}
					resolve();
				};
				img.onerror = () => {
					// Still mark as complete even on error to prevent infinite loading
					loadedCount++;
					if (loadedCount === imagesToPreload.length) {
						setResourcesReady(prev => ({ ...prev, images: true }));
					}
					resolve();
				};
				img.src = src;
			});
		});

		Promise.all(imagePromises);
	}, []);
	const resumeControls = useAnimation();
	const contactControls = useAnimation();
	const [isResumeAnimating, setIsResumeAnimating] = useState(false);
	const [isContactAnimating, setIsContactAnimating] = useState(false);

	const triggerResumeAnimation = () => {
		if (isResumeAnimating) return;
		setIsResumeAnimating(true);

		resumeControls
			.start({
				rotate: [0, 25, 0],
				transition: { duration: 0.5, ease: "easeInOut" },
			})
			.then(() => setIsResumeAnimating(false));
	};

	const triggerContactAnimation = () => {
		if (isContactAnimating) return;
		setIsContactAnimating(true);

		contactControls
			.start({
				rotate: [0, 25, 0],
				transition: { duration: 0.5, ease: "easeInOut" },
			})
			.then(() => setIsContactAnimating(false));
	};
	const { scrollYProgress } = useScroll(); // 0 → 1 a user scrolls the whole page
	const x = useTransform(scrollYProgress, [0, 0.18], [0, -54]);
	const y = useTransform(scrollYProgress, [0, 0.15], [0, -115]);

	return (
		<>
			<LoadingScreen isLoading={isLoading} />

			<div className='font-sans relative flex w-full items-center justify-center bg-neutral-50 dark:bg-neutral-950'>
				<div
					className={cn(
						"absolute inset-0",
						"z-0",
						"bg-size-[20px_20px]",
						"bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]",
						"dark:bg-[radial-gradient(#404040_1px,transparent_1px)]",
					)} />
				<div className="z-0 pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
				<Navbar />

				<div className="z-10 h-full max-w-3xl w-full px-5 py-18 relative">
					<div className='flex items-center w-full'></div>
					<div >
						<div className='flex flex-col md:flex-row pt-40 text-neutral-900 dark:text-neutral-200 text-3xl overflow-visible'>
							<h1 className="font-semibold mr-2">
								Hi, I'm Ankit —
							</h1>
							<HobbiesList />
						</div>
						<h3 className='text-neutral-700 dark:text-neutral-400 font-normal py-7'>
							I do the whole stack— <span className='font-mono'>frontend</span>, <span className='font-mono'>backend</span>, and the glue that holds them together on a good day.
						</h3>
						<div className='
						    z-10
							bottom-0
							-my-20
							fixed
							left-1/2
							-translate-x-1/2
							w-full
							px-5
							h-60
								pointer-events-none
								bg-gradient-to-t
							from-white/30
							to-white/0
							dark:from-neutral-950
							dark:to-neutral-950/0
							blur-2xl`
						'></div>
						<div className="flex space-x-3">
							<ResumeCard />
							<div className="flex justify-center h-9 text-center text-sm"
								onClick={() => window.open("https://www.linkedin.com/in/ankit-seal-26358328a/", "_blank")}
							>
								<div
									onMouseEnter={triggerContactAnimation}
									onTouchStartCapture={triggerContactAnimation}
								>
									<HoverBorderGradient
										containerClassName="rounded-md"
										as="button"
										className="flex items-center space-x-2 h-8 cursor-pointer
										bg-neutral-900 text-neutral-100
										dark:bg-neutral-100 dark:text-neutral-900
										py-4.5 rounded-md"
									>
										<motion.div animate={contactControls} className="rotate-10">
											<Send className="size-4 mr-1 stroke-[1.7]" />
										</motion.div>

										<div className="text-xs font-medium"
										>
											Get in touch
										</div>
									</HoverBorderGradient>
								</div>
							</div>
						</div>
						<AnimatedTooltipPreview />
						<SpotifyLastPlayedToast />
						<Projects />
					</div>
				</div>
			</div>
		</>
	);
}
