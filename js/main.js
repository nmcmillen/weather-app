console.log("hello world");
let appId = "151fc331ffb2d59e71cc69883616aee0";
var lat = "";
var lon = "";
var geolocated = false;

let weatherData = {
  city: "",
  condition: "",
  icon: "",
  temp: 0,
};

async function getData() {
  console.log("anything", lat, lon);
  try {
    if (geolocated === true) {
      response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=imperial`
      );
    } else {
      let zipcode = document.getElementById("search-form").value;
      response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${appId}`
      );
    }
    apiData = response.data;
  } catch (err) {
    console.error("No ZIP code information available", err);
    return zipError();
  }
  console.log(apiData);
  return apiData;
}

function zipError() {
  document.getElementById("error-message").style.display = "block";
}

async function updateState() {
  await getData();
  // City Name
  weatherData.city = apiData.name;
  // Weather Condition
  weatherData.condition = apiData.weather[0].main;
  // Temperature
  weatherData.temp = apiData.main.temp;
  // Image Icon
  weatherData.icon = apiData.weather[0].icon;
  return weatherData;
}

async function updateDOM() {
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
  });
  await updateState();

  // Makes the HTML visible again from being hidden in CSS
  document.getElementById("hide-form").style.display = "block";
  document.getElementById("error-message").style.display = "none";
  document.getElementById("city-name").textContent = weatherData.city;
  document.getElementById("kelvin").textContent =
    Math.round((weatherData.temp - 32) * (5 / 9) + 273.15) + " K";
  document.getElementById("fahrenheit").textContent =
    Math.round(weatherData.temp) + "°F";
  document.getElementById("celsius").textContent =
    Math.round((weatherData.temp - 32) / 1.8) + "°C";
  document.getElementById("weather-condition").textContent =
    weatherData.condition;
  document.getElementById(
    "weather-icon"
  ).src = `https://openweathermap.org/img/wn/${weatherData.icon}@4x.png`;

  // Sets 'geolocated' to false in order to allow search by zipcode
  geolocated = false;
}

function getLocation() {
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  navigator.geolocation.getCurrentPosition((position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    setLocation(latitude, longitude);
  });
}

function setLocation(latitude, longitude) {
  lat = latitude;
  lon = longitude;
  geolocated = true;
  console.log("set", lat, lon);
  updateDOM();
}
