import $ from "jquery";

import { BlogPost, Project, Section, SubSection, Tag } from "./main.js";

const aboutMe = new Section("About Me");

aboutMe.addElement(
	$("<p/>")
		.text(
			`At heart I'm a developer who aims to make helpful software. I'm currently working with tools like Webpack, TailwindCSS, and jQuery to make that dream come true. I am currently a Junior in highschool trying to make 10 year old me's dreams a reality, one line of code at a time. I like to keep my projects organized, even if my life currently isnt. I work on projects I believe in. You should too.`
		)
		.addClass("text-lg text-forge-text")
);

const featProj = new Section("Featured Project");

const featuredProject = Project.getFeatured();

if (featuredProject) featuredProject.display(featProj.sec, false);

const skills = new Section("Skills");

const languagesSection = new SubSection("Languages");

const langGrid = $("<div/>").addClass(
	"grid grid-cols-1 md:grid-cols-3 grid-flow-row pt-4 gap-6"
);

languagesSection.addElement(langGrid);

skills.addSection(languagesSection);

let langs = [
	"HTML5",
	"JavaScript",
	"CSS3",
	"Python",
	"Java",
	"Swift",
	"Markdown",
];

langs = langs.map((v) => {
	return Tag.get(v);
});

langs.sort((a, b) => b.percent - a.percent);

for (const lang of langs) {
	langGrid.append(Tag.getCard(lang));
}

const frameworksSection = new SubSection("Frameworks");

const frameGrid = $("<div/>").addClass(
	"grid grid-cols-1 md:grid-cols-3 grid-flow-row pt-4 gap-6"
);

frameworksSection.addElement(frameGrid);

skills.addSection(frameworksSection);

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

frameworks = frameworks.map((v) => {
	return Tag.get(v);
});

console.log(frameworks);

frameworks.sort((a, b) => b.percent - a.percent);

for (const framework of frameworks) {
	frameGrid.append(Tag.getCard(framework));
}

const devSection = new SubSection("Development Workflow");

const devGrid = $("<div/>").addClass(
	"grid grid-cols-1 md:grid-cols-3 grid-flow-row pt-4 gap-6"
);

devSection.addElement(devGrid);

skills.addSection(devSection);

let devFlow = ["VSCode", "Github", "NPM"];

devFlow = devFlow.map((v) => {
	return Tag.get(v);
});

devFlow.sort((a, b) => b.percent - a.percent);

for (const dev of devFlow) {
	devGrid.append(Tag.getCard(dev));
}
