"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var sparetime_js_1 = require("sparetime.js");
sparetime_js_1["default"]();
var settings_json_1 = require("./settings.json");
var apiKey = "8782b27405d40d14bf1e44126fddeb97";
var x = document.getElementById("demo");
window.onload = function () {
    Spare.sel('#weather-img').attr('src', weatherImages.clear);
    console.log();
};
var weatherImages = {
    rain: 'http://icons.iconarchive.com/icons/large-icons/large-weather/256/rain-icon.png',
    clear: 'https://cdn3.iconfinder.com/data/icons/bebreezee-weather-symbols/690/icon-weather-sunrainheavy-512.png',
    haze: 'https://cdn0.iconfinder.com/data/icons/clouds-and-precipitation-filled/64/Clouds_and_Precipitation_EXP_04_Sun_with_fog_mist_haze_smoke_weather_forecast-512.png',
    clouds: "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-many-clouds-icon.png"
};
// UI -----------------------------
var Gui = (function () {
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
    var handleUserInput = function (callback) {
        var city = Spare.sel('#city').element.value;
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + " ";
        callback(url);
    };
    var showWeather = function (data) {
        var temp = Math.floor(data.main.temp);
        var btnTemp = Spare.sel('#btn-temp').element;
        var currentWeather = data.weather[0].main;
        Spare.sel('#country').html("<em>Country:</em> " + data.sys.country);
        Spare.sel('#temp').html(" Today's current tempeture is  <em>\u00B0F " + parseInt(data.main.temp) + "</em> ");
        Spare.sel('#country-city').html("<em>City: </em>" + data.name);
        Spare.sel('#weather-type').html("<span>" + data.weather[0].main + "</span>");
        Spare.sel('#weather-img')
            .attr('alt', "" + data.weather[0].icon)
            .attr('src', ShowWeatherImage(currentWeather));
        Spare.sel('#humidity').html("Humidity: " + data.main.humidity);
        Spare.sel('#temp').html(" Todays current tempeture is  <em>\u00B0F " + temp + "</em>");
        btnTemp.onclick = function () {
            Utilities.convert(temp);
        };
    };
    return {
        handleUserInput: handleUserInput,
        showWeather: showWeather
    };
})();
// Utilities  -----------------------------------------
var Utilities = (function () {
    var getLocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    };
    function showPosition(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var urlLocation = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
        getWeather(urlLocation).then(function (data) { return Gui.showWeather(data); });
    }
    function getWeather(workingUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(workingUrl)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, data.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    ;
    var convert = function (value) {
        var temp = Spare.sel('#temp');
        var tempValue = Math.floor(temp.element.children[0].innerHTML.split(' ')[1]);
        console.log(tempValue, value);
        var c = (value - 32) * 5 / 9;
        var ff = (c * 9 / 5) + 32;
        if (tempValue == value) {
            temp.element.innerHTML = " Todays current tempeture is  <em>\u00B0C " + c + "</em>";
            return c;
        }
        else if (tempValue == c) {
            temp.element.innerHTML = " Todays current tempeture is  <em>\u00B0F " + ff + "</em>";
            return ff;
        }
    };
    return {
        getLocation: getLocation,
        getWeather: getWeather,
        convert: convert
    };
})();
//Events ----------------------------------
var Events = (function () {
    var btnEvents = function () {
        var btnLocatiion = Spare.sel('#btn-location').element;
        var submitBtn = Spare.sel('#btn-submit').element;
        btnLocatiion.onclick = function () {
            Utilities.getLocation();
            console.log(settings_json_1["default"].repo);
        };
        submitBtn.onclick = function () {
            Gui.handleUserInput(function (url) {
                Utilities.getWeather(url).then(function (data) { return Gui.showWeather(data); });
            });
        };
    };
    return {
        btnEvents: btnEvents
    };
})();
//  startup
Events.btnEvents();
