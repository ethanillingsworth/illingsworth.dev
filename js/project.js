import { Post, Project, sleep } from "./funcs.js"

const content = $("#content")

const params = new URLSearchParams(window.location.search)

const id = params.get("id")

const project = new Project(id)

$(".splashText").text("")

$(".splashTextSmall").text("")

const data = await project.getData()

$(".splashText").text(data.name)

document.title = "Illingsworth - " + data.name

$(".splashTextSmall").text(data.tag)


const grid = $("<div/>").addClass("grid")

const posts = await project.getPosts()
content.append(grid)

posts.forEach(async p => {
    const post = new Post(p.id)

    await post.display(grid)
    await sleep(1000)

});