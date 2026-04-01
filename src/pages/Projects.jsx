import Hero from "../Components/Hero";
import Section from "../Components/Section";
import hero from "../imgs/backdrops/projects.webp";
import projects from "../data/projects.json";
import Project from "../Components/Project";

export default function Projects() {
	return (
		<>
			<Hero heading="My Projects" image={hero}>
				Scroll down to view all my projects
			</Hero>

			<Section heading="Active:" grid gridCols={4}>
				{Object.entries(projects)
					.filter((v) => !v[1].archived)
					.map((v) => {
						return <Project key={v[0]} id={v[0]} />;
					})}
			</Section>

			<Section heading="Archived:" grid gridCols={4}>
				{Object.entries(projects)
					.filter((v) => v[1].archived)
					.map((v) => {
						return <Project key={v[0]} id={v[0]} />;
					})}
			</Section>
		</>
	);
}
