console.log('hello world')
let appId = '151fc331ffb2d59e71cc69883616aee0';
// let zipcode = document.getElementById('search-form').value;
// const api_url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${appId}`;

let weatherData = {
    city: '',
    condition: '',
    temp: 0,
    // temps: {
    //     kelvin: 0,
    //     fahrenheit: 0,
    //     celsius: 0,
    // },
}

async function getData () {
    let zipcode = document.getElementById('search-form').value;
    response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${appId}`);
    apiData = response.data;
    console.log("first test",apiData)
    if (apiData.status !== 200) {
        return "error!";
      } else {
        return apiData;
      }
}

// getData();

async function updateState () {
    await getData();
    // City Name
    weatherData.city = apiData.name;
    // console.log("Success name",apiData.name)
    // Weather Condition
    weatherData.condition = apiData.weather[0].main;
    // console.log("Success condition",apiData.weather[0].main);
    // Temperature
    weatherData.temp = apiData.main.temp;
    // console.log("Success temp",apiData.main.temp);
    return weatherData;
}

// updateState();

async function updateDOM () {
    // await getData();
    await updateState();
    // console.log(weatherData);
    // Makes the HTML visible again from being hidden in CSS
    document.getElementById('hide-form').style.display = 'block';
    document.getElementById('city-name').textContent = weatherData.city;
    document.getElementById('kelvin').textContent = Math.round((weatherData.temp-32)*(5/9)+273.15) + " K";
    document.getElementById('fahrenheit').textContent = Math.round(weatherData.temp) + "°F";
    document.getElementById('celsius').textContent = Math.round((weatherData.temp-32)/1.8) + "°C";
    document.getElementById('weather-condition').textContent = weatherData.condition;
}