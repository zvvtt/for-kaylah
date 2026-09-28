const photos = [

    "zylah1.png",
    "zylah2.png",
    "zylah3.jpg",
    "zylah4.jpg",
    "zylah5.jpg",
    "zylah6.jpg",
    "zylah7.jpg",
    "zylah8.jpg",
    "zylah9.png",
    "zylah10.jpg",
    "zylah11.jpg",
    "zylah12.jpg",
    "zylah13.jpg",
    "zylah14.jpg",
    "zylah15.jpg",
    "zylah16.jpg",
    "zylah17.jpg",
    "zylah18.jpg",
    "zylah19.jpg",
    "zylah20.jpg",
    "zylah21.jpg",
    "zylah22.png",
    "zylah23.jpg",
    "zylah24.jpg",
    "zylah25.png",
    "zylah26.jpg",
    "zylah27.jpg",
    "zylah28.jpg",
    "zylah29.jpg",
    "zylah30.jpg",
    "zylah31.jpg",
    "zylah32.jpg",
    "zylah33.jpg",
    "zylah34.jpg",
    "zylah35.jpg",
    "zylah36.jpg",
    "zylah37.jpg",
    "zylah38.jpg",
    "zylah39.jpg",
    "zylah40.png",
    "zylah41.jpg",
    "zylah42.jpg",
    "zylah43.jpg",
    "zylah44.jpg",
    "zylah45.jpg"

];


let currentPhoto = 0;


const photo =
    document.getElementById("zylahPhoto");

const photoNumber =
    document.getElementById("photoNumber");

const photoTitle =
    document.getElementById("photoTitle");

const previousBtn =
    document.getElementById("previousBtn");

const nextBtn =
    document.getElementById("nextBtn");


/* =========================
   SHOW PHOTO
========================= */

function showPhoto() {

    /*
        Change the image immediately.
        No setTimeout.
        No fade delay.
    */

    photo.src =
        "../zylahspic/" + photos[currentPhoto];


    /* Photo counter */

    photoNumber.textContent =
        `${currentPhoto + 1} / ${photos.length}`;


    /* Photo title */

    if (currentPhoto === 0) {

        photoTitle.textContent =
            "Baby Zylah 🐾";

    }

    else if (currentPhoto < 10) {

        photoTitle.textContent =
            "Little Zylah 🐶💗";

    }

    else if (currentPhoto < 25) {

        photoTitle.textContent =
            "Growing Zylah 🐾❤️";

    }

    else if (currentPhoto < 40) {

        photoTitle.textContent =
            "Big Girl Zylah 🐶💕";

    }

    else {

        photoTitle.textContent =
            "Our Beautiful Zylah ❤️🐾";

    }

}


/* =========================
   NEXT BUTTON
========================= */

nextBtn.addEventListener("click", function () {

    currentPhoto++;

    if (currentPhoto >= photos.length) {

        currentPhoto = 0;

    }

    showPhoto();

});


/* =========================
   PREVIOUS BUTTON
========================= */

previousBtn.addEventListener("click", function () {

    currentPhoto--;

    if (currentPhoto < 0) {

        currentPhoto =
            photos.length - 1;

    }

    showPhoto();

});


/* =========================
   FIRST PHOTO
========================= */

showPhoto();