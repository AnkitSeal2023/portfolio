"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Github } from "lucide-react";

type ThreeDCardDemoProps = {
	label: string;
	description: string;
	imageSrc: string;
	githubLink: string;
	tryLink?: string;
	wip?: boolean;
}

export function ThreeDCardDemo(props: ThreeDCardDemoProps) {
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
				</CardItem>
				<div className="flex justify-between items-center mt-20">
					<CardItem
						translateZ={20}
						as="a"
						href={props.githubLink}
						target="__blank"
						className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
					>
						<div className="flex flex-row justify-center items-center mr-2 border rounded p-1">
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
							className="flex items-center px-2 py-1 rounded-xl bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 text-xs font-bold"
						>
							<div className="rounded min-w-2 min-h-2 bg-green-400 mr-1"></div>Work In Progress
						</CardItem>
					)}

				</div>
			</CardBody>
		</CardContainer>
	);
}
