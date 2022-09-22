console.log('hello world')
let appId = '151fc331ffb2d59e71cc69883616aee0';
var lat = '';
var long = '';

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
    console.log(apiData)
    return apiData
}


  function zipError() {
    document.getElementById('error-message').style.display = 'block';
}

async function updateState () {
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

async function updateDOM () {
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
    })
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



function getLocation() {
  console.log("first setup", lat, long);

  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  navigator.geolocation.getCurrentPosition((position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    setLocation(latitude, longitude);
  });
}

function setLocation (latitude, longitude) {
    lat = latitude;
    long = longitude;
    console.log('actual coords', lat, long)
}



// async function getLocation() {
//   document.getElementById("form").addEventListener("submit", (e) => {
//     e.preventDefault();
//   });
  
  
//   const success = (position) => {
//       lat = position.coords.latitude
//       long = position.coords.longitude
//       console.log(lat, long)
//     };
    
//     const error = (error) => {
//         console.log(error);
//     };

//     navigator.geolocation.getCurrentPosition(success, error);
// }

// async function showLocation () {
//     await getLocation()
//     console.log(success)
// }


//-- GEO LOCATION (only works in console) --//
// var options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
// };

// function success(pos) {
//     var crd = pos.coords;
    
//     console.log(crd)
    
//     console.log('Your current position is:');
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude: ${crd.longitude}`);
//     console.log(`More or less ${crd.accuracy} meters.`);
// }

// function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
// }

//   End Geo location


// function geoFindMe() {

//     const status = document.querySelector('#status');
//     const mapLink = document.querySelector('#map-link');
  
//     mapLink.href = '';
//     mapLink.textContent = '';
  
//     function success(position) {
//       const latitude  = position.coords.latitude;
//       const longitude = position.coords.longitude;
  
//       status.textContent = '';
//       mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
//       mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
//     }
  
//     function error() {
//       status.textContent = 'Unable to retrieve your location';
//     }
  
//     if (!navigator.geolocation) {
//       status.textContent = 'Geolocation is not supported by your browser';
//     } else {
//       status.textContent = 'Locating…';
//       navigator.geolocation.getCurrentPosition(success, error);
//     }
  
//   }
  
//   document.querySelector('#find-me').addEventListener('click', geoFindMe);
  