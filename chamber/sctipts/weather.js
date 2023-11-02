const apiKey = '7bb22bbbb32c414085d13129231910';
const city = 'dazaifu';
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;




function calculateWindChill(temperatureCelsius, windSpeedKph) {
  if (temperatureCelsius <= 10 && windSpeedKph > 4.8) {
    const windChill = 13.12 + 0.6215 * temperatureCelsius - 11.37 * Math.pow(windSpeedKph, 0.16) + 0.3965 * temperatureCelsius * Math.pow(windSpeedKph, 0.16);
    return Math.round(windChill) + '°C';
  } else {
    return 'N/A'; // To warm to calculate windchill
  }
}

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const weatherInfo = data.current;
    const temperatureCelsius = weatherInfo.temp_c;
    const condition = weatherInfo.condition.text;
    const windSpeedKph = weatherInfo.wind_kph;

    const windChill = calculateWindChill(temperatureCelsius, windSpeedKph);

    const weatherDisplay = `Temperature: ${temperatureCelsius}°C, Condition: ${condition}, Windchill: ${windChill}`;
    document.getElementById('weather-info').textContent = weatherDisplay;
  })
  .catch(error => {
    console.error('Error fetching weather data: ', error);
  });
