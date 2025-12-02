

export default function Section({ heading, children, grid=false, gridCols=3, wrap=false }) {
    return (
        <div className="p-24 col gap-12 border-t border-forge-muted">
            {heading ? <h2>{heading}</h2> : null}
            <div className={grid ? `grid grid-cols-${gridCols} gap-12` : `row gap-12 ${wrap ? "flex-wrap" : ""}`}>
                {children}
            </div>
        </div>
    );
}