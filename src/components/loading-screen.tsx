"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
	isLoading: boolean;
	onLoadComplete?: () => void;
}

export default function LoadingScreen({ isLoading, onLoadComplete }: LoadingScreenProps) {
	const [progress, setProgress] = useState(0);
	const ua = navigator.userAgent;
	const [browser, setBrowser] = useState<string>("");
	useEffect(() => {
		if (ua.includes("Firefox")) setBrowser("Firefox");
		else if (ua.includes("Chrome")) setBrowser("Chromium/Chrome");
		else if (ua.includes("Safari")) setBrowser("Safari");
		else setBrowser("Unknown");
		if (isLoading) {
			// Smoothly animate progress from 0 to 95% over 1.2 seconds
			const startTime = Date.now();
			const duration = 1200; // 1.2 seconds

			const animateProgress = () => {
				const elapsed = Date.now() - startTime;
				const percent = Math.min((elapsed / duration) * 95, 95);

				setProgress(percent);

				if (percent < 95) {
					requestAnimationFrame(animateProgress);
				}
			};

			requestAnimationFrame(animateProgress);
		} else {
			// When loading completes, quickly finish the progress bar
			setProgress(100);
			const timeout = setTimeout(() => {
				onLoadComplete?.();
			}, 400); // Match the fade-out duration
			return () => clearTimeout(timeout);
		}
	}, [isLoading, onLoadComplete]);

	useEffect(() => {
		const ua = navigator.userAgent;

		if (ua.includes("Firefox")) setBrowser("Firefox");
		else if (ua.includes("Chrome")) setBrowser("Chromium/Chrome");
		else if (ua.includes("Safari")) setBrowser("Safari");
		else setBrowser("Unknown");
	}, []);
	return (

		<AnimatePresence mode="wait">
			{isLoading && (
				<motion.div
					key="loader"
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-950"
				>
					{/* Grid background matching main page */}
					<div
						className="absolute inset-0 z-0 bg-size-[20px_20px] bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] dark:bg-[radial-gradient(#404040_1px,transparent_1px)]"
					/>
					<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black z-0" />

					{/* Loading content */}
					<div className="z-10 flex flex-col items-center space-y-6">
						{/* Animated logo or initial */}
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="text-6xl font-bold text-neutral-900 dark:text-neutral-100"
						>
							{`<Ankit/>`}
						</motion.div>

						{/* Progress bar */}
						<div className="w-48 h-1 bg-neutral-300 dark:bg-neutral-800 rounded-full overflow-hidden">
							<motion.div
								initial={{ width: "0%" }}
								animate={{ width: `${progress}%` }}
								transition={{ duration: 0.4, ease: "easeOut" }}
								className="h-full bg-neutral-900 dark:bg-neutral-100"
							/>
						</div>

						<div className="space-y-1 items-center flex flex-col">

							{/* Loading text */}
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.2 }}
								className="text-md text-neutral-600 dark:text-neutral-400 font-mono"
							>
								Loading...
							</motion.p>

							{browser == 'Firefox' ? <motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.2 }}
								className="text-sm dark:text-neutral-400 text-neutral-600 font-mono"
							>
								Best viewed in Chromium browsers.
							</motion.p>
								: <></>
							}
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
