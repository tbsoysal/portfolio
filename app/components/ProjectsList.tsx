import ProjectCard from "./ui/ProjectCard"

export default function ProjectsList() {
    const Projects = [
        {
            imagesource: "/images/sahadijital-mockup.png",
            title: "SahaDijital",
            description: "A web app with a real-time calendar dashboard where field owners can manage reservations quickly and clearly. Each field gets a custom public page where players can see available hours and submit reservation requests directly. The dashboard also tracks monthly statistics like paid, unpaid, and total reservations at a glance.",
            techstack: [
                "Nextjs", "TypeScript", "Tailwind CSS", "Supabase"
            ],
            links: {
                github: "https://github.com/tbsoysal/sahadijital",
                site: "https://sahadijital.com"
            },
            QA: [
                {
                    question: "What problem was the app trying to solve?",
                    answer: "Soccer fields in Turkey handle reservations almost entirely over the phone, writing everything down in notebooks. This leads to double bookings, constant calls from players asking about available hours, and owners having to carry that notebook everywhere they go."
                },
                {
                    question: "How I tried to get traction?",
                    answer: "I visited 5 soccer fields in Erzurum in person and pitched the app. 2 signed up for a free trial. The main feedback was that players weren't using the online reservation page — they were still just calling. So I printed QR code posters and hung them on the field walls, and handed out flyers to players directly."
                },
                {
                    question: "What I have learned from this project?",
                    answer: "I was so excited about the idea that I built the whole product before properly validating it. After spending real time talking to field owners, I realized that even though notebooks feel outdated in 2026, most owners don't see it as a problem worth solving yet. The pain exists — but it isn't felt strongly enough to change behavior. That's the most important thing I've learned about building products: a real problem and a felt problem are not the same thing."
                }
            ]
        },
        {
            imagesource: "/images/resumify-mockup.png",
            title: "Resumify",
            description: "A resume builder web app where users can fill in their details, see a live preview, and download a polished PDF. Inspired by FlowCV — built from scratch as a way to go deep on real-world front-end challenges.",
            techstack: [
                "Reactjs", "TypeScript", "Tailwind CSS", "Vite"
            ],
            links: {
                github: "https://github.com/tbsoysal/Resumify",
                site: "https://tbsoysal.github.io/Resumify"
            },
            QA: [
                {
                    question: "Why did I built it?",
                    answer: "I wanted to tackle genuinely hard front-end problems: real-time state syncing between an editor and a live preview, PDF generation from web content, and building a multi-section form that feels smooth to use. Tutorial projects don't give me those problems. Building something real does."
                },
                {
                    question: "What I have learned?",
                    answer: "PDF generation from browser content is much harder than it looks — the gap between how something renders in a browser and how it exports to PDF taught me a lot about layout engines and how CSS translates (or doesn't) outside the browser context."
                },
            ]
        },
        {
            imagesource: "/images/pomodoro-mockup.png",
            title: "Pomodoro Timer - Chrome Extension",
            description: "A Chrome extension for focused work sessions, built with React and TypeScript. Designed by a friend, coded by me — a real collaboration between designer and developer.",
            techstack: [
                "Reactjs", "TypeScript", "Chrome Extension API", "Vite"
            ],
            links: {
                github: "https://github.com/tbsoysal/react-pomodoro-extension",
            },
            QA: [
                {
                    question: "Why It’s interesting technically?",
                    answer: "Chrome extensions run in a completely different environment than regular web apps. The timer logic lives in a background script that persists even when the popup is closed. The UI has to stay in sync with that background state across multiple contexts — popup, options page, and background script all talking to each other through Chrome's messaging API. Getting that state sync right was the hardest part."
                },
                {
                    question: "What I have built?",
                    answer: "Three different timer display views (circular, digital, segmented), dark and light mode, customizable durations, persistent state across browser restarts, and a full options page — all synced in real time."
                },
            ]
        },
    ]
    return (
        <section>
            <h2 className="font-satoshi text-accent text-2xl tracking-tight font-bold mb-5">Projects</h2>

        {
            Projects.map((item) => {
                return (
                    <ProjectCard key={item.title} project={item} />
                )
            })
        }
            
        </section>
    )
}