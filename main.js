const time = document.getElementById("time");
const state = document.getElementById("state");

if (state && time) {
    const localTime = new Date().toLocaleString('en-US', { timeZone: 'Australia/Melbourne' });
    
    const hour = new Date(localTime).getHours();
    const minutes = new Date(localTime).getMinutes();
    
    if (hour < 9) {
        state.innerHTML = "sleeping";
    } else if (hour < 17) {
        state.innerHTML = "working";
    }
    
    time.innerHTML = `${hour < 12 ? hour : hour - 12}:${minutes < 10 ? '0' + minutes : minutes} ${hour >= 12 ? "PM" : "AM"}`;
}

const toTop = document.getElementById("toTop");

if (toTop) {
    toTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

const idnex = document.getElementById("idnex");
const idnexQuote = document.getElementById("idnex-quote");

let quotes = [
    "Who is this lil' guy?",
    ":3",
    ">:3",
    ":>",
    "♥︎",
    "▲ ▲ ▼ ▼ ◄ ► ◄ ► B A",
    "discord.gg/YKfGWSYAqf",
    "Tell index I said hi",
    "Play GRAB on Meta Quest!",
    "Help I'm stuck in this website!",
    "I'm just gonna sit here and cry for a little bit",
    "Despite everything, it's still you ♥︎",
    "Hate. Let me tell you..",
    "It's smorgin' time",
    "Never gonna give you up",
    "According to all known laws of aviation.."
];
if (location.pathname.includes("idnex")) {
    quotes.shift();
}
let lastQuote = 0;

setInterval(() => {
    idnex.style.display = "flex";
    let rand = lastQuote;
    while (rand == lastQuote) {
        rand = Math.floor(Math.random() * quotes.length);
    }
    lastQuote = rand;
    idnexQuote.innerHTML = quotes[rand];

    idnexQuote.removeAttribute("href");
    idnexQuote.style.cursor = "default";
    if (rand == 0 && !location.pathname.includes("idnex")) {
        idnexQuote.href = "idnex";
        idnexQuote.style.cursor = "pointer";
    }
    setTimeout(() => {
        idnex.style.display = "none";
    }, 2000);
}, 20000);

const loadArtButton = document.getElementById("load-art");
const artContainer = document.getElementById("fanart");

let fanartURls = [
    ["images/idnex/idnex_meme.jpeg", "aidentheblueslime"],
    ["images/idnex/idnex_sketch.jpeg", "Cashi"],
    ["images/idnex/idnex_skib.jpeg", "TheWhiteCrescent"],
    ["images/idnex/idnex_vs_jojo.jpeg", "thatoneduck101"],
    ["images/idnex/idnex_scratch.jpg", "forevrgrab"],
    ["images/idnex/idnex_comic_die.jpeg", "papery"],
    ["images/idnex/idnex_goof.gif", "lulux"],
    ["images/idnex/idnex_peace.jpeg", "TCXRandom"],
    ["images/idnex/idnex_pixel.jpeg", "GentVR"],
    ["images/idnex/idnex_ree.jpeg", "PurpleSmile"],
    ["images/idnex/idnex_sit.jpeg", "plushgaming"],
    ["images/idnex/idnex_pfp.jpeg", "flare"],
    ["images/idnex/idnex_origin.jpeg", "JeffBobDude"],
    ["images/idnex/femdex_dead.jpeg", "TheWhiteCrescent"],
    ["images/idnex/femdex_mountain.jpeg", "TheWhiteCrescent"],
    ["images/idnex/femdex_video.jpeg", "TheWhiteCrescent"],
    ["images/idnex/femdex.jpeg", "TheWhiteCrescent"],
    ["images/idnex/femdex2.jpeg", "TheWhiteCrescent"],
    ["images/idnex/idnex_3d.jpeg", "Eclipse"],
    ["images/idnex/idnex_addict.jpeg", "TheWhiteCrescent"],
    ["images/idnex/idnex_alastor.jpeg", "Eclipse"],
    ["images/idnex/idnex_buff.jpeg", "TheWhiteCrescent"],
    ["images/idnex/idnex_bullets.jpeg", "CokeDee"],
    ["images/idnex/idnex_creation.jpeg", "Raaquilla"],
    ["images/idnex/idnex_dance.gif", "Raaquilla"],
    ["images/idnex/idnex_fortnite.jpeg", "dawn"],
    ["images/idnex/idnex_vrc.jpeg", "dawn"],
    ["images/idnex/idnex_gd.jpeg", "Dandestroys"],
    ["images/idnex/idnex_cartoon.jpeg", "TheWhiteCrescent"],
    ["images/idnex/idnex_igor.jpeg", "Chazerz"],
    ["images/idnex/idnex_jojo.jpeg", "TheWhiteCrescent"],
    ["images/idnex/idnex_lethal_company.jpeg", "Eclipse"],
    ["images/idnex/Idnex_lore.jpeg", "TheWhiteCrescent"],
    ["images/idnex/idnex_minecraft.jpeg", "Dandestroys"],
    ["images/idnex/idnex_mountain.jpeg", "Wpbrotherly"],
    ["images/idnex/idnex_origin2.jpeg", "JeffBobDude"],
    ["images/idnex/idnex_reborn.jpeg", "Supermeow"],
    ["images/idnex/idnex_toon_suffer.jpeg", "BlackCat508"],
    ["images/idnex/idnex_toon.jpeg", "BlackCat508"],
    ["images/idnex/idnex.jpeg", "Eclipse"],
    ["images/idnex/index_banner.jpeg", "BlackCat508"],
    ["images/idnex/Page1.jpeg", "TheWhiteCrescent"],
    ["images/idnex/index_render.jpeg", "vestria"],
    ["images/idnex/idnex_dancing.gif", "Raaquilla"],
    ["images/idnex/idnex_vs_index.gif", "Raaquilla"],
    ["images/idnex/dot_funky.gif", "Raaquilla"],
    ["images/idnex/idnex_dump.jpeg", "Chazerz"],
    ["images/idnex/index_furry.jpeg", "xanderiscooler"],
];
fanartURls.sort((a, b) => { return Math.random() > 0.5 ? -1 : 1; });

let artIndex = 0;
if (loadArtButton) {
    loadArtButton.addEventListener("click", () => {
        loadArtButton.innerText = "Load more";
        artContainer.innerHTML = "";

        let limit = artIndex + 11;
        while (artIndex <= limit) {
            let url = fanartURls[artIndex][0];
            let artist = fanartURls[artIndex][1];
            const container = document.createElement("div");
            container.classList.add("art-container");
            const img = document.createElement("img");
            if (artist != "artist") img.classList.add("popper-element");
            img.onerror = () => {
                container.style.display = "none";
                console.log(url);
            };
            img.src = url;
            if (artist != "artist") img.setAttribute("data-popper", artist);
            img.addEventListener("click", () => {
                window.open(url, "_blank");
            });
            container.appendChild(img);
            artContainer.appendChild(container);
            artIndex++;
            if (artIndex === fanartURls.length) {
                limit = limit - artIndex;
                artIndex = 0;
            }
        }
        initPopper();
    });
}

const popper = document.getElementById("popper");
const popperText = document.getElementById("popper-text");

if (popper) {
    document.addEventListener("mousemove", (e) => {
        let x = e.clientX - popper.offsetLeft - popper.offsetWidth / 2;
        let y = e.clientY - popper.offsetTop - popper.offsetHeight / 2;
        
        const pad = 10;
        y - popper.offsetHeight * 1.5 > pad ? y -= popper.offsetHeight * 1.5 : y += popper.offsetHeight * 1.5;
        x < pad ? x = pad : x > window.innerWidth - pad - popper.offsetWidth ? x = window.innerWidth - pad - popper.offsetWidth : x = x;
        
        popper.style.transform = `translate(${x}px, ${y}px)`;
    });
    document.addEventListener("scroll", () => {
        popper.style.visibility = "hidden";
    });
}

let popperHovers = document.querySelectorAll(".popper-element");

function initPopper() {
    popperHovers = document.querySelectorAll(".popper-element");

    if (popper) {
        let timeout;
        popperHovers.forEach((e) => {
            if (!e.classList.contains("popper-active")) {
                e.addEventListener("mouseenter", () => {
                    popper.style.visibility = "visible";
                    const text = e.getAttribute("data-popper") || "Error :c";
                    popperText.innerText = text;
                });
                e.addEventListener("mouseleave", () => {
                    popper.style.visibility = "hidden";
                });
                e.addEventListener("touchstart", () => {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        popper.style.visibility = "hidden";
                    }, 1000);
                });
                e.classList.add("popper-active");
            }
        });
    }
}
initPopper();

// wonk
const arcButton = document.getElementById("arcButton");
if (arcButton) {
    arcButton.addEventListener("click", () => {
        document.documentElement.classList.add('arc');
        arcButton.style.transform = "translateX(100%)";
        setTimeout(() => {
            arcButton.style.display = "none";
        }, 300);
        localStorage.setItem("arc", "true");
    });
}
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("arc") == "true") {
        document.documentElement.classList.add('arc');
    } else if (arcButton) {
        let arcInterval = setInterval(() => {
            let styles = getComputedStyle(document.documentElement);
            if (styles.getPropertyValue('--arc-palette-title')) {
                arcButton.style.display = "flex";
                setTimeout(() => {
                    arcButton.style.transform = "translateX(0)";
                }, 100);
            }
        }, 100);
        setTimeout(() => {
            clearInterval(arcInterval);
        }, 1000);
    }
});