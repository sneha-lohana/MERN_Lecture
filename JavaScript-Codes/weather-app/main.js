// Date formating
const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const dates = [0, "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const forecast = document.querySelector(".hourly-forecast");

// ApI key to retrieve data
const API_key = "427f3c11a0444fc5c1014874c61d90df";

//Format Time Function
function formatTime(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }
const date = new Date();
document.querySelector("#current-time").innerHTML = formatTime(date);
document.querySelector("#current-day").innerHTML = dates[date.getDate()] + " " + months[date.getUTCMonth()] + ", " + days[date.getDay()];

function setCurrentWeatherData(data){
    document.querySelector("#searched-city").innerHTML = data.name;
    document.querySelector("#current-temperature").innerHTML = Math.round(data.main.temp) + "&deg;C";
    document.querySelector("#weather-type").innerHTML = data.weather[0].description;
    document.querySelector("#weather-type").setAttribute("style", "text-transform: capitalize;");
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
    document.querySelector("#wind").innerHTML = data.wind.speed + "Km/h";
}

function getCurrentWeatherData(city, lat, lon){
    let url;
    if (city){
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
    }
    
    fetch(url)
        .then(res => res.json())
        .then(data => setCurrentWeatherData(data))
        .catch(error => console.error(error));
}

function setForecastWeatherData(data){
  forecast.innerHTML = "";
  data.list.forEach(wd => {
    // let wd = data.list[0];
    // console.log(wd);
    const forecastCard = document.createElement('div');
    forecastCard.className = 'col forecast-card';

    // Adding time to the card
    const forecastTime = document.createElement('h3');
    forecastTime.textContent = formatTime(new Date(wd.dt_txt));
    forecastCard.append(forecastTime);
    forecastCard.append(document.createElement('br'));

    // Adding the image of the forecast to the card
    const forecastIcon = document.createElement('img');
    forecastIcon.src = `https://openweathermap.org/img/wn/${wd.weather[0].icon}@2x.png`;
    forecastCard.append(forecastIcon);

    // Adding the forecast description to the card
    const forecastDesc = document.createElement('p');
    forecastDesc.className = "weather";
    forecastDesc.textContent = wd.weather[0].description;
    forecastDesc.setAttribute("style", "text-transform: capitalize;");
    forecastCard.append(forecastDesc);

    // Adding the forecast temperature to the card
    const forecastTemp = document.createElement('span');
    forecastTemp.innerHTML = `${Math.round(wd.main.temp)}&deg;C`;
    forecastCard.append(forecastTemp);

    forecast.append(forecastCard);
  });
}

function getForecastWeatherData(city, lat, lon){
    let url;
    if (city){
      url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}&units=metric&cnt=5`;
    } else{
      url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric&cnt=5`;
    }
    
    fetch(url)
        .then(res => res.json())
        .then(data => setForecastWeatherData(data))
        .catch(error => console.error(error));
}

function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#search-input").value;
    getCurrentWeatherData(city);
    getForecastWeatherData(city);
}

const searchBar = document.querySelector("#search-form");
searchBar.addEventListener("submit", handleSubmit);

// Loading the geo-location using navigator
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position);
  getCurrentWeatherData(null, position.coords.latitude, position.coords.longitude);
  getForecastWeatherData(null, position.coords.latitude, position.coords.longitude);
}, error => {
  console.error(error);
  getCurrentWeatherData("Pune");
  getForecastWeatherData("Pune");
});

