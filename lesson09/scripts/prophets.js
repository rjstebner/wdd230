const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`failed to fetch data`);
        }

        const data = await response.json();
        displayProphets(data.prophets);
    }   catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

const displayProphets = (prophets) => {
    const cards = document.querySelector(`#cards`);
    cards.innerHTML ="";
    prophets.forEach((prophet) => {
        const card = document.createElement('div');
        card.className = 'prophet-card';

        const nameElement = document.createElement('h2');
        nameElement.textContent = prophet.name;

        const birthdayElement = document.createElement('p');
        birthdayElement.textContent = `Birthdate: ${prophet.birthdate}`;

        const portrait = document.createElement('img')
        portrait.src = prophet.imageurl;
        portrait.setAttribute('alt', `Portrait of ${prophet.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(nameElement);
        card.appendChild(birthdayElement);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};
getProphetData();