export default function Hero({ heading, children, ctaButtons, image }) {
    return (
        <div className="hero">
            <h1>{heading}</h1>
            <h2 className="text-forge-subtext text-3xl font-normal">{children}</h2>
            <img src={image} className="hero-image" />
            <div className="row text-xl">
                {ctaButtons}
            </div>
        </div>
    );
}