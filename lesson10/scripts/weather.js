const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?';
const latitude = 49.75;
const longitude = 6.64;
const apiKey = '967b3cce833ff371e48d7dd79d54a3f9';

const queryString = `lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

const finalUrl = `${url}${queryString}`;

function capitalizeWords(str) {
    return str.replace(/\b\w/g, match => match.toUpperCase());
}

function displayResults(data) {
    const temperature = data.main.temp.toFixed(0);
    const weatherEvents = data.weather;

    // Update HTML elements with the retrieved data
    currentTemp.textContent = `Temperature: ${temperature} °F`;

    // Clear existing weather events
    captionDesc.textContent;

    // Loop through all weather events and display them
    weatherEvents.forEach(event => {
        const iconCode = event.icon;
        const description = capitalizeWords(event.description);

        // Create an image element for each weather event
        const iconImage = document.createElement('img');
        iconImage.src = `https://openweathermap.org/img/wn/${iconCode}.png`;
        iconImage.alt = description;

        // Create a new paragraph element for each weather event
        const eventParagraph = document.createElement('p');
        eventParagraph.textContent = `${description}`;

        // Append the image and paragraph to the captionDesc element
        captionDesc.appendChild(iconImage);
        captionDesc.appendChild(eventParagraph);
    });
}




async function apiFetch() {
    try {
        const response = await fetch(finalUrl)
        if (response.ok){
        const data = await response.json();
        console.log(data);
        displayResults(data);
    } else {
        throw Error(await response.text());
    } 
    } catch (error) {
        console.log(error);
    }
}

apiFetch();