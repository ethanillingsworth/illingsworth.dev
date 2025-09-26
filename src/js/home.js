import $ from "jquery";

import { BlogPost, Project, Tag } from "./main.js";

const featuredProject = Project.getFeatured();

if (featuredProject) featuredProject.display($("#featured-project"), false);

let langs = [
	"HTML5",
	"JavaScript",
	"CSS3",
	"Python",
	"Java",
	"Swift",
	"Markdown",
];

let frameworks = [
	"JSON",
	"Tailwind CSS",
	"jQuery",
	"Webpack",
	"Firebase",
	"Python Packaging (Poetry)",
	"SwiftUI",
	"React",
];

langs = langs.map((v) => {
	return Tag.get(v);
});

langs.sort((a, b) => b.percent - a.percent);

frameworks = frameworks.map((v) => {
	return Tag.get(v);
});

console.log(frameworks);

frameworks.sort((a, b) => b.percent - a.percent);

for (const lang of langs) {
	$("#langs .grid").append(Tag.getCard(lang));
}
for (const framework of frameworks) {
	$("#frameworks .grid").append(Tag.getCard(framework));
}
