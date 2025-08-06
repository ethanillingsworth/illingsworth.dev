import $ from "jquery"

import { BlogPost, Project } from "./main.js"


const featuredProject = Project.getFeatured()

featuredProject.display($("#featured-project"), false)

const featuredPost = BlogPost.getFeatured()

await featuredPost.display($("#featured-blog-post"))