import Hero from "../Components/Hero";
import Section from "../Components/Section";
import hero from "../imgs/backdrops/home.webp"
import profileImage from "../imgs/profile.jpeg"
export default function Home() {
    return (
        <>
            <Hero heading="Ethan Illingsworth" image={hero}>An aspiring entrepreneur and developer</Hero>
            <Section>
                <div className="w-2/5">
                    <img src={profileImage} className="w-full h-fit aspect-square" />
                </div>
                <div className="col">
                    <h2>About Me | Ethan Illingsworth</h2>
                    <p>I am currently developing applications utilizing tools such as React, Firebase, and Tailwind.
                        At the time of writing this I am a Junior in high school. I enjoy making clean projects that I can spend time working on. I dont mind spending months or years working on a project. I believe in the motto of "Progress, not perfection". If you can do just 1 more day, then you can contiune working on anything.</p>
                </div>
            </Section>
            <Section></Section>
        </>
    );
}