import $ from "jquery";
import { Project, Section, SubSection } from "./main.js";

const projects = new Section("Projects");

const active = new SubSection("Active");

const activeRow = $("<div/>").addClass("dynamic-grid");

active.addElement(activeRow);

const archive = new SubSection("Archived");

const archiveRow = $("<div/>").addClass("dynamic-grid");

archive.addElement(archiveRow);

projects.addSection(active);
projects.addSection(archive);

for (let project of Project.getAll()) {
	const data = project.get();
	if (data.archived) {
		project.display(archiveRow);
	} else {
		project.display(activeRow);
	}
}
