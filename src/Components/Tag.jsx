import tags from "../data/tags.json"


export default function Tag({ id }) {
    const data = tags[id]
    return (
        <div className={`tag text-${data.text} bg-${data.bg}/50`}>
            {id}
        </div>
    );
}