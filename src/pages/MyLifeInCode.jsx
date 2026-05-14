import ethan from "../imgs/profile.jpeg";
import fish from "../imgs/fish.png";
import Project from "../Components/Project";

function EthanBadge() {
	return (
		<span className="inline-flex place-items-center gap-2 w-fit">
			<img src={ethan} className="h-5" />
			<span className="text-forge-accent">Ethan Illingsworth</span>
		</span>
	);
}

function FisherBadge() {
	return (
		<span className="inline-flex place-items-center gap-2 w-fit">
			<img src={fish} className="h-5" />
			<span className="text-blue-300">Kristen Fisher</span>
		</span>
	);
}

export default function MyLifeInCode() {
	return (
		<div className="my-life-in-code">
			<div className="flex flex-row place-items-end mb-20">
				<div className="flex flex-col gap-2">
					<h1>My Life in Code...</h1>
					<span>
						A life represented as functions, variables, and data.
					</span>
				</div>
				<span className="ml-auto">
					An experience by
					<EthanBadge />
				</span>
			</div>

			<section>
				<h2>Hello World, I am...</h2>
				<EthanBadge />

				<p>
					My journey began in Elk Grove Village, where I was raised in
					an environment that emphasized problem solving. Growing up,
					I was often intrigued by computers, since my father was a
					software developer, which helped spark my initial interest
					in how things work; A curiosity that eventually evolved into
					my current focus on full-stack development and web
					architecture. My path has been shaped by the intersection of
					these early experiences and a commitment to refining my
					craft, moving from the fundamentals of computer science to
					the creative challenges of building my own projects. In my
					fairly short time programming (Around 5 years now) I have
					made a variety of projects. All of these were inspired by
					problems I found in my own life, to solve them not only for
					me, but possibly for others.
				</p>
			</section>

			<section>
				<h2>My Story</h2>

				<EthanBadge></EthanBadge>
				<p>
					To help you really understand who I am, and what I stand
					for, I would like to show you some of the things I've done
					with my passion. The people I met along the way deserve
					their recognition, as I would not be the programmer or
					person I am today without them. This section will show you
					how I worked with people, and some pretty cool problems we
					solved along the way. With that being said, let's go back to
					where it all began.
				</p>

				<h3>Intro to CS and AP CSP | Freshman Year</h3>

				<EthanBadge></EthanBadge>
				<p>
					We we're all freshmen once, but there was one key difference
					that set me a part from other students planning to take
					Intro to Computer Science. I had a head start. When I first
					selected Intro to CS when I was in 8th grade (man that makes
					me feel old) I had already been programming in my free time
					for around 2 years up to that point. I understood the
					concepts really well. I mean really well. In fact I
					completed that Intro to CS course in 2 months. I also met
					probably the best CS teacher you could have,
					<FisherBadge></FisherBadge>, who allowed me to not only do
					the Intro course at my own pace. But also allowed me to take
					the AP CSP exam and study it on my own time on Khan Academy.
					She also gave me opportunity's to show off my leadership and
					communication skills, allowing me to teach the intro
					students who were formally my peers. Without her I would
					simply not be the person I am today, and for that I give her
					all the thanks in the world. Love you Fisher {"<"}3.
				</p>

				<h3>
					Entrepreneurship (Incubator) and AP CSA | Sophomore Year
				</h3>

				<EthanBadge></EthanBadge>
				<p></p>

				<h3>Today | Junior Year</h3>

				<EthanBadge></EthanBadge>
				<p></p>
			</section>

			<section>
				<h2>My Projects</h2>

				<EthanBadge></EthanBadge>

				<p>
					My projects are the heart of my passion, and many of these
					were featured in the section before. The root of all my
					projects is to solve a problem, preferably one that I have,
					or someone else had. They range from collaborations, and
					solo projects, from web development to scripts and just
					about everything in between. To simplify this I will give
					you my top 3 laid out nicely. From left to right, my
					earliest project to what I am working on actively. Along
					with some honorable mentions for funsies.
				</p>

				<div className="flex flex-row gap-5 mt-5 max-w-5xl place-self-center">
					<Project id="syntaxforge" />
					<Project id="lokal" />
					<Project id="stretches-swift" />
				</div>

				<h3>Honorable Mentions</h3>

				<div className="flex flex-row gap-5 mt-5 max-w-5xl place-self-center">
					<Project id="codingrat" />
					<Project id="badgelab" />
				</div>
			</section>

			<section className="quote">
				<blockquote>
					"Make it work, make it right, make it fast."
				</blockquote>
				<cite>
					<a href="https://en.wikipedia.org/wiki/Kent_Beck">
						Kent Beck
					</a>
				</cite>
			</section>
		</div>
	);
}
