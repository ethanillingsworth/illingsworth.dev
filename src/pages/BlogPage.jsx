import { useEffect, useState } from "react";
import posts from "../data/blogposts.json";
import { marked } from "marked";
import { useParams } from "react-router-dom";
import hljs from "highlight.js";

import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml"; // `xml` = html/svg/xhtml
import css from "highlight.js/lib/languages/css";
import json from "highlight.js/lib/languages/json";
import markdown from "highlight.js/lib/languages/markdown";
import bash from "highlight.js/lib/languages/bash";

import "highlight.js/styles/atom-one-dark.css";

// Register them with hljs
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("json", json);

hljs.registerLanguage("html", html);
hljs.registerLanguage("css", css);
hljs.registerLanguage("markdown", markdown);
hljs.registerLanguage("bash", bash);

function BlogPage() {
	let [content, setContent] = useState("No Content found");
	const { id } = useParams();
	const data = posts[id];

	useEffect(() => {
		const load = async () => {
			const text = await (await fetch(data.file)).text();
			setContent(marked.parse(text));
		};

		load();
	}, [data.file]);

	useEffect(() => {
		hljs.highlightAll();

		for (const heading of Object.values(
			document.querySelectorAll(
				".md h1, .md h2, .md h3, .md h4, .md h5, .md h6",
			),
		)) {
			heading.id = heading.textContent.toLowerCase().replaceAll(" ", "-");
		}
	}, [content, data.file]);

	return (
		<div className="md" dangerouslySetInnerHTML={{ __html: content }}></div>
	);
}

export default BlogPage;
