const gearButton = document.querySelector('#gear');
const setting = document.querySelector('.setting');

gearButton.addEventListener('click', () => {
    setting.classList.toggle('open');
    gearButton.classList.toggle('open');
})

const toggleDarkMode = document.getElementById('dark-mode');
const body = document.body;

toggleDarkMode.addEventListener('click', () => {
    body.classList.toggle('dark-mode')
})