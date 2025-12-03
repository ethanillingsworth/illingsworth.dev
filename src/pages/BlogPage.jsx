import { useEffect, useState } from "react"
import posts from "../data/blogposts.json"
import {marked} from "marked"
import { useParams } from "react-router-dom"
import hljs from 'highlight.js';

import javascript from 'highlight.js/lib/languages/javascript';

// Then register the languages you need

hljs.registerLanguage("javascript", javascript);


function BlogPost() {
    let [content, setContent] = useState("No Content found")
    const { id } = useParams()
    const data = posts[id]

    useEffect(() => {
        const load = async () => {
            const text = await (await fetch(data.file)).text();
            setContent(marked.parse(text))
        };

        load();

    }, [data.file]);

    useEffect(() => {
        hljs.highlightAll();
    }, [content]);

    return (<div className="md" dangerouslySetInnerHTML={{ __html: content }}>

    </div>);
}

export default BlogPost;