async function getWeather () {
    //zipcode = document.getElementById('search-form').value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${appId}`);
    const apiData = await response.json();
    console.log(apiData)
    document.getElementById('city-name').textContent = apiData.name
    document.getElementById('kelvin').textContent = Math.round((apiData.main.temp-32)*(5/9)+273.15) + " K";
    document.getElementById('fahrenheit').textContent = Math.round(apiData.main.temp) + "°F";
    document.getElementById('celsius').textContent = Math.round((apiData.main.temp-32)/1.8) + "°C";
    document.getElementById('weather-condition').textContent = apiData.weather[0].main;
    //return weatherData(apiData);
}