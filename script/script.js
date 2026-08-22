const words = [
    "Creative",
    "Portfolio",
    "Business",
    "Agency",
    "eCommerce",
    "Marketing"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typing.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 70 : 120);
}

if (typing) {
    typeEffect();
}

//form value//

document.addEventListener("DOMContentLoaded", function () {

    const range = document.getElementById("customRange2");
    const priceValue = document.getElementById("priceValue");

    if (range && priceValue) {
        range.addEventListener("input", function () {
            priceValue.value = range.value;
        });
    }

});

//repeat typing //

const  repeatwords = [
    "Layouts",
    "Footers",
    "Online Shops"
];

let  repeatwordIndex = 0;
let repeatcharIndex = 0;
let repeatisDeleting = false;

const repeatTyping = document.getElementById("repeatTyping");

function repeattypeEffect() {

    const currentWord = repeatwords[repeatwordIndex];

    if (!repeatisDeleting) {

        repeatTyping.textContent = currentWord.substring(0, repeatcharIndex + 1);
        repeatcharIndex++;

        if (repeatcharIndex === currentWord.length) {
            repeatisDeleting = true;
            setTimeout(repeattypeEffect, 1500);
            return;
        }

    } else {

     repeatTyping.textContent = currentWord.substring(0, repeatcharIndex - 1);
        repeatcharIndex--;

        if (repeatcharIndex === 0) {
            repeatisDeleting = false;
            repeatwordIndex = (repeatwordIndex + 1) % repeatwords.length;
        }
    }

    setTimeout(repeattypeEffect, repeatisDeleting ? 70 : 120);
}

if (repeatTyping) {
    repeattypeEffect();
}