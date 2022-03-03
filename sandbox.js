//Wednesday 7:51pm this is pulling data but don't know how to get it into "let weatherData variable"

console.log('hello world')
let appId = '151fc331ffb2d59e71cc69883616aee0';
let zipcode = 92587;
const api_url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${appId}`;
//let expandingList = document.createElement('ul', { is : 'expanding-list' })
//let title = document.createElement("elementName");

let weatherData = {
    city: '',
    temps: {
        fahrenheit: 0,
    },
    windspeed: '5mph'
}

//console.log("init",weatherData)

async function getWeather () {
    const response = await fetch(api_url);
    const apiData = await response.json();
    console.log("ALLDATA",apiData);
    // console.log(apiData.name);
    console.log("before",weatherData)
    weatherData.city = apiData.name
    weatherData.windspeed = apiData.wind.speed
    console.log("windspeed",apiData.wind.speed)
    console.log("after",weatherData)
    console.log(data.wind.speed);

    //document.getElementById('wind').textContent = apiData.wind.speed;
    return weatherData;
}

getWeather();

let buttonclick = getWeather();

function getSunshine() {
    console.log("testing",weatherData.windspeed)
    document.getElementById('wind').textContent = weatherData.windspeed
    console.log(weatherData.temp)
}

getSunshine();

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