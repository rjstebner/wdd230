const apiKey = '7bb22bbbb32c414085d13129231910';
const city = 'Fukuoka';
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

// Make a fetch request to the WeatherAPI
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const weatherInfo = data.current;
    const temperatureCelsius = weatherInfo.temp_c;
    const condition = weatherInfo.condition.text;

    const weatherDisplay = `Temperature: ${temperatureCelsius}°C, Condition: ${condition}`;
    document.getElementById('weather-info').textContent = weatherDisplay;
  })
  .catch(error => {
    console.error('Error fetching weather data: ', error);
  });