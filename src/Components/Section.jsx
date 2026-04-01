export default function Section({
	heading,
	children,
	grid = false,
	gridCols = 3,
	mobileCols = 2,
	wrap = false,
	noPadding = false,
}) {
	return (
		<div
			className={`${noPadding ? "" : "p-12 px-24"} col gap-8 border-forge-muted`}
		>
			{heading ? <h2>{heading}</h2> : null}
			<div
				className={
					grid
						? `grid grid-cols-${mobileCols || gridCols - 1} md:grid-cols-${
								gridCols
							} gap-8`
						: `row gap-8 ${wrap ? "flex-wrap" : ""}`
				}
			>
				{children}
			</div>
		</div>
	);
}
