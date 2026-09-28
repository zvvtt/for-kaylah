function openLetter() {

    const letter = document.getElementById("letterContainer");

    const button = document.getElementById("openLetterBtn");


    // Show the letter
    letter.classList.add("open");


    // Change the button
    button.innerHTML = "❤️ Letter Opened ❤️";


    // Disable button
    button.disabled = true;


    // Scroll down to the letter
    setTimeout(function () {

        letter.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 200);

}