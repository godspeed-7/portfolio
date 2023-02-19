import {rest} from "msw";


const profileData = 
{   
        "name": "Hi 👋This is Ankit 🚀",
        "title": "I am a Front End Developer 🔥",
        "description": " Over 4 years of experience in software development. I specialize in React, Typescript, Javascript, NodeJS, React Native. Solid communication and interpersonal skills",
        "links": {
            "github": "https://github.com/godspeed-7",
            "linkedin": "https://www.linkedin.com/in/ankit-singh-14576696/",
            "resume": "https://drive.google.com/file/d/1aRI9FLqwMfZlxDhErutmiLWc-ue5ryId/view?usp=sharing"
        }
}
const layoutData = [
    {
        "id": 1,
        "name": "Home",
        "path": "/",
        "emoji": "☕"
    },
    {
        "id": 2,
        "name": "Projects",
        "path": "/projects",
        "emoji": "📚"
    },
    {
        "id": 3,
        "name": "Contact",
        "path": "/contact",
        "emoji": "☎"
    }
]

export const handlers = [
    rest.get("http://localhost:3000/profile", (req, res, ctx) => {
        return res(
            ctx.json(profileData)
        )
    }),
    rest.get("http://localhost:3000/layout", (req, res, ctx) => {
        return res(
            ctx.json(layoutData)
        )
    }),

]