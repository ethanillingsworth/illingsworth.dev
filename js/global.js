import { NavBar } from "./funcs.js";


const nav = new NavBar()


nav.addItem("Home", "../")

nav.addItem("Projects", "../projects")

nav.addItem("Contact", "../contact", true)
nav.addItem("About Me", "../about", true)


const splashWrapper = $("<div/>").addClass("splashWrap col")

const splash = $("<div/>").addClass("splash row")

const splashText = $("<h2/>").text("Welcome to illingsworth.dev").addClass("splashText")
const wrapper = $("<div/>").addClass("wrapper")

const t = $("<h3/>").text("Where dark mode reigns supreme.").addClass("splashTextSmall typewriter")

wrapper.append(t)



splashWrapper.append(splash)

splashWrapper.append(splashText)
splashWrapper.append(wrapper)


$(document.body).append(splashWrapper)
$(document.body).append($("<div/>").attr("id", "content"))

const footer = $("<div/>").attr("id", "footer")

const copyright = $("<h3/>").text("© 2025 Ethan Illingsworth")

footer.append(copyright)

$(document.body).append(footer)
