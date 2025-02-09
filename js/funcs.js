
import "./jquery.js";

export class NavBar {
    constructor() {

        this.heading = $("<a/>").attr("href", "../").append($("<h1/>").text("illingsworth.dev")).attr("id", "heading")
        this.bar = $("<div/>").addClass("bar row")
        this.back = $("<div/>").addClass("back row")
        this.front = $("<div/>").addClass("front row")


        this.bar.append(this.heading)
        this.bar.append(this.front)
        this.bar.append(this.back)

        $(document.body).append(this.bar);
    }


    addItem(text, url, back = false) {
        const link = $("<a/>").attr("href", url).text(text).addClass("item")
        if (back) {
            this.back.append(link)
        }
        else {
            this.front.append(link)
        }
    }
}

export class Project {
    constructor() {

    }

    display(content = $("#content")) {


        const project = $("<div/>").addClass("project col")

        const n = $("<h2/>").text("Lokal")
        const desc = $("<p/>").text("A project to simplify the event hosting process for clubs and organizations alike.")


        const progressHead = $("<h3/>").text("v10 Completion: 37.4%")
        const progressBar = $("<progress/>").attr("value", "37.4").attr("max", "100")

        project.append(n)
        project.append(desc)
        project.append(progressHead)
        project.append(progressBar)

        content.append(project)
    }
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}