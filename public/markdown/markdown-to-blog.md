<!--
title: "From Markdown to Blog"
date: "2025-08-06"
tags: ["Markdown","Tailwind CSS","CSS3"]
-->

# From Markdown to Blog

So recently I added a blog section to my [website](https://illingsworth.dev)
(I mean you're reading it arent you?). On the site, all of the posts (this post
for instance) are made using markdown and then converted to html later along with
some css styling with Tailwind.
I wanted to make this post to explain how these posts were made in a series of steps.

## Table of Contents

- [From Markdown to Blog](#from-markdown-to-blog)
  - [Table of Contents](#table-of-contents)
  - [Represent Posts in JSON](#represent-posts-in-json)
  - [Markdown Files](#markdown-files)
  - [Convert to HTML](#convert-to-html)
  - [Style the Markdown](#style-the-markdown)
    - [Tailwind Styles](#tailwind-styles)
  - [Post Build Script](#post-build-script)
  - [Ending notes](#ending-notes)

## Represent Posts in JSON

The first step in my process was to find a way to represent the posts in JSON.
This was so I could store metadata that can't be stored in markdown.
Such as the date, if its featured or not, and any tags for the post.

So i came up with this schema:

```json
"my-first-blog": {
    "date": "2025-08-05",
    "file": "/markdown/my-first-blog.md",
    "tags": [
        "Other"
    ],
    "featured": false
},
```

This allows me to store some data and also provide a link to the markdown which
can be rendered later.

## Markdown Files

The next step was to link up the markdown files into javascript. For this I used
the [marked libray](https://marked.js.org/), in summary it gives a variety of
functions to work with markdown files. Marked was then used to create the
BlogPost API which is held with all the other classes.

The Blogpost API is used to fetch data for a post, display the post, fetch the markdown, etc.
Let's talk about the one pertaining to getting the markdown from the `file` param in the JSON.

First we need a markdown file:

```md
<!-- markdown/sample.md -->
# This is a sample file

Insert some text here...
```

Then we hook it up in our `blogposts.json`

```json
// blogposts.json
{
    "sample": {
        "date": "2025-08-05",
        "file": "/markdown/sample.md",
        "tags": ["Other"]
    }
}
```

And finally we can get the content with the BlogPost API

```js
import { BlogPost } from "./main.js";

const post = new BlogPost("sample")
const markdownContent = await post.getMarkdown()

console.log(markdownContent)
// # This is a sample file
//
// Insert some text here...
```

## Convert to HTML

The next step is to convert it to html, which omg we have a BlogPost API function for that!
My recommendation for any project, stick things in classes then import when you need it.
Helps keep me organized.

Anyway, to get the html from the markdown we just call `getHtml()`

```js
import { BlogPost } from "./main.js";

const post = new BlogPost("sample")
const htmlContent = await post.getHtml()

// add to the pages content
$("#content").append(htmlContent)
```

Well we now have the markdown, converted it to html and then added it to the content.
Only issue is, it dosent look quite right, this is because I modified other elements for the site
with tailwind. Which brings us too...

## Style the Markdown

To style the markdown (or well html?) I added another class to .content.

```html
<div class="content md"></div>
```

The .md class will act as a parent class to stylize the elements like markdown instead of the normal
illingsworth.dev format. I've attached the tailwindcss for all the elements below. Alternativly you can skip that and move onto the [next section](#post-build-script).

### Tailwind Styles

```css
@import "tailwindcss";

@layer base {
    .md {
        @apply !text-white
    }

    .md h1 {
        @apply text-4xl border-b-2 pb-3 border-forge-accent w-full;
    }

    .md h2 {
        @apply text-3xl border-b-2 pb-3 border-forge-muted w-full;
    }

    .md h3 {
        @apply text-2xl;
    }

    .md h4 {
        @apply text-xl;
    }

    .md h5 {
        @apply text-lg;
    }

    .md p, .md ol, .md ul, .md table {
        @apply text-lg whitespace-normal text-white
    }

    .md blockquote {
        @apply bg-forge-surface/50 p-4 rounded-2xl;
    }

    .md code {
        @apply rounded-2xl bg-forge-gold/10 p-1 px-2 text-forge-gold text-wrap
    }

    .md ul {
        @apply list-disc list-outside pl-6;
    }

    .md ul ul {
        @apply pl-6;
    }

    .md ol {
        @apply list-decimal list-outside pl-6;
    }

    .md ol ol {
        @apply pl-6;
    }

    .md a {
        @apply text-forge-accent hover:underline
    }

    .md img {
        @apply max-w-64 max-h-64 object-cover rounded-xl inline
    }

    .md blockquote p {
        @apply text-white leading-12
    }

    .md table td,
    .md table th {
        @apply p-2;
    }

    .md th {
        @apply text-left
    }

    .md thead {
        @apply border-b-2 border-forge-accent
    }
}
```

## Post Build Script

The next problem I had was, that it just takes so much effort to make a post. I need to create 2 files and fill them out. Why dont I just automate this? Well that's exactly what I did.

When the script is run, it prompts you with a series of questions.

```
✔ Enter blog post slug (e.g. my-first-blog): markdown-to-blog
✔ Enter blog post title: From Markdown to Blog
✔ Enter publish date (YYYY-MM-DD): 2025-08-06
✔ Enter tags (comma-separated): Markdown, Frontend, Tailwind CSS, CSS3
✔ Is this a featured post? Yes
```

Once these are all filled out, it appends to the json file, creates a new markdown file and updates the sitemap.xml, examples listed below.

JSON File:

```json
{
    "my-first-blog": {
        "date": "2025-08-05",
        "file": "/markdown/my-first-blog.md",
        "tags": [
            "Other"
        ],
        "featured": false
    },
    "markdown-to-blog": {
        "date": "2025-08-06",
        "file": "../markdown/markdown-to-blog.md",
        "tags": [
            "Markdown",
            "Tailwind CSS",
            "CSS3"
        ],
        "featured": true
    }
}
```

New Markdown File:

```md
<!--
title: "From Markdown to Blog"
date: "2025-08-06"
tags: ["Markdown","Tailwind CSS","CSS3"]
-->

# From Markdown to Blog

Write your content here...

```

Portion added to sitemap.xml:

```html
<url>
    <loc>https://illingsworth.dev/blog/markdown-to-blog</loc>
    <lastmod>2025-08-06</lastmod>
    <priority>0.6</priority>
</url>
```

## Ending notes

And that's how I made these blog posts work, feel free to checkout the [github](https://github.com/ethanillingsworth/illingsworth.dev) for this project. There you can find all of the code used to make these posts which you can use for your own projects. Anyway that's all for now, thanks for reading!
