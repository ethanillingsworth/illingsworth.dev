import Tag from "./Tag";

function Tags({ tags = [], size = "xs" }) {
	return (
		<div className="row flex-wrap pt-2">
			{tags.map((tagId) => {
				return <Tag id={tagId} size={size} />;
			})}
		</div>
	);
}

export default Tags;
