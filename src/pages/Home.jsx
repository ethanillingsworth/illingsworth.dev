import Hero from "../Components/Hero";
import Section from "../Components/Section";
import hero from "../imgs/backdrops/home.webp";
import profileImage from "../imgs/profile.jpeg";
import projects from "../data/projects.json";
import blogPosts from "../data/blogposts.json";
import Project from "../Components/Project";
import BlogPost from "../Components/BlogPost";

export default function Home() {
	return (
		<>
			<Hero heading="Ethan Illingsworth" image={hero}>
				An aspiring entrepreneur and developer
			</Hero>
			<Section>
				<div className="min-w-1/6">
					<img
						src={profileImage}
						className="w-full h-auto aspect-square"
					/>
				</div>
				<div className="col">
					<h2>About Me | Ethan Illingsworth</h2>
					<p>
						I am currently developing applications utilizing tools
						such as React, Firebase, and Tailwind. At the time of
						writing this I am a Junior in high school. I enjoy
						making clean projects that I can spend time working on.
						I dont mind spending months or years working on a
						project. I believe in the motto of "Progress, not
						perfection". If you can do just 1 more day, then you can
						contiune working on anything.
					</p>
					<div className="row mt-4 gap-4">
						<a href="https://github.com/ethanillingsworth">
							<img
								className="badge"
								src="https://badgelab.dev/api/badge/github"
							/>
						</a>
						<a href="https://linkedin.com/in/ethanillingsworth">
							<img
								className="badge"
								src="https://badgelab.dev/api/badge/linkedin-white"
							/>
						</a>
						<a href="mailto:illingsworth.ethan@gmail.com">
							<img
								className="badge"
								src="https://badgelab.dev/api/badge/gmail-white"
							/>
						</a>
					</div>
				</div>
			</Section>
			<Section grid gridCols={2}>
				<Section heading="Featured Project" noPadding>
					<Project
						large
						id={
							Object.entries(projects).find((v) => {
								return v[1].featured;
							})[0]
						}
					></Project>
				</Section>
				<Section heading="Featured Blog Post" noPadding>
					<BlogPost
						large
						id={
							Object.entries(blogPosts).find((v) => {
								return v[1].featured;
							})[0]
						}
					/>
				</Section>
			</Section>
		</>
	);
}
