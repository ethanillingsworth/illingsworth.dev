
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
