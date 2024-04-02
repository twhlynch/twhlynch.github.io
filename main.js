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