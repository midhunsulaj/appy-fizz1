const leaf = document.getElementById("rotating");

window.addEventListener("scroll", ()=> {
    let value = window.scrollY * .5;
    leaf.style.transform =` translateX(-60%)rotate(${value}deg)`;
});