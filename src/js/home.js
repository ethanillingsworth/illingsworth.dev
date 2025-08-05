import $ from "jquery"

import { Project } from "./main.js"


const featuredProject = Project.getFeatured()

featuredProject.display($("#featured-project"), false)