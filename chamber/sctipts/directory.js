const json = "data/members.json";
const cards = document.querySelector('#cards');

async function getCompanyData() {
    try {
        const response = await fetch(json);
        if (!response.ok) {
            throw new Error(`failed to fetch data`);
        }

        const data = await response.json();
        displayCompany(data.companies);
    }   catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

const displayCompany = (company) => {
    const cards = document.querySelector(`#cards`);
    cards.innerHTML ="";
    company.forEach((company) => {
        const card = document.createElement('div');
        card.className = 'company-card';

        const nameElement = document.createElement('h2');
        nameElement.textContent = company.name;

        const addressElement = document.createElement('p');
        addressElement.textContent = `${company.address}`;

        const companyImage = document.createElement('img')
        companyImage.src = company.imageurl;
        companyImage.setAttribute('alt', `image of ${company.name}`);
        companyImage.setAttribute('loading', 'lazy');

        const websiteElement = document.createElement('a');
        websiteElement.href = company.website;
        websiteElement.target = "_blank"
        websiteElement.textContent = `${company.website}`;

        const phoneElement = document.createElement('p');
        phoneElement.textContent = `${company.phone}`;

        card.appendChild(nameElement);
        card.appendChild(companyImage);
        card.appendChild(addressElement);
        card.appendChild(phoneElement);
        card.appendChild(websiteElement);

        cards.appendChild(card);
    });
};
getCompanyData();


const cardsButton = document.querySelector('#cards');
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');

gridButton.addEventListener('click', function() {
    cardsButton.classList.remove('list');
    cardsButton.classList.add('grid');
})

listButton.addEventListener('click', function() {
    cardsButton.classList.remove('grid');
    cardsButton.classList.add('list');
})

cardsButton.classList.add('grid')
