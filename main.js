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
    "images/idnex/femdex_dead.jpeg",
    "images/idnex/femdex_mountain.jpeg",
    "images/idnex/femdex_video.jpeg",
    "images/idnex/femdex.jpeg",
    "images/idnex/femdex2.jpeg",
    "images/idnex/idnex_3d.jpeg",
    "images/idnex/idnex_addict.jpeg",
    "images/idnex/idnex_alastor.jpeg",
    "images/idnex/idnex_buff.jpeg",
    "images/idnex/idnex_bullets.jpeg",
    "images/idnex/idnex_creation.jpeg",
    "images/idnex/idnex_dance.gif",
    "images/idnex/idnex_fortnite.jpeg",
    "images/idnex/idnex_gd.jpeg",
    "images/idnex/idnex_goof.gif",
    "images/idnex/idnex_igor.jpeg",
    "images/idnex/idnex_jojo.jpeg",
    "images/idnex/idnex_lethal_company.jpeg",
    "images/idnex/Idnex_lore.jpeg",
    "images/idnex/idnex_meme.jpeg",
    "images/idnex/idnex_minecraft.jpeg",
    "images/idnex/idnex_mountain.jpeg",
    "images/idnex/idnex_origin.jpeg",
    "images/idnex/idnex_origin2.jpeg",
    "images/idnex/idnex_peace.jpeg",
    "images/idnex/idnex_pixel.jpeg",
    "images/idnex/idnex_reborn.jpeg",
    "images/idnex/idnex_ree.jpeg",
    "images/idnex/idnex_scratch.jpeg",
    "images/idnex/idnex_sit.jpeg",
    "images/idnex/idnex_sketch.jpeg",
    "images/idnex/idnex_skib.jpeg",
    "images/idnex/idnex_toon_suffer.jpeg",
    "images/idnex/idnex_toon.jpeg",
    "images/idnex/idnex.jpeg",
    "images/idnex/index_banner.jpeg",
    "images/idnex/Page1.jpeg"
];
fanartURls.sort((a, b) => { return Math.random() > 0.5 ? -1 : 1; });

let artIndex = 0;
if (loadArtButton) {
    loadArtButton.addEventListener("click", () => {
        loadArtButton.innerText = "Load more";
        artContainer.innerHTML = "";

        let limit = artIndex + 11;
        while (artIndex <= limit) {
            let url = fanartURls[artIndex];
            const container = document.createElement("div");
            container.classList.add("art-container");
            const img = document.createElement("img");
            img.onerror = () => {
                container.style.display = "none";
                console.log(url);
            };
            img.src = url;
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
    });
}

const popper = document.getElementById("popper");
const popperText = document.getElementById("popper-text");

const popperHovers = document.querySelectorAll(".popper-element");

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
    let timeout;
    popperHovers.forEach((e) => {
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
    });
}

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