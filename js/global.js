import { NavBar } from "./funcs.js";


const nav = new NavBar()


nav.addItem("Home", "../")

nav.addItem("Projects", "../projects")

nav.addItem("Contact", "../contact", true)
nav.addItem("About Me", "../about", true)

$(document.body).append($("<div/>").attr("id", "content"))
