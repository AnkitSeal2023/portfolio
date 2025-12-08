"use client";

import {
	ContributionGraph,
	ContributionGraphBlock,
	ContributionGraphCalendar,
	ContributionGraphFooter,
	ContributionGraphLegend,
	ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import { unstable_cache } from "next/cache";
import { eachDayOfInterval, endOfYear, formatISO, startOfYear } from "date-fns";

type GitHubResponse = {
	years: {
		[year: string]: {
			total: number;
			contributions: {
				date: string;
				count: number;
				level: number;
			}[];
		};
	};
};

const username = "AnkitSeal2023";
export const getCachedContributions = unstable_cache(
	async () => {
		const url = new URL(
			`/v4/${username}`,
			"https://github-contributions-api.jogruber.de",
		);

		const response = await fetch(url);
		const data = (await response.json()) as GitHubResponse;

		const year = new Date().getFullYear().toString();
		const yearData = data.years?.[year];
		const contributions = yearData?.contributions ?? [];
		const total = yearData?.total ?? 0;

		return { contributions, total };
	},
	["github-contributions"],
	{ revalidate: 60 * 60 * 24 },
);

// const maxCount = 20;
// const maxLevel = 4;
// const now = new Date();
// const days = eachDayOfInterval({
// 	start: startOfYear(now),
// 	end: endOfYear(now),
// });

// const data = days.map((date) => {
// 	const c = Math.round(
// 		Math.random() * maxCount - Math.random() * (0.8 * maxCount),
// 	);
// 	const count = Math.max(0, c);
// 	const level = Math.ceil((count / maxCount) * maxLevel);

// 	return {
// 		date: formatISO(date, { representation: "date" }),
// 		count,
// 		level,
// 	};
// });

export async function getContributionGraphData() {
	const { contributions } = await getCachedContributions();

	return contributions.map((c) => ({
		date: c.date,
		count: c.count,
		level: c.level,
	}));
}

const Example = async () => {
	const data = await getContributionGraphData();

	return (
		<ContributionGraph data={data}>
			<ContributionGraphCalendar>
				{({ activity, dayIndex, weekIndex }) => (
					<ContributionGraphBlock
						activity={activity}
						dayIndex={dayIndex}
						weekIndex={weekIndex}
					/>
				)}
			</ContributionGraphCalendar>

			<ContributionGraphFooter>
				<ContributionGraphTotalCount />
				<ContributionGraphLegend />
			</ContributionGraphFooter>
		</ContributionGraph>
	);
};

export default Example;
