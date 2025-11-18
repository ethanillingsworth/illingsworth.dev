import projects from "../data/projects.json"

export default function Project({ id }) {
    const data = projects[id]
    return (
        <div className="project">
            <h2>{data.title}</h2>
            <p>{data.desc}</p>
        </div>
    );
}