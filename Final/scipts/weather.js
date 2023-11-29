document.addEventListener('DOMContentLoaded', function () {
    const url = 'https://api.openweathermap.org/data/2.5/weather';
    const latitude = 20.25;
    const longitude = 86.55;
    const apiKey = '967b3cce833ff371e48d7dd79d54a3f9';

    const queryParams = `?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    const finalUrl = `${url}${queryParams}`;

    const weatherContainer = document.getElementById('weather-container');
    const alertContainer = document.getElementById('alert-container');
    const temperatureElement = document.getElementById('temperature');
    const humidityElement = document.getElementById('humidity');
    const forecastDetailsElement = document.getElementById('forecast-details');

    // Function to fetch weather data
    async function getWeather() {
        try {
            const response = await fetch(finalUrl);
            const data = await response.json();

            // Update current weather information

            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
            temperatureElement.innerHTML = `${Math.round(data.main.temp)} °C <img src="${iconUrl}" alt="Weather Icon">`;
            humidityElement.textContent = `Humidity: ${data.main.humidity}%`;

            // Fetch one day forecast using latitude and longitude
            const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
            const forecastData = await forecastResponse.json();

            // Extract relevant forecast details (including icon)
            const oneDayForecast = forecastData.list.slice(0, 8).map(entry => {
                // Extract only the hour and minute parts and convert to 12-hour format
                const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
                const hourAndMinute = new Date(entry.dt_txt).toLocaleString('en-US', timeOptions);

                return {
                    time: hourAndMinute,
                    temperature: Math.round(entry.main.temp),
                    condition: entry.weather[0].description,
                    icon: entry.weather[0].icon,
                };
            });

            // Display one day forecast
            forecastDetailsElement.innerHTML = oneDayForecast.map(entry =>
                `${entry.time}: ${entry.temperature} °C, <img src="https://openweathermap.org/img/wn/${entry.icon}.png" alt="${entry.condition}">`
            ).join('<br>');
        } catch (error) {
            console.error('Error fetching weather data:', error.message);
            showAlert('Failed to fetch weather data. Please try again later.');
        }
    }

    // Function to show a closeable alert
    function showAlert(message) {
        alertContainer.innerHTML = `<div>${message} <span onclick="this.parentElement.style.display='none';">[X]</span></div>`;
    }

    // Fetch weather data when the page loads
    getWeather();
});
