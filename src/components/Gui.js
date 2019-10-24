"use strict";
exports.__esModule = true;
var settings_1 = require("./settings");
var sparetime_js_1 = require("sparetime.js");
var Utillites_1 = require("./Utillites");
sparetime_js_1["default"]();
var Gui = (function () {
    var ShowWeatherImage = function (weather) {
        var weatherArr = ['rain', 'clear', 'haze', 'clouds',];
        var weatherString = weather.toLowerCase();
        switch (weatherString) {
            case weatherArr[0]:
                return settings_1["default"].weatherImages.rain;
            case weatherArr[1]:
                return settings_1["default"].weatherImages.clear;
            case weatherArr[2]:
                return settings_1["default"].weatherImages.haze;
            case weatherArr[3]:
                return settings_1["default"].weatherImages.clouds;
            default:
                return settings_1["default"].weatherImages.clear;
        }
    };
    var handleUserInput = function (callback) {
        var city = Spare.sel('#city').element.value;
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + settings_1["default"].special + " ";
        callback(url);
    };
    var showWeather = function (data) {
        var temp = Math.floor(data.main.temp);
        var btnTemp = Spare.sel('#btn-temp').element;
        var currentWeather = data.weather[0].main;
        Spare.sel('#country').html("<em>Country:</em> " + data.sys.country);
        Spare.sel('#temp').html(temp + " <em>F\u00B0</em> ");
        Spare.sel('#country-city').html("<em>City: </em>" + data.name);
        Spare.sel('#weather-type').html("<span>" + data.weather[0].main + "</span>");
        Spare.sel('#wind').html("<em>Wind:</em> " + data.wind.speed);
        Spare.sel('#weather-img')
            .attr('alt', "" + data.weather[0].icon)
            .attr('src', ShowWeatherImage(currentWeather));
        Spare.sel('#humidity').html(" <em>Humidity: </em> " + data.main.humidity);
        btnTemp.onclick = function () {
            Utillites_1["default"].convertTemp(temp, '#temp');
        };
    };
    return {
        handleUserInput: handleUserInput,
        showWeather: showWeather
    };
})();
exports["default"] = Gui;
