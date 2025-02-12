import { auth } from "./firebase.js";
import { Post } from "./funcs.js"
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

let admin = false;


onAuthStateChanged(auth, (user) => {
    if (user) {
        admin = true
    }
});



const params = new URLSearchParams(window.location.search)

const id = params.get("id")

const post = new Post(id)

const content = $("#content")

$(".splashText").text("")

$(".splashTextSmall").text("")

const data = await post.getData()

$(".splashText").text("Scroll down...")

const wrapper = $("<div/>").addClass("row").attr("id", "wrapper")

const elements = data.elements || []

const postContent = $("<div/>").addClass("col").attr("id", "postContent")

const heading = $("<h1/>").text(data.name)

if (admin) {
    heading.attr("contenteditable", true)
    heading.on("keyup", () => {
        data.name = heading.text();
    })
}

function refreshPostContent() {
    postContent.html("")
    postContent.append(heading)

    postContent.append($("<hr/>"))

    elements.forEach((element) => {
        if (element.type == "P") {
            const e = $("<p/>").html(element.text)
            if (admin) {
                e.attr("contenteditable", true)
                e.on("keyup", () => {
                    element.text = e.html();
                })
            }

            postContent.append(e)
        }
    })

    if (admin) {
        const buttons = $("<div>").addClass("row").css("margin-top", "40px")

        buttons.append($("<button>").text("Done").on("click", async () => {

            await post.setData({ elements: elements, name: data.name })
        }))

        postContent.append(buttons)
    }
}

refreshPostContent()

wrapper.append(postContent)

if (admin) {

    const adminBar = $("<div/>").addClass("col").attr("id", "adminBar")

    function addElement(type, options) {
        if (type == "P") {
            elements.push({ type: type, text: options.text })
        }
        refreshPostContent()
    }

    function addItem(name, icon, onclick) {
        const item = $("<div/>").addClass("tool row")

        const img = $("<img/>").attr("src", icon)
        const head = $("<h3/>").text(name)

        item.on("click", () => {
            onclick()
        })

        item.append(img).append(head)

        adminBar.append(item)
        return item
    }

    addItem("Paragraph", "../icons/p.png", () => {
        addElement("P", { text: "This is some placeholder text" })
    })

    wrapper.append(adminBar)
}

content.append(wrapper)

