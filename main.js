console.log('hello world')
let appId = '151fc331ffb2d59e71cc69883616aee0';
// let zipcode = 40509
//let zipcode = document.getElementById('search-form').value;
//let newzip = document.getElementById('search-form').value;
//const api_url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${appId}`;

// function setZip() {
//   let zipcode = document.getElementById('search-form').value;
//   //alert("zipcode working"+zipcode)
//   console.log(zipcode)
// }

// setZip();

// let button = document.getElementById('weather-button');
// let searchForm = document.getElementById('search-form');


// function newZipcode () {
//   let zipcode = document.getElementById('search-form').value;
//   console.log(zipcode)
// }

// window.onload = function() {
//   document.getElementById('hide-form').style.display = 'none';
// };

// function hideForm () {
//   document.getElementById('city-section').style.display = 'none';
// };



async function getWeather () {
    let zipcode = document.getElementById('search-form').value;
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

// getWeather();


// function weatherData(apiData) {

// }

// getWeather();

// let buttonclick = getWeather();

// function getSunshine() {
//     console.log("testing",weatherData.windspeed)
//     document.getElementById('wind').textContent = weatherData.windspeed
//     console.log(weatherData.temp)
// }

// getSunshine();

// settingStateFunction



//main API fetch and response which is working (hardcoded to appId and zipcode variables currently)
//need to add async/await
// axios
// .get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${appId}`)
// .then(res => console.log(res.data))
// .catch(err => console.error(err));


// function addElement () {
//     // create a new div element
//     const newDiv = document.createElement("div");
  
//     // and give it some content
//     const newContent = document.createTextNode("Hi there and greetings!");
  
//     // add the text node to the newly created div
//     newDiv.appendChild(newContent);
  
//     // add the newly created element and its content into the DOM
//     const currentDiv = document.getElementById("div1");
//     document.body.insertBefore(newDiv, currentDiv);
//   }

  //addElement();






// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid=151fc331ffb2d59e71cc69883616aee0
// test the API link for Lexington: api.openweathermap.org/data/2.5/weather?zip=40509,us&appid=151fc331ffb2d59e71cc69883616aee0
// `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${appId}`