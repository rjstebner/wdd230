let currentIndex = 0;
const slides = document.querySelectorAll('.fade')

function showSlide(index){
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? 1:0;
    })
}
function nextSlide(){
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex)
}

setInterval(nextSlide, 4000)

showSlide(currentIndex)