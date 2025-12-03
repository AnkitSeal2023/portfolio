"use client";
import React, { useState } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FileTextIcon, Send } from 'lucide-react';
export function ResumeCard() {
	const [isResumeAnimating, setIsResumeAnimating] = useState(false);
	const resumeControls = useAnimation();

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
	return (
		<div className="flex justify-center h-9 text-center font-sm">
			<div
				onMouseEnter={triggerResumeAnimation}
				onTouchStartCapture={triggerResumeAnimation}
			>
				<HoverBorderGradient
					containerClassName="rounded-md"
					as="button"
					className="dark:bg-neutral-950 bg-white text-black dark:text-white flex items-center space-x-2 h-8 cursor-pointer py-4.5 dark:[box-shadow:inset_0_0_2px_0_rgba(99,102,241,0.6)]"
				>
					<motion.div
						className='rotate-10'
						animate={resumeControls}
					>
						<FileTextIcon className="size-4"/>
					</motion.div>
					<div className="text-xs font-semibold">Resumé/CV</div>
				</HoverBorderGradient>

			</div>
		</div>
	);
}

