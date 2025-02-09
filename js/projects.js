import { Project, sleep } from "./funcs.js"

const content = $("#content")

$(".splashText").text("Projects")

$(".splashTextSmall").text("See my progress below...")

const grid = $("<div/>").addClass("grid")
content.append(grid)
new Project().display(grid)
await sleep(1000)
new Project().display(grid)
