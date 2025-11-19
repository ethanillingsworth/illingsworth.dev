

export default function Section({ heading, children }) {
    return (
        <div className="p-24 col gap-12 border-t border-forge-muted">
            {heading ? <h2>{heading}</h2> : null}
            <div className="row gap-12">
                {children}
            </div>
        </div>
    );
}