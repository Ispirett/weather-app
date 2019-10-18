/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nconst apiKey = \"8782b27405d40d14bf1e44126fddeb97\";\r\n\r\nvar x = document.getElementById(\"demo\");\r\nfunction getLocation() {\r\n    if (navigator.geolocation) {\r\n        navigator.geolocation.getCurrentPosition(showPosition);\r\n    } else {\r\n        x.innerHTML = \"Geolocation is not supported by this browser.\";\r\n    }\r\n\r\n\r\n}\r\n\r\nfunction showPosition(position) {\r\n    let lat = position.coords.latitude;\r\n    let lon = position.coords.longitude;\r\n\r\n\r\n\r\n    let urlLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;\r\n\r\n    getWeather(urlLocation);\r\n}\r\n\r\n\r\nwindow.onload = () => {\r\n\r\n    $('weather-img').setAttribute('src', weatherImages.clear);\r\n\r\n};\r\n\r\n\r\n\r\nlet weatherImages = {\r\n\r\n    rain: 'http://icons.iconarchive.com/icons/large-icons/large-weather/256/rain-icon.png',\r\n    clear: 'https://cdn3.iconfinder.com/data/icons/bebreezee-weather-symbols/690/icon-weather-sunrainheavy-512.png',\r\n    haze: 'https://cdn0.iconfinder.com/data/icons/clouds-and-precipitation-filled/64/Clouds_and_Precipitation_EXP_04_Sun_with_fog_mist_haze_smoke_weather_forecast-512.png',\r\n    clouds:\"http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-many-clouds-icon.png\",\r\n\r\n};\r\n\r\n\r\nShowWeatherImage = (weather) => {\r\n\r\n    let  weatherArr = ['rain','clear','haze','clouds',];\r\n\r\n\r\n\r\n\r\n    if(weatherArr[0] === weather.toLowerCase()) {\r\n\r\n        console.log( weather.toLowerCase(), weatherArr[0]);\r\n        return weatherImages.rain;\r\n    }\r\n\r\n    if(weatherArr[1] === weather.toLowerCase()) {\r\n        console.log( weather.toLowerCase(), weatherArr[1]);\r\n        return weatherImages.clear;\r\n    }\r\n\r\n    if(weatherArr[2] === weather.toLowerCase()) {\r\n\r\n        console.log( weather.toLowerCase(), weatherArr[2]);\r\n        return weatherImages.haze;\r\n    }\r\n\r\n    if(weatherArr[3] === weather.toLowerCase()) {\r\n\r\n        console.log( weather.toLowerCase(), weatherArr[3]);\r\n        return weatherImages.clouds;\r\n    }\r\n\r\n\r\n\r\n};\r\n\r\n\r\nfunction $(id){\r\n\r\n    return document.getElementById(id);\r\n\r\n}\r\n\r\nhandleUserInput =()=>{\r\n\r\n    // get city from user\r\n    var city;\r\n\r\n    city = $('city').value;\r\n\r\n    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey} `;\r\n\r\n\r\n    //handle fetch\r\n    getWeather(url);\r\n\r\n\r\n\r\n\r\n\r\n\r\n};\r\n\r\n\r\n\r\n\r\ngetWeather = (workingUrl) =>{\r\n\r\n    fetch(workingUrl).then((results) => {\r\n\r\n        return results.json()\r\n    }).then( data => {\r\n        //console.log(data);\r\n\r\n        let currentWeather = data.weather[0].main;\r\n\r\n        $('country').innerHTML = `<em>Country:</em> ${data.sys.country}`;\r\n        $('temp').innerHTML = ` Todays current tempeture is  <em>°F ${data.main.temp}</em> `;\r\n        $('country-city').innerHTML = `<em>City: </em>${data.name}`;\r\n        $('weather-type').innerHTML = `<span>${data.weather[0].main}</span>`;\r\n        $('weather-img').setAttribute('alt',`${data.weather[0].icon}`);\r\n        $('weather-img').setAttribute('src',ShowWeatherImage(currentWeather));\r\n        $('humidity').innerText = `Humidity: ${data.main.humidity}`;\r\n\r\n        change = () =>{\r\n            convert(data.main.temp);\r\n        };\r\n\r\n\r\n    });\r\n\r\n\r\n};\r\n\r\n\r\nconvert = (f) => {\r\n\r\n\r\n\r\n    let c = (f - 32 * 5) / 9;\r\n    // let ff = (c * 9 ) / 5 + 32;\r\n\r\n\r\n\r\n    $('temp').innerHTML = `<h4> Todays current tempeture is  <em>°C ${parseInt(c)}</em> </h4>`;\r\n\r\n    console.log(counter)\r\n\r\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });