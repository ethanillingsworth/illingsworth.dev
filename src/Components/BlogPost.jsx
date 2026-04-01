import { useEffect, useState } from "react";
import posts from "../data/blogposts.json";
import { marked } from "marked";
import Tags from "./Tags";
function BlogPost({ id, large = false }) {
	let [heading, setHeading] = useState("No Title found");
	let [content, setContent] = useState("");

	const data = posts[id];

	useEffect(() => {
		const load = async () => {
			const text = await (await fetch(data.file)).text();
			const tokens = marked.lexer(text);

			const firstHeading = tokens.find((t) => t.type === "heading");
			setHeading(firstHeading ? firstHeading.text : "No Title found");

			const paragraphs = tokens.filter((t) => t.type === "paragraph");

			for (const p of paragraphs) {
				setContent((v) => {
					return v + marked.parse(p.text) + "<br/>";
				});
			}
		};

		load();
	}, [data.file]);

	return (
		<a
			href={`/post/${id}`}
			className={`container p-4 gap-2 transition-all border-forge-muted hover:cursor-pointer border hover:border-forge-accent`}
		>
			<h3 className="border-b pb-2 border-forge-accent">{heading}</h3>
			<p
				className={large ? "line-clamp-18" : "line-clamp-4"}
				dangerouslySetInnerHTML={{ __html: content }}
			></p>
			<Tags
				tags={data.tags}
				size={large ? "sm" : "xs"}
				stared={data.featured}
			></Tags>
		</a>
	);
}

export default BlogPost;
