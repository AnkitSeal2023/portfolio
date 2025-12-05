import { ThreeDCardDemo } from "./projectslist";

export default function Projects() {
	return (
		<div className="flex flex-col justify-center py-10 w-full">
			<h1 className="text-xl font-bold mb-5">Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2">
				<div className="flex justify-center">
					<ThreeDCardDemo
						label="Amazon Clone"
						description="An e-commerce platform that replicates Amazon's core features."
						imageSrc="/proj_amazon.jpg"
						githubLink="https://github.com/AnkitSeal2023/amazon_clone"
						tryLink="https://github.com/AnkitSeal2023/amazon_clone"
					/>
				</div>
				<div className="flex justify-center">
					<ThreeDCardDemo
						label="Portfolio Website"
						description="A personal portfolio website to showcase my projects and skills."
						imageSrc="/proj_portfolio.png"
						githubLink="https://github.com/AnkitSeal2023/portfolio"
						tryLink="https://ankitseal.in"
					/>
				</div>
				<div className="flex justify-center">
					<ThreeDCardDemo
						label="Modchat"
						description="A chat application with modern UI and realtime chat moderation."
						imageSrc="/proj_coming_soon.jpg"
						githubLink="https://github.com/AnkitSeal2023/modchat_client"
						wip={true}
					/>
				</div>
				<div className="flex justify-center">
					<ThreeDCardDemo
						label="PassMan"
						description="A secure password manager to store and manage your passwords safely."
						imageSrc="/proj_passman.png"
						githubLink="https://github.com/AnkitSeal2023/passman"
					/>
				</div>
			</div>
		</div>
	);
}
