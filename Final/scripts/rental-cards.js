const jsonData = "data/rental.json"
const cards = document.querySelector("#rentalCards")

async function getRentalData() {
    try{
        const response = await fetch(jsonData);
        if(!response.ok) {
            throw new Error('failed to fetch data');
        }
        const data = await response.json();
        displayRentals(data.rental_types);
    }
        catch (error) {
            console.error(`Error: ${error.message}`)
        }
}

const displayRentals =(rental_types) => {
    const cards = document.querySelector("#rentalCards");
    cards.innerHTML = "";
    rental_types.forEach((rental_type) => {
        const card = document.createElement('div');
        card.className = 'rentalCard';

        const nameElement = document.createElement('h3');
        nameElement.textContent = rental_type.type;

        const imageElement = document.createElement('img');
        imageElement.src = rental_type.info.image;
        imageElement.setAttribute('alt', `image of ${rental_type.type}`);
        imageElement.setAttribute('loading', 'lazy');

        const desElement = document.createElement('p');
        desElement.textContent = rental_type.info.description;
        
        card.appendChild(imageElement);
        card.appendChild(nameElement);
        card.appendChild(desElement);

        cards.appendChild(card);


    })

}
getRentalData()