const inputBox = document.querySelector('#search');
const searchBtn = document.getElementById('search-button');
const weather_img = document.querySelector('.image');
const temperature = document.querySelector('.temp');
const cityName = document.querySelector('.name')
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    var weather_data=" ";
    try{
    const url=`http://api.weatherapi.com/v1/current.json?key=498c28afaa5648c898450356230211&q=${city}&aqi=no`;
    const weather_dat = await fetch(`${url}`).then(response => response.json());
    weather_data=weather_dat;
    }
    catch (error){
        console.log(error);
    }

    if(weather_data.cod === `404`){
        // location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    // location_not_found.style.display = "none";
    // weather_body.style.display = "flex";
    temperature.innerHTML = `${weather_data.current.temp_c}°C`;
    cityName.innerHTML = `${weather_data.location.name}`


    humidity.innerHTML = `${weather_data.current.humidity}%`;
    wind_speed.innerHTML = `${weather_data.current.wind_kph}Km/h`;


    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});