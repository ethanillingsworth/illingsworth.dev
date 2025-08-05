import $ from "jquery"
import { Project } from "./main.js"


for (let project of Project.getAll()) {
    console.log(project)
    const data = project.get()
    if (data.archived) {
        project.display($("#archive-row"))
    }
    else {
        project.display($("#projects-row"))
    }
}