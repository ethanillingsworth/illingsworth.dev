import $ from "jquery";
import "../css/tailwind.css";
import { marked } from "marked";

$("header").addClass("nav").html(`<a href="/" class=" w-auto">
                <img class="link-icon" id="logo" src="/imgs/logo.png" />
            </a>
            <hr class="border-forge-accent" />

            <a href="/">
                <img class="link-icon" src="/icons/home.svg" alt="Home Page" />
				<h3 class="hidden">Home Page</h3>
            </a>

            <a href="/projects">
                <img
                    class="link-icon"
                    src="/icons/projects.svg"
                    alt="Projects"
                />
				<h3 class="hidden">Projects</h3>
            </a>

			<a href="/blog"">
                <img
                    class="link-icon"
                    src="/icons/blog.svg"
                    alt="Blog"
                />
				<h3 class="hidden">My Blog</h3>
            </a>

            <a href="/services"">
                <img
                    class="link-icon"
                    src="/icons/services.svg"
                    alt="Services"
                />
				<h3 class="hidden">Services</h3>
            </a>
			
			<div class="pullout">
				<img src="/icons/expand.svg" class="transition-all" alt="Expand">
			</div>
			
			`);


let expanded = false

$(".pullout").on("click", () => {
	if (!expanded) {
		$(".pullout img").addClass("rotate-180")
		$("header a h3").removeClass("hidden")
	}
	else {
		$(".pullout img").removeClass("rotate-180")
		$("header a h3").addClass("hidden")
	}

	expanded = !expanded
})

export class JSON {
	/**
	 * Load a JSON file
	 * @param {string} filename
	 * @returns {object}
	 */
	static async load(filename) {
		// Load JSON data
		return (await (await fetch(filename)).json()) || {};
	}
}

export class Tag {
	/** @type {{string: Tag}} */
	static tags = {
		JavaScript: new Tag(
			"JavaScript",
			"yellow-300",
			"yellow-500",
			90,
			"+4",
			"Core language of the web, versatile and essential for frontend and backend development.",
			["Frontend", "Backend"]
		),
		HTML5: new Tag(
			"HTML5",
			"orange-300",
			"orange-500",
			90,
			"+4",
			"Markup language for structuring content on the web.",
			["Frontend"]
		),
		CSS3: new Tag(
			"CSS3",
			"blue-300",
			"blue-500",
			80,
			"+4",
			"Stylesheet language used to design and layout web pages.",
			["Frontend"]
		),
		"Tailwind CSS": new Tag(
			"Tailwind CSS",
			"cyan-300",
			"cyan-500",
			85,
			"+3",
			"Utility-first CSS framework for rapidly building custom designs.",
			["Frontend"]
		),
		jQuery: new Tag(
			"jQuery",
			"purple-300",
			"purple-500",
			80,
			"+4",
			"JavaScript library that simplifies DOM manipulation and event handling.",
			["Frontend"]
		),
		Webpack: new Tag(
			"Webpack",
			"gray-300",
			"gray-500",
			70,
			"+2",
			"Module bundler for JavaScript applications, useful for modern workflows.",
			["Frontend"]
		),
		Firebase: new Tag(
			"Firebase",
			"rose-300",
			"rose-500",
			65,
			"+2",
			"Backend-as-a-service platform with hosting, authentication, and databases.",
			["Backend"]
		),
		Python: new Tag(
			"Python",
			"sky-300",
			"sky-500",
			75,
			"+3",
			"High-level general-purpose language popular in scripting, AI, and data science.",
			["Backend"]
		),
		Java: new Tag(
			"Java",
			"red-300",
			"red-500",
			40,
			"1",
			"Object-oriented programming language widely used for enterprise and Android apps.",
			["Backend"]
		),
		Swift: new Tag(
			"Swift",
			"orange-200",
			"orange-400",
			30,
			"< 1",
			"Modern programming language for iOS and macOS app development.",
			["Frontend"]
		),
		"Python Packaging (Poetry)": new Tag(
			"Python Packaging (Poetry)",
			"emerald-300",
			"emerald-500",
			60,
			"+2",
			"Dependency management and packaging tool for Python projects.",
			["Backend"]
		),
		SwiftUI: new Tag(
			"SwiftUI",
			"indigo-300",
			"indigo-500",
			30,
			"< 1",
			"Apple's declarative framework for building iOS, macOS, and watchOS UIs.",
			["Frontend"]
		),
		React: new Tag(
			"React",
			"teal-300",
			"teal-500",
			20,
			"< 1",
			"JavaScript library for building user interfaces with components.",
			["Frontend"]
		),
		JSON: new Tag(
			"JSON",
			"amber-300",
			"amber-500",
			90,
			"+4",
			"Lightweight data-interchange format widely used for APIs and configuration.",
			["Frontend", "Backend"]
		),
		Markdown: new Tag(
			"Markdown",
			"gray-500",
			"gray-700",
			70,
			"+4",
			"Plain-text formatting syntax commonly used for documentation and content.",
			["Frontend", "Backend"]
		),
		VSCode: new Tag(
			"VSCode",
			"blue-500",
			"blue-600",
			85,
			"+4",
			"My main code editor, fully customized with extensions and shortcuts for efficient development.",
			["Workflow"]
		),
		Github: new Tag(
			"Github",
			"gray-200",
			"black",
			80,
			"+4",
			"Version control and collaboration platform — used daily for managing projects and codebases.",
			["Workflow"]
		),
		NPM: new Tag(
			"NPM",
			"red-600",
			"red-700",
			75,
			"+3",
			"Package manager for JavaScript, managing dependencies and running scripts seamlessly.",
			["Workflow"]
		),
		Backend: new Tag("Backend", "green-300", "green-500"),
		Frontend: new Tag("Frontend", "blue-300", "blue-500"),
		Workflow: new Tag("Workflow", "yellow-300", "yellow-500"),
		Other: new Tag("Other", "gray-400", "gray-600"),
	};

