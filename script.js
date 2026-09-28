const button = document.querySelector("button");
const letter = document.querySelector(".letter");


// Open the letter
button.addEventListener("click", function() {
    letter.classList.add("show");
});


// Add kisses when clicking the letter
letter.addEventListener("click", function() {

    const kiss = document.createElement("span");

    kiss.textContent = "💋";

    kiss.classList.add("kiss");

    kiss.style.left = Math.random() * 90 + "%";
    kiss.style.top = Math.random() * 90 + "%";

    letter.appendChild(kiss);

});


// Click the main heart
const heart = document.querySelector("#mainHeart");
const heartMessage = document.querySelector("#heartMessage");

heart.addEventListener("click", function() {

    heartMessage.textContent = "I love you, Kaylah ❤️";

});