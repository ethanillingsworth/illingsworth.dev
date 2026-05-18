import ethan from "../imgs/profile.jpeg";

import Project from "../Components/Project";

function Badge({ name, img, className }) {
    return (
        <span className="inline-flex place-items-center gap-2 w-fit">
            <img src={img} className="h-5 aspect-square" />
            <span className={`${className} text-sm p-0.5 rounded px-1`}>
                {name}
            </span>
        </span>
    );
}

function EthanBadge() {
    return (
        <Badge
            name="Ethan Illingsworth"
            img={ethan}
            className="text-forge-accent bg-forge-accent/25"
        />
    );
}

function FisherBadge() {
    return (
        <Badge
            name="Kristen Fisher"
            img="/my-life-in-code/fish.png"
            className="text-blue-300 bg-blue-300/25"
        />
    );
}

function GronskiBadge() {
    return (
        <Badge
            name="Gabi Gronski"
            img="/my-life-in-code/gronski.jpg"
            className="text-amber-300 bg-amber-300/25"
        ></Badge>
    );
}

function Image({ src, cite }) {
    return (
        <div className="flex flex-col gap-2">
            <img src={src} />
            <cite className="text-sm text-zinc-400">{cite}</cite>
        </div>
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
                <span className="ml-auto inline-flex gap-2">
                    An experience by
                    <EthanBadge />
                </span>
            </div>

            <section>
                <h2>
                    Hello World, I am...
                    <audio controls>
                        <source src="/my-life-in-code/audio/hello_world.mp3"></source>
                    </audio>
                </h2>
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
                <h2>
                    My Story
                    <audio controls>
                        <source src="/my-life-in-code/audio/my_story.mp3"></source>
                    </audio>
                </h2>

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

                <h3>
                    Intro to CS and AP CSP | Freshman Year
                    <audio controls>
                        <source src="/my-life-in-code/audio/freshman.mp3"></source>
                    </audio>
                </h3>

                <EthanBadge></EthanBadge>
                <div className="flex flex-row w-full gap-10">
                    <p className="max-w-2xl">
                        We we're all freshmen once, but there was one key
                        difference that set me a part from other students
                        planning to take Intro to Computer Science. I had a head
                        start. When I first selected Intro to CS when I was in
                        8th grade (man that makes me feel old) I had already
                        been programming in my free time for around 2 years up
                        to that point. I understood the concepts really well. I
                        mean really well. In fact I completed that Intro to CS
                        course in 2 months. I also met probably the best CS
                        teacher you could have,
                        <FisherBadge></FisherBadge>, who allowed me to not only
                        do the Intro course at my own pace. But also allowed me
                        to take the AP CSP exam and study it on my own time on
                        Khan Academy. She also gave me opportunity's to show off
                        my leadership and communication skills, allowing me to
                        teach the intro students who were formally my peers.
                        Without her I would simply not be the person I am today,
                        and for that I give her all the thanks in the world.
                        Love you Fisher {"<"}3. This is also the year I ended up
                        presenting at Apple with some of my peers. Boyana
                        Rundeva and Aiden Daily, both were Intro to CS students,
                        I took charge as project lead while Boyana would be our
                        UI designer, Aiden would fill in wherever needed but was
                        mainly a brain to bounce ideas off of. We ended up
                        coming up with a goal management software, dubbed{" "}
                        <code className="text-cyan-500 bg-cyan-500/25">
                            Stretches
                        </code>
                        . We worked on stretches for maybe 2-3 months before we
                        would go present it first at the district showcase.
                        Which would then be judged and some would be given the
                        opportunity to showcase their app at apple. We ended up
                        getting picked, and my team was even show cased on a{" "}
                        <a href="https://www.fox32chicago.com/news/arlington-heights-students-showcase-apps-john-hersey-high-school">
                            Fox News Article
                        </a>
                        . We worked with some people on the apple creative team
                        to prepare a presentation, we then presented that in
                        front of around 100-200 people. Looking back I really
                        miss working with these people, freshman me was a
                        different beast entirely.
                    </p>
                    <div className="grid grid-cols-2 gap-10">
                        <Image
                            src="/my-life-in-code/IMG_7122.jpeg"
                            cite="From left to right: Boyana, Me, Aiden"
                        />
                        <Image
                            src="/my-life-in-code/IMG_7196.jpeg"
                            cite="Presentation Stage"
                        />
                        <Image
                            src="/my-life-in-code/IMG_0580.jpeg"
                            cite="Name badge given to all participants"
                        />
                        <Image
                            src="/my-life-in-code/IMG_7464.jpeg"
                            cite="From left to right: Aiden, Fisher, Boyana"
                        />
                    </div>
                </div>

                <h3>
                    Entrepreneurship (Incubator) and AP CSA | Sophomore Year
                    <audio controls>
                        <source src="/my-life-in-code/audio/soph.mp3"></source>
                    </audio>
                </h3>
                <EthanBadge></EthanBadge>
                <div className="flex flex-row w-full gap-10">
                    <p className="max-w-2xl">
                        After that wonderful first year, I was now a Sophomore,
                        which brought many challenges. First I was taking 3 AP
                        tests at the end of the year, along with a college level
                        course (Entrepreneurship). Entrepreneurship was an
                        amazing class, we got to work on a business idea of our
                        choosing, with a group of our choosing. This is where I
                        would become reacquainted with <GronskiBadge />. Her and
                        I both went to the same middle school, but really didn't
                        interact all of freshman year. We ended up forming a
                        company together, with her as the head and CEO, while I
                        would take the CTO role since I would be on the tech
                        side. She ended up coming up with the idea to have an
                        app or website where clubs could organize themselves,
                        given that the club info provided on the schools website
                        are horribly outdated. We reached out to all of the
                        people listed to see if they would be interested in such
                        a service, one email we received was from a confused man
                        who had not run that club in 10 years. Our problem was
                        validated, and we began work on a prototype, it would be
                        called{" "}
                        <code className="text-forge-gold bg-forge-gold/25">
                            Lokal
                        </code>
                        , a play on Local and Gabi's polish ancestry. In total
                        our group spent around 9 months working on Lokal, and I
                        poured personally around 500 hours into the project.
                        After 14 versions we we're finally going to present our
                        concept to real investors. We had no funding, a rag tag
                        group, but we were determined to make our stance in
                        front of a room of a couple hundred people. We didn't
                        end up winning, which we were obviously pissed about, me
                        more than anyone. I had spend so many sleepless nights
                        obsessing over how to improve this. In the end we lost
                        to a company who did not work harder than us, but was
                        better prepared, and worked more on the marketing side.
                        Even though we ended up losing, I gained experience
                        working with a team, a really good team at that. For
                        that reason I am grateful to have had the opportunity to
                        work with them. Without them I would remain unrefined.
                        Thank you Team Lokal {"<"}3. In the midsts of me working
                        on Lokal I was also put into AP CSA the continuation of
                        AP CSP, where I ended up meeting like minded individuals
                        like that of Mikolaj Michon. Me and Miko were good
                        friends all throughout this year, we even went to the
                        district app showcase again, but not to compete just to
                        go around and see what the community was building.
                    </p>
                    <div className="grid grid-cols-2 gap-10">
                        <Image
                            src="/my-life-in-code/gronski.jpg"
                            cite="An image of Gabi Gronski"
                        />
                        <Image
                            src="/my-life-in-code/IMG_1704.jpeg"
                            cite="An image of Miko and I"
                        />
                        <Image
                            src="/my-life-in-code/lokal.png"
                            cite="Final Revision of the Lokal Logo"
                        />
                    </div>
                </div>
            </section>

            <section>
                <h2>
                    My Projects
                    <audio controls>
                        <source src="/my-life-in-code/audio/projects.mp3"></source>
                    </audio>
                </h2>

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
                    <audio controls>
                        <source
                            src="/my-life-in-code/audio/beck.mp3"
                            type="audio/mpeg"
                        ></source>
                    </audio>
                </cite>
            </section>
        </div>
    );
}
