const json = "data/members.json";
const spotlightContainer = document.querySelector('#spotlight');

async function getCompanyData() {
    try {
        const response = await fetch(json);
        if (!response.ok) {
            throw new Error(`Failed to fetch data`);
        }

        const data = await response.json();
        displayCompany(data.companies);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

const displayCompany = (companies) => {
    const spotlights = document.querySelector(`#spotlight`);
    spotlights.innerHTML = "";

    companies.forEach((companyItem) => {
        if (companyItem.membership_level === 'Gold') {
            const spotlight = document.createElement('div');
            spotlight.className = 'company-spotlight';

            const nameElement = document.createElement('h3');
            nameElement.textContent = companyItem.name;

            const addressElement = document.createElement('p');
            addressElement.textContent = `${companyItem.address}`;

            const websiteElement = document.createElement('a');
            websiteElement.href = companyItem.website;
            websiteElement.target = "_blank";
            websiteElement.textContent = `${companyItem.website}`;

            const phoneElement = document.createElement('p');
            phoneElement.textContent = `${companyItem.phone}`;

            spotlight.appendChild(nameElement);
            spotlight.appendChild(addressElement);
            spotlight.appendChild(phoneElement);
            spotlight.appendChild(websiteElement);

            spotlights.appendChild(spotlight);
        }
    });
};

getCompanyData();