	constructor(
		name,
		text,
		bg,
		percent = null,
		exp = null,
		desc = null,
		tags = []
	) {
		this.name = name;
		this.text = text;
		this.bg = bg;
		this.percent = percent;
		this.exp = exp;
		this.desc = desc;
		this.tags = tags;
	}

	static get(tagName) {
		return Tag.tags[tagName];
	}

	static getTag(tag) {
		return $(
			`<span class="text-${Tag.tags[tag].text} bg-${Tag.tags[tag].bg}/50 tag">${tag}</span>`
		);
	}

	static getCard(tag) {
		const card = $("<div/>").addClass("card");

		const head = $("<h4/>").html(`${tag.name}
				<span class="float-right font-normal text-base">${tag.percent}%</span>`);

		const progress = $(`<progress
				value="${tag.percent}"
				max="100"
				class="text-${tag.bg}"
			></progress>`);

		const exp = $("<h5/>").html(
			`Experience:<span class="float-right">${tag.exp} Years</span>`
		);

		const desc = $("<p/>").text(tag.desc);

		const tags = $("<div/>").addClass("flex flex-row gap-3");

		for (const tName of tag.tags) {
			tags.append(Tag.getTag(tName));
		}

		card.append(head, progress, exp, desc, tags);
		return card;
	}
}

export class SectionTemplate {
	constructor(name, heading, parent) {
		this.sec = $("<section/>").attr("tabindex", "0");

		this.sec.append($(`<${heading}/>`).text(name));
		this.sec.append($("<hr/>"));
	}

	addElement(element) {
		this.sec.append(element);
	}
}

export class Section extends SectionTemplate {
	constructor(name) {
		super(name, "h2");
		$(".sections").append(this.sec);
	}

	addSection(section) {
		this.sec.append(section.sec);
	}
}

export class SubSection extends SectionTemplate {
	constructor(name) {
		super(name, "h3");
	}
}

const projects = await JSON.load("/data/projects.json");
const posts = await JSON.load("/data/blogposts.json");

export class Project {
	constructor(id) {
		this.id = id;
	}

	get() {
		return projects[this.id] || {};
	}

	static getAll() {
		return Object.entries(projects)
			.sort(([_, a], [__, b]) => {
				return (b.featured === true) - (a.featured === true);
			})
			.map(([key, _]) => new Project(key));
	}

