function openLetter() {

    const letter = document.getElementById("letterContainer");
    const button = document.getElementById("openLetterBtn");

    // Make sure both elements exist
    if (!letter || !button) {
        console.error("Letter or button was not found.");
        return;
    }

    // Show the letter
    letter.classList.add("open");

    // Change the button
    button.textContent = "❤️ Letter Opened ❤️";

    // Disable the button
    button.disabled = true;

    // Smoothly scroll to the letter
    setTimeout(function () {

        letter.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 200);
}