import $ from "jquery"

export class JSON {
    /**
    * Load a JSON file
    * @param {string} filename 
    * @returns {object}
    */
    static async load(filename) {
        // Load JSON data
        return await (await fetch(filename)).json() || {}
    }
}

export class Tag {
    static tagColors = {
        "JavaScript": "text-yellow-400 bg-yellow-500/50",
        "HTML5": "text-orange-400 bg-orange-500/50",
        "CSS3": "text-blue-400 bg-blue-500/50",
        "Tailwind CSS": "text-cyan-400 bg-cyan-500/50",
        "jQuery": "text-purple-400 bg-purple-500/50",
        "Webpack": "text-gray-400 bg-gray-500/50",
        "Firebase": "text-rose-400 bg-rose-500/50"
    };
    static getElement(tag) {
        return $(`<span class="${Tag.tagColors[tag]} tag">${tag}</span>`)
    }
}

const projects = await JSON.load("/data/projects.json")

export class Project {
    constructor(id) {
        this.id = id
    }

    get() {
        return projects[this.id]
    }

    display(parent) {
        const data = this.get()

        const card = $("<div/>").addClass("card project").attr("id", this.id)

        const image = $("<img/>").attr("src", `/imgs/previews/${this.id}.png`)

        const buttons = $("<div/>").addClass("flex flex-row ml-auto")

        const githubButton = $(`<a class="badge bg-black" href="${data.github}" target="_blank">
                    <img class="icon" src="icons/github.svg">
                    <span>Github</span>
                </a>`)

        const title = $("<h3/>").text(data.title)

        if (data.github) {
            buttons.append(githubButton)
        }

        const desc = $("<p/>").text(data.desc)

        const tags = $("<div/>").addClass("flex flex-row gap-3 flex-wrap")

        for (const tag of data.tags) {
            tags.append(Tag.getElement(tag))
        }
        card.append(image, title, desc, tags, buttons)

        parent.append(card)

        return card

    }

    static getFeatured() {
        return Object.entries(projects)
            .filter(([_, project]) => project.featured === true)
            .map(([key, _]) => new Project(key))[0]
    }
}

console.log(Project.getFeatured())