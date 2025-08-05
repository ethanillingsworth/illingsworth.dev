import $ from "jquery"
import "../css/tailwind.css"
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
            "Firebase": "text-rose-400 bg-rose-500/50",
            "Python": "text-sky-400 bg-sky-500/50",              
            "Java": "text-red-400 bg-red-500/50",                
            "Swift": "text-orange-300 bg-orange-400/50",         
            "Python Packaging (Poetry)": "text-emerald-400 bg-emerald-500/50", 
            "SwiftUI": "text-indigo-300 bg-indigo-500/50",       
            "React": "text-teal-300 bg-teal-500/50",
            "JSON": "text-amber-400 bg-amber-500/50"
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

    static getAll() {
        return Object.entries(projects)
            .sort(([_, a], [__, b]) => {
                return (b.featured === true) - (a.featured === true);
            })
            .map(([key, _]) => new Project(key));
    }

    display(parent, vertical=true) {
        const data = this.get()

        const content = $("<div/>")
            .addClass("flex flex-col gap-6 items-start h-full");

        const image = $("<img/>")
            .attr("src", `/imgs/previews/${this.id}.png`)
            .addClass("w-full object-cover");

        if (!vertical) {
            content.addClass("md:flex-row")
            image.addClass("md:w-1/3")
        }

        const textContent = $("<div/>").addClass("flex flex-col gap-2 w-full h-full");

        const title = $("<h3/>").text(data.title);

        const star = $("<img/>").attr("src", "/icons/star.svg").addClass("h-8 aspect-square w-auto")

        const desc = $("<p/>").text(data.desc);

        const tags = $("<div/>").addClass("flex flex-row gap-3 flex-wrap");
        data.tags.sort();
        for (const tag of data.tags) {
            tags.append(Tag.getElement(tag));
        }

        const githubButton = $(`<a class="badge bg-black" href="${data.github}" target="_blank">
                    <img class="icon" src="/icons/github.svg">
                    <span>Github</span>
                </a>`)
        
        const webButton = $(`<a class="badge bg-blue-500" href="${data.web}" target="_blank">
                    <img class="icon" src="/icons/web.svg">
                    <span>Website</span>
                </a>`)
        const bottom = $("<div/>").addClass("flex flex-row gap-3 mt-auto pt-4 place-items-end")

        const buttons = $("<div/>").addClass("flex flex-row ml-auto gap-3 text-base");
        if (data.github) buttons.append(githubButton);
        if (data.web) buttons.append(webButton);
        
        if (data.featured) {
            bottom.append(star)
        }
        bottom.append(buttons)

        textContent.append(title, desc, tags, bottom);
        content.append(image, textContent);

        const card = $("<div/>").addClass("card project").attr("id", this.id);
        card.append(content);

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