## Main Objective
Build a weather app using a API fetch (with axios) that allows the user to search current weather information. Weather App will allow the user to input a zipcode in the US which should pull up the city searched, temperature, weather condition, and other info such as an image of the weather condition.

## Goals
- Use https://openweathermap.org/’s API to fetch weather data.
- Allow the user to enter their location (zip code is probably easiest) and press a button to load the weather.
- Run an onClick or onSubmit that executes an Axios or fetch GET request to retrieve weather data from the API.
- Handle successful and unsuccessful attempts
- If the request is successful, display the following in a 'mobile app' format:
- City name
- Current weather conditions
- Current temperature in Kelvin, Fahrenheit, and Celsius
- A unique image, decided by the current temperature (The API has icons built-in, be sure to read the docs)
- If the request is unsuccessful, display a specific error message such as "Invalid Zip Code" or anything else that might come back from the API.
- Allow the user to continue entering new zip codes to get new weather data.

## Webpage Elements
1. Initial Welcome Page
- Contains only a title with "Weather App" or some other wording if wanted
- An input form
- A "Get Weather" button
2. Results Page
- Carries original Initial Welcome Page Content
- A "City" display box
- A temperature display box with 3 columns for kelvin, farenheit, and celsius
- A "Condition" box with as one column
- An "Other Info" box with a single column to display a weather image

## Objects
- Input form: input text, onSubmit()
    object.onsubmit = function(){myScript};
- Get Weather button: onClick()
- City: var element = document.createElement("elementName");
- Temp: var element = document.createElement("elementName");
- Condition: var element = document.createElement("elementName");
- Other Info: var element = document.createElement("elementName");