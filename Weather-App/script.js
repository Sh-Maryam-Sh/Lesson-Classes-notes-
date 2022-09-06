/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
//let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const getWeatherData = (city) => {
  //const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '65a3137978msh3929f9fea0d112cp1c8fdejsnb79c79fd6f8a',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

return fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
	.then(response => response.json())
	.then(response => response)
	.catch(err => console.error(err));

  //CODE GOES HERE
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  const data = await getWeatherData(city)
  showWeatherData(data)
  

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  document.getElementById('city-name').innerText = weatherData.location.name
  document.getElementById('weather-type').innerText = weatherData.current.condition.text
  document.getElementById('temp').innerText = weatherData.current.temp_c
  document.getElementById('humidity').innerText = weatherData.current.humidity
  document.getElementById('uv').innerText = weatherData.current.uv
}

  


