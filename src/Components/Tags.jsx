import Tag from "./Tag";
import star from "../icons/star.svg"

function Tags({tags=[], stared=false}) {
    return (<div className="row mt-auto flex-wrap pt-2">
        {tags.map((tagId) => {
            return <Tag id={tagId} />
        })}
        {stared ? <img src={star} className="ml-auto h-8 w-fit aspect-square" /> : null}
    </div>);
}

export default Tags;