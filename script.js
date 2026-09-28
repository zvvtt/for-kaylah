function openLetter() {
    const letter = document.getElementById("letterContainer");
    const button = document.getElementById("openLetterBtn");

    // Show the letter
    letter.style.display = "flex";

    // Add animation
    letter.classList.add("open");

    // Change button
    button.innerHTML = "❤️ Letter Opened ❤️";
    button.disabled = true;

    // Scroll to letter
    setTimeout(function () {
        letter.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 200);
}