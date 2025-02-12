
import { query, getDocs, collection, doc, getDoc, setDoc, where } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-firestore.js";


import "./jquery.js";
import { db } from "./firebase.js";

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
    constructor(id) {
        this.id = id
    }

    static async getAllProjects() {
        return await getDocs(query(collection(db, "projects")))
    }

    async getPosts() {
        return await getDocs(query(collection(db, "posts"), where("parent", "==", this.id)))
    }

    async getData() {
        const d = await getDoc(doc(db, "projects", this.id))

        if (d.exists()) {
            return d.data()
        }
        else {
            console.error("Data could not be fetched for project: " + this.id)
            return {}
        }
    }

    async display(content = $("#content")) {

        const data = await this.getData()


        const project = $("<div/>").addClass("project col")

        const n = $("<h2/>").text(data.name)
        const desc = $("<p/>").text(data.desc)


        const progressHead = $("<h3/>").text(`${data.currentTask}: ${data.percentDone}%`)
        const progressBar = $("<progress/>").attr("value", data.percentDone).attr("max", "100")

        project.append(n)
        project.append(desc)
        project.append(progressHead)
        project.append(progressBar)

        project.on("click", () => {
            window.location.href = "../project/index.html?id=" + this.id
        })

        content.append(project)
    }
}


export class Post {
    constructor(id) {
        this.id = id
    }

    async getData() {
        const d = await getDoc(doc(db, "posts", this.id))

        if (d.exists()) {
            return d.data()
        }
        else {
            console.error("Data could not be fetched for post: " + this.id)
            return {}
        }
    }

    async setData(data) {
        await setDoc(doc(db, "posts", this.id), data, { merge: true })
    }

    async display(content = $("#content")) {

        const data = await this.getData()


        const post = $("<div/>").addClass("post col")

        const n = $("<h3/>").text(data.name)
        const desc = $("<p/>").text(data.desc)

        post.append(n)
        post.append(desc)

        post.on("click", () => {
            window.location.href = "../post/index.html?id=" + this.id
        })

        content.append(post)
    }
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}