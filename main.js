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
        idnexQuote.href = "idnex.html";
        idnexQuote.style.cursor = "pointer";
    }
    setTimeout(() => {
        idnex.style.display = "none";
    }, 2000);
}, 20000);

const loadArtButton = document.getElementById("load-art");
const artContainer = document.getElementById("fanart");

let fanartURls = [
    "https://cdn.discordapp.com/attachments/929848909407330404/1279164359024705617/Index.gif?ex=66e88a24&is=66e738a4&hm=d30badff545b7153c8f4486e3deda9c9a032e6f0cbed89fb767bafdef7aedf09&",
    "https://media.discordapp.net/attachments/929848909407330404/1279414716870951014/Index.gif?ex=66e8ca8e&is=66e7790e&hm=7bf7b66816250de9595205cbc88e1449929e7a8c4015f233ba4697d31e305858&width=766&height=1362&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1270038706195271794/Untitled50_20240805111043.png?ex=66e8f577&is=66e7a3f7&hm=53e5d18640fc7052effe1957adc79a4439f93351eca633f1677fb749116fa4d8&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1269892246229094490/image.png?ex=66e86d10&is=66e71b90&hm=ed72de5103228002fcd2154052e9c37d4fd3fd1775956cebdd63742c57e6d50f&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1263174573659000942/CatgirlIdnex.png?ex=66e8607f&is=66e70eff&hm=f5da49b839ee4998b5d910d0d8e401db2eaf848a1da5467107764cddeb8e5c7d&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1168056710624194580/image.png?ex=66e868d5&is=66e71755&hm=4f6e978d39b6ee4c4091bdb89028047b1af6b9f3ec927d07534067855f47db79&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1197283342006091826/IMG_0024.jpg?ex=66e89b81&is=66e74a01&hm=891c6d1e7f8e709a9cb86d07e2b7732f46de0497e7b77ffd39909c8237f18219&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1204684678238310400/2024_02_06_11a_Kleki.png?ex=66e881c9&is=66e73049&hm=8b12730d7bb09f6302a13888d273e66e32b91af02ee891c078ed694e1a5e91f8&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1211151947420405800/2024_02_24_0wc_Kleki.png?ex=66e8f6a6&is=66e7a526&hm=3fb721b74d93231dc3e3320dc56fd9092e06d3fbf0ea191fd2469c40d0a4844f&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1228921100134776872/IMG_2420.png?ex=66e901f6&is=66e7b076&hm=dacaf4b28412cb79c720bcf2ad15acb50fe81cfeab66f69fb4ac8edafcf95290&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1233977310965923851/image.png?ex=66e8f1ed&is=66e7a06d&hm=0249a07c98cb3d9b32036e29371f7d9295caabf10a772fd46cc37eaa32ae0b51&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1242324904037060708/indexcookie.png?ex=66e8fdba&is=66e7ac3a&hm=cbb4dfe49e78bed03348378eb363b19d2c624720fd76647e2ee3964b0a49368a&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1245571682215923773/Idnexbuff.png?ex=66e8f006&is=66e79e86&hm=1f0857092569eceb6fecfc80b386cd3c8f7ab55704c8186de2fbcf23854b2d9d&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1247257956454760632/image.png?ex=66e87afd&is=66e7297d&hm=c74cf288a1de6f493a27a5e43259303a392fcc4de8f93524aebae2fed927785c&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1247438697042018335/FemboyIdnex.png?ex=66e87a91&is=66e72911&hm=a1957b9fccb6891f9a2aa46cd40d8b769155dabf81b0808b27be5e65663e1584&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1249177646630174720/Femdex2.png?ex=66e8df57&is=66e78dd7&hm=baf4ca4907bc123854671eef77469071fdc8ff58ebce5cbf0a0305a4f904d8ad&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1249587856775581696/Untitled29_20240609204055.png?ex=66e86321&is=66e711a1&hm=5f3a691957785d3e98708b6d8dbc827c3d95bee15b64c322e5d5e7a774d2ecdc&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1251545268000784544/IMG_1491.png?ex=66e8ea9c&is=66e7991c&hm=70392b49b2d35d6b53ce5838c1f752c1059d90b19f4d0b0b52147ae548acd218&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1251545281959432193/Illustration2.png?ex=66e8ea9f&is=66e7991f&hm=d1dabc747ee4b85fc45d8b741affe8ef7b12fd62a2ef645ceb62c136c48dcaa1&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1255777394510270474/Drawing-23.sketchpad.png?ex=66e87e16&is=66e72c96&hm=7f6b9f23e6ab38c8540695f5093e986df38f681fab4fa25abe893b7183a7d565&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1258048626652086304/IMG_3520.png?ex=66e8d856&is=66e786d6&hm=b14d9e126f02bcacf5539b212fe7fa7596f1556e1ee226f88e8bf99f6d8b2f46&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1260153169380380682/IMG_5540.png?ex=66e89758&is=66e745d8&hm=a625e5622cd753a8a00c081d8ffe96301063b38046f39c85e0789db717756d75&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1261145067108827166/Screenshot_20240711_140142_Sketchbook.jpg?ex=66e8e75e&is=66e795de&hm=fb64d366d977bff4578d1b2ce1a877ea251f0473625e4770eed903f8a9a7a15b&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1261145199351037972/Index_spore.png?ex=66e8e77e&is=66e795fe&hm=5a3ce1dd7f20e6a40d22032f6040ab76281f9b3a30bc9f4dde818d4b2de05232&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1268350016154632263/Untitled81_20240731203446.png?ex=66e8bf80&is=66e76e00&hm=2c0b6fff9d955189b990968fb55891d21d9876c9d79ea71e05359b751733a532&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1274609963758653621/IMG_3759.png?ex=66e87348&is=66e721c8&hm=253bbd925fe657dd4b08b26bc37ab08a731fdc6bfea6c4d865322fdbadba72d2&",
    "https://cdn.discordapp.com/attachments/1163963988544069662/1275049888043761757/image.png?ex=66e8bb7e&is=66e769fe&hm=4acf8dbf28f726397764f4ea7f3e775019d0d52f0d085fc373150b018395b5de&"
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