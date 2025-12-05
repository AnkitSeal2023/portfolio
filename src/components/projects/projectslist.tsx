"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Github } from "lucide-react";
import ExpandTechStackOnHover, { RevealCSSOnHover, RevealExpressJSOnHover, RevealGOOnHover, RevealHTMXOnHover, RevealNextJSOnHover, RevealJSOnHover, RevealTailwindOnHover,  RevealMongoDBOnHover,  RevealReactJSOnHover, RevealTypeScriptOnHover, RevealHTMLOnHover, RevealPostgresOnHover } from "./techstack";

type ThreeDCardDemoProps = {
	label: string;
	description: string;
	imageSrc: string;
	githubLink: string;
	tryLink?: string;
	wip?: boolean;
	techstack?: RevealTechFlags;
}

type RevealTechFlags = {
	nextjs?: boolean;
	reactjs?: boolean;
	go?: boolean;
	expressjs?: boolean;
	mongodb?: boolean;
	css?: boolean;
	htmx?: boolean;
	js?: boolean;
	ts?: boolean;
	html?: boolean;
	tailwindcss?: boolean;
	postgres?: boolean;
};

export function ThreeDCardDemo(props: ThreeDCardDemoProps) {
	const revealTechInitial: RevealTechFlags = {};
	revealTechInitial.nextjs = props.techstack?.nextjs || false;
	revealTechInitial.reactjs = props.techstack?.reactjs || false;
	revealTechInitial.go = props.techstack?.go || false;
	revealTechInitial.expressjs = props.techstack?.expressjs || false;
	revealTechInitial.mongodb = props.techstack?.mongodb || false;
	revealTechInitial.css = props.techstack?.css || false;
	revealTechInitial.htmx = props.techstack?.htmx || false;
	revealTechInitial.js = props.techstack?.js || false;
	revealTechInitial.ts = props.techstack?.ts || false;
	revealTechInitial.html = props.techstack?.html || false;
	revealTechInitial.tailwindcss = props.techstack?.tailwindcss || false;
	revealTechInitial.postgres = props.techstack?.postgres || false;
	console.log("revealTechInitial:", revealTechInitial);
	return (
		<CardContainer className="bg-transparent max-w-full md:max-w-31/31 inter-var"
			containerClassName="max-w-full "
		>
			<CardBody className="bg-gray-50/60 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black/60 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
				<CardItem
					translateZ="50"
					className="text-xl font-bold text-neutral-600 dark:text-white"
				>
					{props.label}
				</CardItem>
				<CardItem
					as="p"
					translateZ="60"
					className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
				>
					{props.description}
				</CardItem>
				<CardItem translateZ="100" className="w-full mt-4">
					<img
						src={`${props.imageSrc}`}
						height="1000"
						width="1000"
						className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
						alt={`${props.label} thumbnail`}
					/>
					<div className="flex pt-5 -space-x-1.5">
						{revealTechInitial.nextjs && <RevealNextJSOnHover/>}
						{revealTechInitial.css && <RevealCSSOnHover/>}
						{revealTechInitial.reactjs && <RevealReactJSOnHover/>}
						{revealTechInitial.go && <RevealGOOnHover/>}
						{revealTechInitial.expressjs && <RevealExpressJSOnHover/>}
						{revealTechInitial.htmx && <RevealHTMXOnHover/>}
						{revealTechInitial.js && <RevealJSOnHover/>}
						{revealTechInitial.ts && <RevealTypeScriptOnHover/>}
						{revealTechInitial.mongodb && <RevealMongoDBOnHover/>}
						{revealTechInitial.html && <RevealHTMLOnHover/>}
						{revealTechInitial.tailwindcss && <RevealTailwindOnHover/>}
						{revealTechInitial.postgres && <RevealPostgresOnHover/>}

					</div>
				</CardItem>
				<div className="flex justify-between items-center mt-10">
					<CardItem
						translateZ={20}
						as="a"
						href={props.githubLink}
						target="__blank"
						className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
					>
						<div className="whitespace-nowrap flex flex-row justify-center items-center mr-2 border rounded p-1">
							<Github
								className="size-4 mr-1"
							/>
							Source Code →
						</div>
					</CardItem>

					{props.tryLink && (
						<CardItem
							translateZ={20}
							as="a"
							href={props.tryLink}
							target="__blank"
							className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
						>
							Try now
						</CardItem>
					)}
					{props.wip && (
						<CardItem
							translateZ={20}
							as="span"
							className="flex items-center px-2 py-1 rounded-xl bg-neutral-200 dark:bg-green-900/20 dark:text-neutral-300 text-xs font-bold"
						>
							<div className="rounded min-w-2 min-h-2 animate-pulse bg-green-400 mr-1"></div>Work In Progress
						</CardItem>
					)}

				</div>
			</CardBody>
		</CardContainer>
	);
}
