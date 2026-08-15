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
const range = document.getElementById("customRange2");
const priceValue = document.getElementById("priceValue");

range.addEventListener("input", function () {
    priceValue.value = range.value;
});