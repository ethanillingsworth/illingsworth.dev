import projects from "../data/projects.json"
import Tags from "./Tags";

export default function Project({ id, landscape = false }) {
    const data = projects[id]
    return (
        <div className={`container ${landscape ? "row" : ""}`}>
            <div className="aspect-video">
                <img src={`/previews/${id}.png`} className={`${landscape ? "object-cover h-full w-full rounded-r-none" : "rounded-b-none"}`} />
            </div>
            <div className="col p-4 gap-3 h-full">
                <h3>{data.title}</h3>
                <p className="line-clamp-2">{data.desc}</p>

                <Tags tags={data.tags} stared={data.featured}></Tags>
            </div>
        </div>
    );
}