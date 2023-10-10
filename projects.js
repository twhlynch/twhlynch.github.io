const repos = [
    {
        type: "source",
        name: "grab-tools.live",
        link: "https://grab-tools.live",
        tag: "GRAB VR",
        description: "A large website collection of modding tools, resources, statistics, and leaderboards for Grab VR.",
        language: "JavaScript",
        stars: 2
    },
    {
        type: "source",
        name: "Rayne-SGM-to-OBJ",
        link: "",
        tag: "Rayne",
        description: "SGM to OBJ model converter and Blender import plugin for Rayne SGM files.",
        language: "Python",
        stars: 2
    },
    {
        type: "source",
        name: "Web-ADB-Menu",
        link: "https://twhlynch.me/Web-ADB-Menu",
        tag: "Quest",
        description: "A web based ADB command menu for messing with hidden settings.",
        language: "JavaScript",
        stars: 0
    },
    {
        type: "source",
        name: "twhlynch.github.io",
        link: "",
        tag: "Portfolio",
        description: "This website!",
        language: "HTML",
        stars: 0
    },
    {
        type: "fork",
        owner: "SlinDev-GmbH",
        name: "Grab-Website",
        link: "https://grabvr.quest",
        tag: "GRAB VR",
        description: "The official website and level browser for the VR game GRAB!",
        language: "Vue",
        stars: 2
    },
    {
        type: "source",
        name: "Roblox2Grab",
        link: "",
        tag: "ROBLOX",
        description: "Scripts and Guide to export a ROBLOX Studio map to Grab VR.",
        language: "Lua",
        stars: 3
    },
    {
        type: "source",
        name: "Mp42Grab",
        link: "http://twhlynch.me/Mp42Grab/",
        tag: "GRAB VR",
        description: "A script, and website to convert videos into 30x30 grayscale animations in Grab VR.",
        language: "Python",
        stars: 3
    },
    {
        type: "source",
        name: "Not-Quite-Checkers",
        link: "http://twhlynch.me/Not-Quite-Checkers/",
        tag: "Checkers",
        description: "A little checkers game with some fun modifiers.",
        language: "JavaScript",
        stars: 0
    },
    {
        type: "source",
        name: "BlenderFrames2Grab",
        link: "",
        tag: "Blender",
        description: "Convert Blender keyframes to Grab through BabylonJS.",
        language: "Python",
        stars: 3
    },
    {
        type: "source",
        name: "APK-Modding-Guide",
        link: "",
        tag: "Android",
        description: "A guide to decompile, modify, and recompile android packages.",
        language: "MarkDown",
        stars: 0
    },
    {
        type: "source",
        name: "AutoModder",
        link: "",
        tag: "Unity",
        description: "A simple keyword based unity modding utility.",
        language: "Python",
        stars: 0
    },
    {
        type: "source",
        name: "WDTM",
        link: "",
        tag: "Unity",
        description: "Allows you to see what GameObjects were modified within an apk.",
        language: "Python",
        stars: 0
    }
];
const container = document.getElementById("repos");
const repoSVG = `
    <svg viewBox="0 0 16 16">
        <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
    </svg>
`;
const forkSVG = `
    <svg viewBox="0 0 16 16">
        <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
    </svg>
`;
(async () => {
    let repoResponse = await fetch("https://api.github.com/users/twhlynch/repos");
    let repoData = await repoResponse.json();
    repos.forEach(async (repo) => {
        let name = repo.name
        let id = repo.owner ? repo.owner + "/" + name : "twhlynch/" + name;
        let link = repo.link;
        let linkHTML = `
            <a href="${link}" class="repo-link">
                <svg viewBox="0 0 16 16">
                    <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
                </svg>
            </a>`;
        let stars = repo.stars;
        if (repoData.length) {
            repoData.forEach((repo) => {
                if (repo.name === name) {
                    stars = repo.stargazers_count;
                }
            });
        }
        let description = repo.description;
        let language = repo.language;
        let tag = repo.tag;
        container.innerHTML += `
            <div class="repo">
                <div class="repo-content">
                    <div class="repo-header">
                        ${repo.type === 'fork' ? forkSVG : repoSVG}
                        <a href="https://github.com/${id}" class="repo-name">${name}</a>
                        ${link && linkHTML}
                        <span class="repo-tag">${tag}</span>
                    </div>
                    <div class="repo-body">
                        <p>${description}</p>
                    </div>
                    <div class="repo-footer">
                        <span class="lang-col ${language}-color"></span>
                        <span class="repo-language">${language}</span>
                        <svg viewBox="0 0 16 16">
                            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                        </svg>
                        <span class="repo-stars">${stars}</span>
                    </div>
                </div>
            </div>
        `;
    });

    let cursorOuter = document.getElementById("cursor-outer");
    let cursorInner = document.getElementById("cursor-inner");
    let links = container.getElementsByTagName("a");

    document.addEventListener("mousemove", function (e) {
        cursorInner.style.transform =
            cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseover", () => {
            cursorOuter.classList.add("cursor-outer-hover");
            cursorInner.classList.add("cursor-inner-hover");
        });
        links[i].addEventListener("mouseout", () => {
            cursorOuter.classList.remove("cursor-outer-hover");
            cursorInner.classList.remove("cursor-inner-hover");
        });
    }
})();