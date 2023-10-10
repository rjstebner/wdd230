const images = document.querySelectorAll('.slider-image');
let currentIndex = 0;

function showSlide(index) {
    images[currentIndex].style.display = 'none';
    currentIndex = (index + images.length) % images.length;
    images[currentIndex].style.display = 'block';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 6000); // Automatically advance to the next slide every few seconds
