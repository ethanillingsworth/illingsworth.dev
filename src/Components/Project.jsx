import projects from "../data/projects.json"
import Tag from "./Tag";
import star from "../icons/star.svg"

export default function Project({ id, landscape = false }) {
    const data = projects[id]
    return (
        <div className={`project ${landscape ? "row" : ""}`}>
            <div className="aspect-video">
                <img src={`/previews/${id}.png`} className={`${landscape ? "object-cover h-full w-full rounded-r-none" : "rounded-b-none"}`} />
            </div>
            <div className="col p-4 gap-3">
                <h3>{data.title}</h3>
                <p className="line-clamp-3">{data.desc}</p>

                <div className="row mt-auto flex-wrap">
                    {data.tags.map((tagId) => {
                        return <Tag id={tagId} />
                    })}
                    <img src={star} className="ml-auto h-8 w-fit aspect-square" />
                </div>
            </div>
        </div>
    );
}