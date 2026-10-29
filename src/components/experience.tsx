"use client";

const experiences = [
	{
		id: "babysteps",
		company: "Babysteps",
		role: "Full-Stack Developer Intern",
		date: "Feb 2026 - April 2026",
		location: "Gurgaon(remote)",
		link: "https://babysteps.world",
		description: [
			"Built and maintained scalable full-stack features using MERN stack, Next.js, and Payload CMS",
			"Designed and implemented 15+ RESTful API endpoints with secure authentication and role-based access control",
			"Developed a context-driven AI recommendation module that processes structured user data and generates personalized outputs with persistent storage",
			"Engineered a gamification layer (credits, XP, engagement tracking) ensuring transactional consistency and concurrency-safe updates",
			"Optimized CRUD operations and improved database reliability under concurrent request handling",
		],
		technologies: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Payload CMS"]
	}
];

interface ExperienceProps {
	showAllLink?: boolean;
}

export default function Experience({ showAllLink = true }: ExperienceProps) {
	return (
		<section
			id="experience"
			className="flex flex-col justify-center py-10 w-full max-w-3xl z-18"
		>
			<h1 className="text-2xl font-bold mb-8">Experience</h1>
			<div className="flex flex-col gap-8">
				{experiences.map((exp) => (
					<div key={exp.id} className="flex flex-col">
						<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start text-left w-full">
							<div className="flex flex-col">
								<h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">
									{exp.link ? (
										<a href={exp.link} target="_blank" rel="noopener noreferrer">
											{exp.company}
										</a>
									) : (
										exp.company
									)}
								</h3>
								<p className="text-[15px] text-neutral-600 dark:text-neutral-400 mt-0.5">{exp.role}</p>
							</div>
							<div className="flex flex-col sm:items-end mt-2 sm:mt-0 text-sm text-neutral-500 dark:text-neutral-500">
								<span>{exp.date}</span>
								{exp.location && <span>{exp.location}</span>}
							</div>
						</div>

						<div className="pt-4 pb-2">
							<h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
								What I've done
							</h4>
							<ul className="flex flex-col gap-3 text-[15px] text-neutral-700 dark:text-neutral-300">
								{exp.description.map((item, idx) => (
									<li key={idx} className="flex">
										<span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600"></span>
										<span className="leading-relaxed">{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
