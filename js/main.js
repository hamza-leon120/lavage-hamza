"use strict";
let bars = document.querySelector(".bars");
let ul = document.querySelector("header ul");
let contact = document.querySelector(".contact");
bars.addEventListener("click", function () {
    if (ul.offsetHeight === 0) {
        ul.style.padding = "20px";
        ul.style.height = "260px";
        contact.style.opacity = "1";
        contact.style.transitionDelay = "0.4s";
    }
    else {
        ul.style.padding = "0px";
        ul.style.height = "0px";
        contact.style.opacity = "0";
        contact.style.transitionDelay = "0s";
    }
});
this.addEventListener("scroll", function () {
    if (ul.offsetHeight === 260) {
        ul.style.padding = "0px";
        ul.style.height = "0px";
        contact.style.opacity = "0";
        contact.style.transitionDelay = "0s";
    }
});
let topp = document.querySelector(".top");
window.addEventListener("scroll", function () {
    if (this.scrollY > 322) {
        topp.style.opacity = "1";
    }
    else {
        topp.style.opacity = "0";
    }
});
topp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
if (document.title === "lavage hamza" || document.title === "service da lavage hamza") {
    let allPirent = document.querySelectorAll(".service .continer .pirent div");
    this.addEventListener("scroll", function () {
        allPirent.forEach(function (e) {
            if (e.getBoundingClientRect().y + e.offsetHeight <= innerHeight) {
                e.style.transform = "translateX(0)";
            }
        });
    });
}
if (document.title === "lavage hamza" || document.title === "contact da lavage hamza") {
    let imgMap = document.querySelector(".maps");
    imgMap.addEventListener("click", function () {
        location.href = "https://maps.app.goo.gl/E1WHFx9GyJoDyRMn9";
    });
}
//# sourceMappingURL=main.js.map