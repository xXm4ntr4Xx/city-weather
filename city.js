

const citiesArray = [];

let iconImage = document.querySelector(".weather-icon");
let city = document.querySelector(".weather-city");
let country = document.querySelector(".weather-country");
let region = document.querySelector(".weather-region");
let temperature = document.querySelector(".weather-temperature");
let sky = document.querySelector(".weather-sky");
let wind = document.querySelector(".weather-wind");
let cityTextInput = document.querySelector(".city-text");
let cityButton = document.querySelector("#city-button");





//city weather info
    async function fetchCity(){
 
    const cityString = cityTextInput.value;
    //check if the input field is empty
    if(cityString ==="") {alert("No string available"); return false }

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=f739b39bdff8485db8f203020212312&q=${cityString}&aqi=no`)
    const data = await response.json();

    cityTextInput.value = "";
    

    
    let cityName = data.location.name;
    let countryName = data.location.country;
    let regionName = data.location.region;
    let temperatureC = data.current.temp_c;
    let skyCondition = data.current.condition.text;
    let windSpeed = data.current.wind_kph;
    let weatherIcon = data.current.condition.icon

    

    city.innerHTML=cityName;
    country.innerHTML=countryName;
    region.innerHTML=regionName;
    temperature.innerHTML=temperatureC;
    sky.innerHTML=skyCondition;
    wind.innerHTML=windSpeed;
    iconImage.src= weatherIcon;

    let newObject ={
        "city": cityName,
        "country": countryName,
        "region": regionName,
        "temperature": temperatureC,
        "skyCondition": skyCondition,
        "windSpeed": windSpeed
    }

    citiesArray.push(newObject);
    
    console.log(citiesArray)
}



cityButton.addEventListener("submit",fetchCity);