	display(parent, vertical = true) {
		const data = this.get();

		const content = $("<div/>").addClass(
			"flex flex-col gap-6 items-start h-full"
		);

		const image = $("<img/>")
			.attr("alt", `${data.title}`)
			.attr("src", `/imgs/previews/${this.id}.png`)
			.addClass("w-full object-cover");

		if (!vertical) {
			content.addClass("md:flex-row");
			image.addClass("md:w-1/3");
		}

		const textContent = $("<div/>").addClass(
			"flex flex-col gap-2 w-full h-full"
		);

		const title = $("<h3/>").text(data.title);

		const star = $("<img/>")
			.attr("alt", "Star")
			.attr("src", "/icons/star.svg")
			.addClass("h-8 aspect-square w-auto");

		const desc = $("<p/>").text(data.desc);

		const tags = $("<div/>").addClass("flex flex-row gap-3 flex-wrap");
		data.tags.sort();
		for (const tag of data.tags) {
			tags.append(Tag.getTag(tag));
		}

		const githubButton =
			$(`<a class="badge bg-black" href="${data.github}" target="_blank">
                    <img alt="Github Icon" class="icon" src="/icons/github.svg">
                    <span>Github</span>
                </a>`);

		const webButton =
			$(`<a class="badge bg-blue-500" href="${data.web}" target="_blank">
                    <img alt="Web Icon" class="icon" src="/icons/web.svg">
                    <span>Website</span>
                </a>`);
		const bottom = $("<div/>").addClass(
			"flex flex-row gap-3 mt-auto pt-4 place-items-end"
		);

		const buttons = $("<div/>").addClass(
			"flex flex-row ml-auto gap-3 text-base"
		);
		if (data.github) buttons.append(githubButton);
		if (data.web) buttons.append(webButton);

		if (data.featured) {
			bottom.append(star);
		}
		bottom.append(buttons);

		textContent.append(title, desc, tags, bottom);
		content.append(image, textContent);

		const card = $("<div/>").addClass("card project").attr("id", this.id);
		card.append(content);

		parent.append(card);

		return card;
	}

	static getFeatured() {
		return Object.entries(projects)
			.filter(([_, project]) => project.featured === true)
			.map(([key, _]) => new Project(key))[0];
	}
}

export class BlogPost {
	constructor(id) {
		this.id = id;
	}

	get() {
		return posts[this.id] || {};
	}

	static getAll() {
		return Object.entries(posts)
			.sort(([_, a], [__, b]) => {
				// First sort: featured posts first
				if (b.featured !== a.featured) {
					return (b.featured === true) - (a.featured === true);
				}
				// Second sort: newest date first
				return new Date(b.date) - new Date(a.date);
			})
			.map(([key, _]) => new BlogPost(key));
	}

	static getFeatured() {
		return Object.entries(posts)
			.filter(([_, project]) => project.featured === true)
			.map(([key, _]) => new BlogPost(key))[0];
	}

	async display(parent) {
		const data = this.get();

		const content = $("<a/>")
			.addClass("flex flex-col gap-2 items-start h-full card post mt-4")
			.attr("href", "/post/" + this.id);

		const star = $("<img/>")
			.attr("alt", "Star")
			.attr("src", "/icons/star.svg")
			.addClass("h-8 aspect-square w-auto float-end inline");

		const heading = $("<h3/>")
			.text(await this.getHeading())
			.addClass("w-full");
		const desc = $("<p/>")
			.html(await this.getFirstParagraph())
			.addClass("line-clamp-2");

		if (data.featured) {
			heading.append(star);
		}

		const tags = $("<div/>").addClass("flex flex-row gap-3 flex-wrap");
		data.tags.sort();
		for (const tag of data.tags) {
			tags.append(Tag.getTag(tag));
		}
		content.append(heading, desc, tags);

		parent.append(content);

		return content;
	}

	async getMarkdown() {
		return (
			(await (await fetch(this.get().file)).text()) ||
			"# Sorry we couldnt find that content!\n(Go Home)[/]"
		);
	}

	async getHtml() {
		return marked.parse(await this.getMarkdown());
	}

	async getHeading() {
		return (
			marked
				.lexer(await this.getMarkdown())
				.find((token) => token.type === "heading" && token.depth === 1)
				.text || "No Heading found"
		);
	}

	async getAllH2() {
		return (
			marked
				.lexer(await this.getMarkdown())
				.filter(
					(token) => token.type === "heading" && token.depth === 2
				)
				.map((token) => {
					return token.text;
				}) || []
		);
	}

	async getFirstParagraph() {
		return (
			marked.parse(
				marked
					.lexer(await this.getMarkdown())
					.find((token) => token.type === "paragraph").text
			) || "No Paragraph found"
		);
	}
}

$(".card").attr("tabindex", "0");
