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

// const idnexWrapper = document.querySelector(".logo");
// let idnex = document.getElementById("idnex");

// let isHoveringIdnex = false;
// let isHoveringText = false;

// idnexWrapper.addEventListener("mouseover", () => {
//     isHoveringIdnex = true;
//     setTimeout(() => {
//         if (isHoveringIdnex) {
//             idnex.style.display = "block";
//         }
//     }, 1000);
// });
// idnexWrapper.addEventListener("mouseout", () => {
//     setTimeout(() => {
//         if (!isHoveringText) {
//             isHoveringIdnex = false;
//             idnex.style.display = "none";
//         }
//     }, 200);
// });
// idnex.addEventListener("mouseover", () => {
//     isHoveringText = true;
// });
// idnex.addEventListener("mouseout", () => {
//     isHoveringText = false;
// });