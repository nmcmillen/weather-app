console.log('hello world')
let appId = '151fc331ffb2d59e71cc69883616aee0';
// let zipcode = 40509
//const api_url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${appId}`;

async function getWeather () {
    document.getElementById('hide-form').style.display = 'block';
    let zipcode = document.getElementById('search-form').value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${appId}`);
    const apiData = await response.json();
    // .catch(err => {
    //   console.log(err);
    // })  
    console.log(apiData)
    document.getElementById('city-name').textContent = apiData.name
    document.getElementById('kelvin').textContent = Math.round((apiData.main.temp-32)*(5/9)+273.15) + " K";
    document.getElementById('fahrenheit').textContent = Math.round(apiData.main.temp) + "°F";
    document.getElementById('celsius').textContent = Math.round((apiData.main.temp-32)/1.8) + "°C";
    document.getElementById('weather-condition').textContent = apiData.weather[0].main;
    //return weatherData(apiData);
}

// .catch(err => {
//   console.log(err);
// })  







// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid=151fc331ffb2d59e71cc69883616aee0
// test the API link for Lexington: api.openweathermap.org/data/2.5/weather?zip=40509,us&appid=151fc331ffb2d59e71cc69883616aee0
// `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${appId}`