const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
})

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const heading = card.querySelector('.toggle');
        const content = card.querySelector('.toggle-content');
        const image = card.querySelector('.toggle-image');

        heading.addEventListener('click', function () {
            content.classList.toggle('hidden');
            
            // Check if image is present before toggling its class
            if (image) {
                image.classList.toggle('hidden');
            }
        });
    });
});
