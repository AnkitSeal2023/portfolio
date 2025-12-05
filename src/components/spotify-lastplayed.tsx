"use client";
import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const spotify_elements = {
	src: `/spotify_played.jpeg`,
	song_name: "Save Your Tears (Remix) (with Ariana Grande)",
	artist_name: "The Weeknd, Ariana Grande",
}

export function SpotifyLastPlayedToast() {

	return (
		<div className="w-full border dark:border-transparent relative inline-flex overflow-hidden rounded-md p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
			<span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite]
							bg-[conic-gradient(from_0deg_at_50%_50%,white_0%,white_95%,#25d865_100%)]
							dark:bg-[conic-gradient(from_0deg_at_50%_50%,#0a0a0a_0%,#0a0a0a_95%,#25d865_100%)]"
			/>
			<div className="flex h-full w-full items-center justify-between rounded-md bg-neutral-50 dark:bg-neutral-950 px-3 py-2 text-sm font-medium dark:text-white backdrop-blur-3xl">
				<div className="flex items-center">
					<div className="py-1 flex items-center">
						<div className="p-px border flex items-center dark:bg-black rounded-md">
							<Image
								src={spotify_elements.src}
								alt="Spotify Playing Album Art"
								width={40}
								height={40}
								className="rounded-md "
							/>
						</div>
					</div>
					<div className="flex flex-col ml-3 justify-between">
						<div className="flex items-center pb-2 space-x-1">
							<Image
								src="/spotify_logo.png"
								alt="Spotify Logo"
								width={20}
								height={20}
								className="bg-neutral-800 rounded-sm p-0.5"
							/>
							<div className="text-xs flex items-center text-neutral-600 dark:text-neutral-400 font-medium">Last Played</div>
						</div>
						<div className="flex-col flex">
							<span className="text-sm font-semibold">{spotify_elements.song_name}</span>
							<span className="text-xs text-neutral-600 dark:text-neutral-400">by {spotify_elements.artist_name}</span>
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center dark:bg-neutral-900 text-white
								dark:shadow-[inset_0_3px_8px_rgba(255,255,255,0.08),inset_0_-3px_8px_rgba(0,0,0,0.6)]
								shadow-[inset_0_3px_8px_rgba(255,255,255,0.08),inset_0_-3px_8px_rgba(0,0,0,0.2)]
								border dark:border-neutral-800 rounded-md
				">
					<Play className="m-2 stroke-2 stroke-neutral-800 dark:stroke-neutral-300" size={16} />
				</div>

			</div>
		</div>
	)
}
