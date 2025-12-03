"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
	{
		id: 1,
		name: "Ankit Seal's X",
		designation: "X (Twitter)",
		image:
			"https://cdn-icons-png.flaticon.com/512/3670/3670151.png",
		url: "https://x.com/seal_ankit17027",
	},
	{
		id: 2,
		name: "Ankit Seal's GitHub",
		designation: "AnkitSeal2023",
		image:
			"https://cdn-icons-png.flaticon.com/512/733/733553.png",
		url: "https://github.com/AnkitSeal2023",
	},
	{
		id: 3,
		name: "Ankit Seal's LinkedIn",
		designation: "LinkedIn",
		image:
			"https://cdn-icons-png.flaticon.com/512/4494/4494497.png",
		url: "https://www.linkedin.com/in/ankit-seal-26358328a/",
	},
	{
		id: 4,
		name: "Ankit Seal's Discord",
		designation: "Discord (ankit2004)",
		image:
			"https://cdn-icons-png.flaticon.com/512/5968/5968756.png",
		url: "https://discord.com/users/ankit2004",
	},
	{
		id: 5,
		name: "Ankit Seal's Email",
		designation: "ankitseal2021@gmail.com",
		image:
			"https://cdn-icons-png.flaticon.com/512/9068/9068642.png",
		url: "mailto:ankitseal2021@gmail.com",
	},
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-start py-5 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
