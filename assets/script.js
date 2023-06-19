const slides = [
    {
        image: "slide1.jpg",
        tagLine:
            "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        image: "slide2.jpg",
        tagLine:
            "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        image: "slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        image: "slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
];

const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const dots = document.querySelectorAll(".dot");
let txtImg = document.querySelector("#banner > p");
let bannerImg = document.querySelector(".banner-img");
let currentSlide = 0;

arrowRight.addEventListener("click", () => {
    dots[currentSlide].classList.remove("dot_selected");
    currentSlide++;
    if (currentSlide === slides.length) currentSlide = 0;
    dots[currentSlide].classList.add("dot_selected");
    newBannerImage();
});

arrowLeft.addEventListener("click", () => {
    dots[currentSlide].classList.remove("dot_selected");
    currentSlide--;
    if (currentSlide === -1) currentSlide = slides.length - 1;
    dots[currentSlide].classList.add("dot_selected");
    newBannerImage();
});

function newBannerImage() {
    if (currentSlide >= 0 && currentSlide < slides.length) {
        const slide = slides[currentSlide];
        bannerImg.src = "./assets/images/slideshow/" + slide.image;
        bannerImg.alt = "Banner Print-it: " + slide.tagLine;
        txtImg.innerHTML = slide.tagLine;
    }
}
