console.log('hello world')
let appId = '151fc331ffb2d59e71cc69883616aee0';

let weatherData = {
    city: '',
    condition: '',
    icon: '',
    temp: 0,
}


async function getData() {
    try {
    let zipcode = document.getElementById('search-form').value;
    response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${appId}`);
    apiData = response.data;
    } catch (err) {
        console.error('No ZIP code information available', err);
        return zipError();
    }
    return apiData
  }

  
  function zipError() {
    document.getElementById('error-message').style.display = 'block';
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
    // Image Icon
    weatherData.icon = apiData.weather[0].icon;
    return weatherData;
}

// updateState();

async function updateDOM () {
    await updateState();
    // Makes the HTML visible again from being hidden in CSS
    document.getElementById('hide-form').style.display = 'block';
    document.getElementById('error-message').style.display = 'none';
    document.getElementById('city-name').textContent = weatherData.city;
    document.getElementById('kelvin').textContent = Math.round((weatherData.temp-32)*(5/9)+273.15) + " K";
    document.getElementById('fahrenheit').textContent = Math.round(weatherData.temp) + "°F";
    document.getElementById('celsius').textContent = Math.round((weatherData.temp-32)/1.8) + "°C";
    document.getElementById('weather-condition').textContent = weatherData.condition;
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${weatherData.icon}@4x.png`;
}


// Geo Location (only works in console)
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;
    
    console.log(crd)
    
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
//   End Geo location


// Working async fetch function but does not have a catch to display errors.
// async function getData () {
//     let zipcode = document.getElementById('search-form').value;
//     response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${appId}`);
//     apiData = response.data;
//     console.log("first test",apiData)
//     console.log(apiData.status);
//     if (apiData.status !== 200) {
//         return "aldsjfkalkjdsf!";
//       } else {
//         return apiData;
//       }
// }