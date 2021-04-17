const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--next");
const prevButton = document.querySelector(".carousel__button--prev");


const slideWidth = slides[0].getBoundingClientRect().width;


const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
}
slides.forEach(setSlidePosition);

nextButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const ActuallySeen = document.querySelector(".testimony.current-slide");
    const currentlyHide = ActuallySeen.nextElementSibling;


    if (nextSlide === -1) return;
    if (currentlyHide === null) return;



    HideTestimony(currentlyHide, ActuallySeen);
    moveToSlide(track, currentSlide, nextSlide);

});


const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}

prevButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const ActuallySeen = document.querySelector(".testimony.current-slide");
    const currentlyHide = ActuallySeen.previousElementSibling;


    if (prevSlide === null) return;
    if (currentlyHide === null) return;

    HideTestimony(currentlyHide, ActuallySeen);
    moveToSlide(track, currentSlide, prevSlide);
});

const HideTestimony = (currentlyHide, ActuallySeen) => {
    ActuallySeen.classList.remove("current-slide");
    currentlyHide.classList.add("current-slide");

}

const matchResult = window.matchMedia("(max-width:700px)");
console.log(matchResult);