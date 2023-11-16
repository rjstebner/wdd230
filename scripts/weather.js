const url = 'https://api.openweathermap.org/data/2.5/weather';
const latitude = 33.51; 
const longitude = 130.52;
const apiKey = '967b3cce833ff371e48d7dd79d54a3f9';

const queryParams = `?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
const finalUrl = `${url}${queryParams}`;

// Make a fetch request to the Weather API
fetch(finalUrl)
  .then(response => response.json())
  .then(data => {
    const temperatureCelsius = Math.round(data.main.temp);
    const condition = data.weather[0].description;
    const iconCode = data.weather[0].icon;

    // Add weather icon to HTML first
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
    const iconImage = document.createElement('img');
    iconImage.src = iconUrl;
    document.getElementById('weather-info').appendChild(iconImage);

    // Display temperature and condition
    const weatherDisplay = `Temperature: ${temperatureCelsius}°C, Condition: ${condition}`;
    const weatherText = document.createElement('p');
    weatherText.textContent = weatherDisplay;
    document.getElementById('weather-info').appendChild(weatherText);
  })
  .catch(error => {
    console.error('Error fetching weather data: ', error);
  });
