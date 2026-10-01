// Animations
// AOS

// AOS.init({
//     anchorPlacement: "top-left",
//     duration: 1000
// });

// Reveal Sections

const reveals =
document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const top =
        section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            section.classList.add("active");

        }

    });

}

revealSections();

window.addEventListener(
    "scroll",
    revealSections
);

window.addEventListener(
    "load",
    revealSections
);
