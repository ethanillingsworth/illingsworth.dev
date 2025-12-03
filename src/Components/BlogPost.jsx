import { useEffect, useState } from "react"
import posts from "../data/blogposts.json"
import {marked} from "marked"
import Tags from "./Tags"
function BlogPost({id}) {
    let [heading, setHeading] = useState("No Title found")
    let [content, setContent] = useState("No Content found")

    const data = posts[id]

    useEffect(() => {
        const load = async () => {
            const text = await (await fetch(data.file)).text();
            const tokens = marked.lexer(text);

            const firstHeading = tokens.find(t => t.type === "heading");
            setHeading(firstHeading ? firstHeading.text : "No Title found");

            const firstParagraph = tokens.find(t => t.type === "paragraph");
            setContent(firstParagraph ? marked.parse(firstParagraph.text) : "No Content found");
        };

        load();
    }, [data.file]);

    return (<a href={`/post/${id}`} className="container p-4 gap-3 hover:scale-105 transition-all hover:cursor-pointer">
        <h3 className="border-b pb-2 border-forge-accent">{heading}</h3>
        <p className="line-clamp-2" dangerouslySetInnerHTML={{ __html: content }}></p>
        <Tags tags={data.tags} stared={data.featured}></Tags>
    </a>);
}

export default BlogPost;