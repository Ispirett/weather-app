"use strict";
exports.__esModule = true;
var settings_1 = require("./settings");
var sparetime_js_1 = require("sparetime.js");
sparetime_js_1["default"]();
var Gui = (function () {
    var ShowWeatherImage = function (weather) {
        var weatherArr = ['rain', 'clear', 'haze', 'clouds',];
        if (weatherArr[0] === weather.toLowerCase()) {
            return settings_1["default"].weatherImages.rain;
        }
        if (weatherArr[1] === weather.toLowerCase()) {
            return settings_1["default"].weatherImages.clear;
        }
        if (weatherArr[2] === weather.toLowerCase()) {
            return settings_1["default"].weatherImages.haze;
        }
        if (weatherArr[3] === weather.toLowerCase()) {
            return settings_1["default"].weatherImages.clouds;
        }
    };
    var handleUserInput = function (callback) {
        var city = Spare.sel('#city').element.value;
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + settings_1["default"].special + " ";
        callback(url);
    };
    var showWeather = function (data) {
        var temp = Math.floor(data.main.temp);
        var currentWeather = data.weather[0].main;
        console.info(currentWeather);
        Spare.sel('#country').html("<em>Country:</em> " + data.sys.country);
        Spare.sel('#temp').html(temp + " <em>F\u00B0</em> ");
        Spare.sel('#country-city').html("<em>City: </em>" + data.name);
        Spare.sel('#weather-type').html("<span>" + data.weather[0].main + "</span>");
        Spare.sel('#wind').html("<em>Wind:</em> " + data.wind.speed);
        Spare.sel('#weather-img')
            .attr('alt', "" + data.weather[0].icon)
            .attr('src', ShowWeatherImage(currentWeather));
        Spare.sel('#humidity').html(" <em>Humidity: </em> " + data.main.humidity);
    };
    return {
        handleUserInput: handleUserInput,
        showWeather: showWeather
    };
})();
exports["default"] = Gui;
