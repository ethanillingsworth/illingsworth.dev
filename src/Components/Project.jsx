import projects from "../data/projects.json";
import Tags from "./Tags";
import star from "../icons/star.svg";

export default function Project({ id, landscape = false, large = false }) {
	const data = projects[id];
	return (
		<div className={`container ${landscape ? "row" : ""}`}>
			<div className="aspect-video">
				<img
					src={`/previews/${id}.png`}
					className={`${landscape ? "object-cover h-full w-full rounded-r-none" : "rounded-b-none"}`}
				/>
			</div>
			<div className={`col p-4 gap-2 h-full`}>
				<h3 className={large ? "text-2xl" : ""}>{data.title}</h3>
				<p className={large ? "line-clamp-3" : "line-clamp-2"}>
					{data.desc}
				</p>

				<Tags tags={data.tags} size={large ? "sm" : "xs"}></Tags>
				<div className="row mt-auto pt-4 place-items-end place-content-end gap-2">
					{data.featured ? (
						<img
							src={star}
							className="mr-auto h-8 w-fit aspect-square"
						/>
					) : null}
					{data.github ? (
						<a href={data.github} target="_blank">
							<img
								className="badge"
								src="https://badgelab.dev/api/badge/github"
							/>
						</a>
					) : null}
					{data.web ? (
						<a href={data.web} target="_blank">
							<img
								className="badge"
								src="https://badgelab.dev/api/customBadge/Website?bg_color=4097ce&text_color=ffffff&no_logo=true"
							/>
						</a>
					) : null}
				</div>
			</div>
		</div>
	);
}
