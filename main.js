var cursorOuter = document.getElementById("cursor-outer");
var cursorInner = document.getElementById("cursor-inner");
var links = document.getElementsByTagName("a");

document.addEventListener("mousemove", function (e) {
    cursorInner.style.transform =
        cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", () => {
        cursorOuter.classList.add("cursor-outer-hover");
        cursorInner.classList.add("cursor-inner-hover");
    });
    links[i].addEventListener("mouseout", () => {
        cursorOuter.classList.remove("cursor-outer-hover");
        cursorInner.classList.remove("cursor-inner-hover");
    });
}

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});