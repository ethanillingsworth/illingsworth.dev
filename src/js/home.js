import $ from "jquery"

import { BlogPost, Project } from "./main.js"


const featuredProject = Project.getFeatured()

if (featuredProject) featuredProject.display($("#featured-project"), false)

const featuredPost = BlogPost.getFeatured()

if (featuredPost) await featuredPost.display($("#featured-blog-post"))