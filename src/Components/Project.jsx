import projects from "../data/projects.json"
import Tag from "./Tag";
import star from "../icons/star.svg"

export default function Project({ id, landscape = false }) {
    const data = projects[id]
    return (
        <div className={`project gap-6 ${landscape ? "row" : ""}`}>
            <img src={`/previews/${id}.png`} className={`${landscape ? "min-w-1/3 h-auto aspect-video" : ""}`} />
            <hr className="h-full border w-auto" />
            <div className="col">
                <h3>{data.title}</h3>
                <p>{data.desc}</p>

                <div className="row mt-auto">
                    {data.tags.map((tagId) => {
                        return <Tag id={tagId} />
                    })}
                    <img src={star} className="ml-auto h-8 w-fit aspect-square" />
                </div>
            </div>
        </div>
    );
}