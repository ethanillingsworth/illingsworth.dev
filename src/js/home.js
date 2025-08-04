import "../css/tailwind.css"
import $ from "jquery"

import { Project } from "./main.js"


const featuredProject = Project.getFeatured()

featuredProject.display($("#featured-project")).addClass("w-1/3")