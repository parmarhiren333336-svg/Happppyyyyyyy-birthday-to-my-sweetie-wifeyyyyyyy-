// =========================================
//       MAHI BIRTHDAY WEBSITE
//            JAVASCRIPT
//              PART 1
// =========================================


// =========================================
//          OPENING ELEMENTS
// =========================================

const opening = document.getElementById("opening");

const beginBtn = document.getElementById("beginBtn");

const story = document.getElementById("story");


// =========================================
//          BEGIN BUTTON
// =========================================

beginBtn.addEventListener("click", () => {

    // Opening ko smoothly fade out karna
    opening.style.transition =
        "opacity 1.5s ease, transform 1.5s ease";

    opening.style.opacity = "0";

    opening.style.transform =
        "scale(1.08)";


    // Thodi der baad opening hide
    setTimeout(() => {

        opening.style.display = "none";

        story.classList.remove("hidden");

    }, 1500);

});
// =========================================
//       STORY PAGE NAVIGATION
//          FIXED PART 2
// =========================================

const storyPages = document.querySelectorAll(
    ".story-page, .final-page, .surprise-page"
);

const storyNextButtons = document.querySelectorAll(
    ".story-page .next-btn, .final-page .next-btn"
);

let currentPage = 0;


// =========================================
//       SHOW FIRST STORY PAGE
// =========================================

storyPages.forEach((page) => {
    page.classList.remove("active");
});

if (storyPages.length > 0) {
    storyPages[0].classList.add("active");
}


// =========================================
//          NEXT BUTTONS
// =========================================

storyNextButtons.forEach((button) => {

    button.addEventListener("click", function () {

        if (currentPage < storyPages.length - 1) {

            // Current page hide
            storyPages[currentPage].classList.remove("active");

            // Next page
            currentPage++;

            // Next page show
            storyPages[currentPage].classList.add("active");

            // Final page par music thoda loud
            if (
                storyPages[currentPage].classList.contains("final-page")
            ) {
                if (typeof birthdayMusic !== "undefined") {
                    birthdayMusic.volume = 0.60;
                }
            }

        }

    });

});
  // =========================================
//          MUSIC + FINAL EFFECTS
//              PART 3
// =========================================


// =========================================
//              MUSIC
// =========================================

const birthdayMusic = new Audio("music/birthday.mp3");

birthdayMusic.loop = true;

birthdayMusic.volume = 0.45;


// =========================================
//        START MUSIC ON BEGIN
// =========================================

beginBtn.addEventListener("click", () => {

    birthdayMusic.play().catch(() => {
        console.log("Music could not start automatically.");
    });

});


// =========================================
//        FINAL BIRTHDAY PAGE
// =========================================

const finalPage = document.querySelector(".final-page");

const surprisePage = document.querySelector(".surprise-page");

const finalButton = document.querySelector(".final-btn");


// =========================================
//        FINAL BUTTON EFFECT
// =========================================

if (finalButton) {

    finalButton.addEventListener("click", () => {

        createConfetti();

        birthdayMusic.volume = 0.60;

    });

}


// =========================================
//            CONFETTI
// =========================================

function createConfetti() {

    const confettiCount = 80;

    for (let i = 0; i < confettiCount; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";

        confetti.style.width = "7px";

        confetti.style.height = "12px";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";

        confetti.style.background =
            getRandomColor();

        confetti.style.borderRadius = "2px";

        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        confetti.style.transition =
            `top ${2 + Math.random() * 3}s linear,
             transform ${2 + Math.random() * 3}s ease-out`;

        document.body.appendChild(confetti);


        setTimeout(() => {

            confetti.style.top =
                (100 + Math.random() * 20) + "vh";

            confetti.style.transform =
                `rotate(${360 + Math.random() * 720}deg)`;

        }, 50);


        setTimeout(() => {

            confetti.remove();

        }, 5500);

    }

}


// =========================================
//        RANDOM CONFETTI COLORS
// =========================================

function getRandomColor() {

    const colors = [
        "#ffffff",
        "#ffd6e7",
        "#ff8fba",
        "#ffe6a7",
        "#d9c2ff"
    ];

    return colors[
        Math.floor(
            Math.random() * colors.length
        )
    ];

}
