function openLetter() {

    const letter = document.getElementById("letterContainer");

    const button = document.getElementById("openLetterBtn");


    // Make the letter visible
    letter.style.display = "flex";


    // Add the animation
    letter.classList.add("open");


    // Change the button
    button.innerHTML = "❤️ Letter Opened ❤️";


    // Disable the button
    button.disabled = true;


    // Scroll down to the letter
    setTimeout(function () {

        letter.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 200);

}