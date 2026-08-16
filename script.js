// =========================================
//       MAHI BIRTHDAY WEBSITE
//           FINAL JAVASCRIPT
// =========================================


// =========================================
//          ELEMENTS
// =========================================

const opening = document.getElementById("opening");

const beginBtn = document.getElementById("beginBtn");

const story = document.getElementById("story");

const birthdayMusic =
    document.getElementById("birthdayMusic");

const pages =
    document.querySelectorAll(".page");

const nextButtons =
    document.querySelectorAll(".next-btn");


// =========================================
//          CURRENT PAGE
// =========================================

let currentPage = 0;


// =========================================
//       SHOW PAGE FUNCTION
// =========================================

function showPage(index) {

    pages.forEach((page) => {

        page.classList.remove("active");

    });


    if (pages[index]) {

        pages[index].classList.add("active");

        currentPage = index;

    }

}


// =========================================
//          BEGIN BUTTON
// =========================================

beginBtn.addEventListener("click", () => {


    // -----------------------------
    // Start music after user tap
    // -----------------------------

    birthdayMusic.volume = 0.45;

    birthdayMusic.play().catch((error) => {

        console.log(
            "Music could not start:",
            error
        );

    });


    // -----------------------------
    // Fade opening
    // -----------------------------

    opening.style.transition =
        "opacity 1.5s ease, transform 1.5s ease";

    opening.style.opacity = "0";

    opening.style.transform =
        "scale(1.08)";


    // -----------------------------
    // Show story
    // -----------------------------

    setTimeout(() => {

        opening.style.display = "none";

        story.classList.remove("hidden");

        showPage(0);

    }, 1500);

});


// =========================================
//          NEXT BUTTONS
// =========================================

nextButtons.forEach((button) => {

    button.addEventListener("click", () => {


        // --------------------------------
        // If another page exists
        // --------------------------------

        if (currentPage < pages.length - 1) {

            currentPage++;

            showPage(currentPage);


            // -----------------------------
            // Final page music volume
            // -----------------------------

            if (
                pages[currentPage]
                    .classList
                    .contains("final-page")
            ) {

                birthdayMusic.volume = 0.60;

            }

        }

    });

});


// =========================================
//          FINAL BUTTON
// =========================================

const finalButton =
    document.querySelector(".final-btn");


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

    const confettiCount = 90;


    for (
        let i = 0;
        i < confettiCount;
        i++
    ) {

        const confetti =
            document.createElement("div");


        confetti.style.position = "fixed";

        confetti.style.width = "7px";

        confetti.style.height = "12px";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents =
            "none";

        confetti.style.background =
            getRandomColor();

        confetti.style.borderRadius =
            "2px";

        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        const fallTime =
            2 + Math.random() * 3;


        confetti.style.transition =
            `top ${fallTime}s linear,
             transform ${fallTime}s ease-out`;


        document.body.appendChild(
            confetti
        );


        setTimeout(() => {

            confetti.style.top =
                (100 + Math.random() * 20) +
                "vh";

            confetti.style.transform =
                `rotate(${360 + Math.random() * 720}deg)`;

        }, 50);


        setTimeout(() => {

            confetti.remove();

        }, 5500);

    }

}


// =========================================
//       RANDOM CONFETTI COLORS
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
