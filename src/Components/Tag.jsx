import tags from "../data/tags.json";

export default function Tag({ id, size = "xs" }) {
	const data = tags[id];
	return (
		<span className={`tag text-${data.text} text-${size} bg-${data.bg}/50`}>
			{id}
		</span>
	);
}
