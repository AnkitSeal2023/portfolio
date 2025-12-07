import { ThreeDCardDemo } from "./projectCard";

export default function Projects() {
	return (
		<section
			id="projects"
			className="flex flex-col justify-center py-10 w-full"
		>
			<h1 className="text-3xl font-bold mb-5">Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2">
				<div className="flex justify-center">
					<ThreeDCardDemo
						label="Amazon Clone"
						description="An e-commerce platform that replicates Amazon's core features."
						imageSrc="/proj_amazon.jpg"
						githubLink="https://github.com/AnkitSeal2023/amazon_clone"
						tryLink="https://github.com/AnkitSeal2023/amazon_clone"
						techstack={{
							js: true,
							reactjs: true,
							css: true,
							expressjs: true,
							mongodb: true,
						}}
					/>
				</div>
				<div className="flex justify-center">
					<ThreeDCardDemo
						label="Portfolio Website"
						description="A personal portfolio website to showcase my projects and skills."
						imageSrc="/proj_portfolio.png"
						githubLink="https://github.com/AnkitSeal2023/portfolio"
						tryLink="https://ankitseal.in"
						techstack={{
							aceternity: true,
							nextjs: true,
							ts: true,
							tailwindcss: true,
						}}
					/>
				</div>
				<div className="flex justify-center">
					<ThreeDCardDemo
						label="Modchat"
						description="A chat application with modern UI and active chat moderation."
						imageSrc="/proj_coming_soon.jpg"
						githubLink="https://github.com/AnkitSeal2023/modchat_client"
						wip={true}
						techstack={{
							ts: true,
							nextjs: true,
							tailwindcss: true,
							go: true,
							postgres: true,
						}}
					/>
				</div>
				<div className="flex justify-center">
					<ThreeDCardDemo
						label="PassMan"
						description="A secure password manager to store and manage your passwords safely."
						imageSrc="/proj_passman.png"
						githubLink="https://github.com/AnkitSeal2023/passman"
						techstack={{
							go: true,
							htmx: true,
							tailwindcss: true,
							postgres: true,
						}}
					/>
				</div>
			</div>
		</section>
	);
}
