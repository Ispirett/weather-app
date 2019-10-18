"use strict";
exports.__esModule = true;
var apiKey = "8782b27405d40d14bf1e44126fddeb97";
var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var urlLocation = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
    getWeather(urlLocation);
}
window.onload = function () {
    $('weather-img').setAttribute('src', weatherImages.clear);
};
var weatherImages = {
    rain: 'http://icons.iconarchive.com/icons/large-icons/large-weather/256/rain-icon.png',
    clear: 'https://cdn3.iconfinder.com/data/icons/bebreezee-weather-symbols/690/icon-weather-sunrainheavy-512.png',
    haze: 'https://cdn0.iconfinder.com/data/icons/clouds-and-precipitation-filled/64/Clouds_and_Precipitation_EXP_04_Sun_with_fog_mist_haze_smoke_weather_forecast-512.png',
    clouds: "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-many-clouds-icon.png"
};
var ShowWeatherImage = function (weather) {
    var weatherArr = ['rain', 'clear', 'haze', 'clouds',];
    if (weatherArr[0] === weather.toLowerCase()) {
        console.log(weather.toLowerCase(), weatherArr[0]);
        return weatherImages.rain;
    }
    if (weatherArr[1] === weather.toLowerCase()) {
        console.log(weather.toLowerCase(), weatherArr[1]);
        return weatherImages.clear;
    }
    if (weatherArr[2] === weather.toLowerCase()) {
        console.log(weather.toLowerCase(), weatherArr[2]);
        return weatherImages.haze;
    }
    if (weatherArr[3] === weather.toLowerCase()) {
        console.log(weather.toLowerCase(), weatherArr[3]);
        return weatherImages.clouds;
    }
};
function $(id) {
    return document.getElementById(id);
}
var handleUserInput = function () {
    // get city from user
    var city;
    city = $('city').value;
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + " ";
    //handle fetch
    getWeather(url);
};
var getWeather = function (workingUrl) {
    fetch(workingUrl).then(function (results) {
        return results.json();
    }).then(function (data) {
        //console.log(data);
        var currentWeather = data.weather[0].main;
        $('country').innerHTML = "<em>Country:</em> " + data.sys.country;
        $('temp').innerHTML = " Todays current tempeture is  <em>\u00B0F " + data.main.temp + "</em> ";
        $('country-city').innerHTML = "<em>City: </em>" + data.name;
        $('weather-type').innerHTML = "<span>" + data.weather[0].main + "</span>";
        $('weather-img').setAttribute('alt', "" + data.weather[0].icon);
        $('weather-img').setAttribute('src', ShowWeatherImage(currentWeather));
        $('humidity').innerText = "Humidity: " + data.main.humidity;
        var change = function () {
            convert(data.main.temp);
        };
    });
};
var convert = function (f) {
    var c = (f - 32 * 5) / 9;
    // let ff = (c * 9 ) / 5 + 32;
    $('temp').innerHTML = "<h4> Todays current tempeture is  <em>\u00B0C " + parseInt(c) + "</em> </h4>";
    console.log(counter);
};
