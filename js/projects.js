import { Project, sleep } from "./funcs.js"

const content = $("#content")

$(".splashText").text("Projects")

$(".splashTextSmall").text("See my progress below...")

const grid = $("<div/>").addClass("grid")
content.append(grid)

const projects = await Project.getAllProjects()

projects.forEach(async p => {
    const project = new Project(p.id)

    await project.display(grid)

    await sleep(1000)
});
