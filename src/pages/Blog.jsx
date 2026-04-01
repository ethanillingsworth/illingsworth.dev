import Hero from "../Components/Hero";
import Section from "../Components/Section";
import hero from "../imgs/backdrops/home.webp";
import blogposts from "../data/blogposts.json";
import BlogPost from "../Components/BlogPost";

export default function Blog() {
	return (
		<>
			<Hero heading="My Blog" image={hero}>
				Scroll down to view all my posts
			</Hero>

			<Section grid gridCols={3}>
				{Object.entries(blogposts)
					.sort((a, b) => {
						return new Date(b[1].date) - new Date(a[1].date);
					})
					.map((v) => {
						return <BlogPost id={v[0]} />;
					})}
			</Section>
		</>
	);
}
