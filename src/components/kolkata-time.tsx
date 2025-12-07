"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export default function KolkataTime() {
	const [kolkataTime, setKolkataTime] = useState<string>("");
	const [offsetText, setOffsetText] = useState<string>("");

	useEffect(() => {
		const updateTime = () => {
			const now = new Date();

			// Get Kolkata time
			const kolkataTimeStr = now.toLocaleTimeString("en-GB", {
				timeZone: "Asia/Kolkata",
				hour: "2-digit",
				minute: "2-digit",
				hour12: false,
			});

			// Calculate offset between browser time and Kolkata time
			const browserOffset = now.getTimezoneOffset(); // in minutes, negative if ahead of UTC
			const kolkataOffset = -330; // IST is UTC+5:30, so -330 minutes

			// Difference: positive means Kolkata is ahead of browser
			const diffMinutes = browserOffset - kolkataOffset;

			let offsetStr = "";
			if (diffMinutes === 0) {
				offsetStr = "same time";
			} else {
				const absDiff = Math.abs(diffMinutes);
				const hours = Math.floor(absDiff / 60);
				const minutes = absDiff % 60;

				let timeStr = "";
				if (hours > 0 && minutes > 0) {
					timeStr = `${hours}h ${minutes}m`;
				} else if (hours > 0) {
					timeStr = `${hours}h`;
				} else {
					timeStr = `${minutes}m`;
				}

				offsetStr =
					diffMinutes > 0 ? `${timeStr} ahead` : `${timeStr} behind`;
			}

			setKolkataTime(kolkataTimeStr);
			setOffsetText(offsetStr);
		};

		updateTime();
		const interval = setInterval(updateTime, 1000);

		return () => clearInterval(interval);
	}, []);

	if (!kolkataTime) {
		return null;
	}

	return (
		<div className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 font-mono">
			<Clock
				size={22}
				className="bg-neutral-800 p-0.5 rounded-md items-center stroke-neutral-400"
			/>
			<span className="relative flex h-2 w-2">
				<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
				<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
			</span>
			<span className="inline-flex">
				{kolkataTime}{" "}
				<span className="text-neutral-500 dark:text-neutral-500">
					// {offsetText}
				</span>
			</span>
		</div>
	);
}
