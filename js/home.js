const content = $("#content")


const splash = $("<div/>").addClass("splash row")

const splashText = $("<h2/>").text("Welcome to illingsworth.dev").addClass("splashText")
const wrapper = $("<div/>").addClass("wrapper")

const t = $("<h3/>").text("Where dark mode reigns supreme.").addClass("splashTextSmall typewriter")

wrapper.append(t)

const blurbs = [
    "Where dark mode reigns supreme.",
    "The home for all internet things.",
    "Error 404.",
    "400+ hours still no money.",
    "Dynamic types only.",
    "console.log(\"hello world\")",
    "print(\"hello world\")",
    "Hire me plz.",
    "Gotta love javascript.",
    "Contact: ethan@illingsworth.dev",
    "This message was generated by EthanGPT 💻",
    "https://youtu.be/dQw4w9WgXcQ",
    "👀",
    "ML hurts me.",
    "Your IP Address is: 2113.4141.4242.1331 get hacked.",
    "Light mode is'nt welcome here.",
    "Powered by Firebase.",
    "I <3 Lokal.",
    // "If you know the enemy and know yourself, you need not fear the reasult of 100 battles - Sun Zu (The Art of War)"
    "It's not that serious.",
    "🐧",
    "Brick not included.",
    "Now in HD.",
    "The best thing since sliced bread.",
    "100% plastic free.",
    "Features sold separately.",
    "It's better than butter.",
    "200% serious."
]

const ran = Math.floor(Math.random() * blurbs.length)

t.text(blurbs[ran])


content.append(splash)

content.append(splashText)
content.append(wrapper)
