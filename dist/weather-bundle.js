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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/sparetime.js/dist/spare.js":
/*!*************************************************!*\
  !*** ./node_modules/sparetime.js/dist/spare.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nfunction spare() {\r\n    (function (window) {\r\n        function defineSpare() {\r\n            //console.log('Touch framework is running')\r\n            var Spare = {};\r\n            //@ts-ignore\r\n            Spare.info = function () {\r\n                console.log('Touch framework is running');\r\n            };\r\n            //@ts-ignore\r\n            Spare.addEvent = function (selector, eventName, exec) {\r\n                var element = document.querySelector(selector);\r\n                element.addEventListener(eventName, function () {\r\n                    console.log(exec());\r\n                    exec();\r\n                });\r\n            };\r\n            //@ts-ignore\r\n            Spare.create = function (tagName) {\r\n                var Element = new Ele();\r\n                return Element.create(tagName);\r\n            };\r\n            //@ts-ignore\r\n            Spare.sel = function (selector) {\r\n                var element = new Ele();\r\n                return element.sel(selector);\r\n            };\r\n            return Spare;\r\n        }\r\n        if (typeof Spare === \"undefined\") {\r\n            window.Spare = defineSpare();\r\n        }\r\n        // defineTouch()\r\n    })(window); //hello\r\n}\r\n;\r\nvar Ele = /** @class */ (function () {\r\n    function Ele() {\r\n        var _this = this;\r\n        this.attr = function (attr, value) {\r\n            _this.element.setAttribute(attr, value);\r\n            return _this.methodList();\r\n        };\r\n        this.Class = function () {\r\n            var _a;\r\n            var className = [];\r\n            for (var _i = 0; _i < arguments.length; _i++) {\r\n                className[_i] = arguments[_i];\r\n            }\r\n            (_a = _this.element.classList).add.apply(_a, className);\r\n            return _this.methodList();\r\n        };\r\n        this.html = function (html) {\r\n            _this.element.innerHTML = \"\" + html;\r\n            return _this.methodList();\r\n        };\r\n        this.append = function () {\r\n            var _a;\r\n            var children = [];\r\n            for (var _i = 0; _i < arguments.length; _i++) {\r\n                children[_i] = arguments[_i];\r\n            }\r\n            (_a = _this.element).append.apply(_a, children);\r\n            return _this.methodList();\r\n        };\r\n    }\r\n    Object.defineProperty(Ele.prototype, \"element\", {\r\n        get: function () {\r\n            return this._element;\r\n        },\r\n        set: function (value) {\r\n            this._element = value;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Ele.prototype.methodList = function () {\r\n        var methods = this._methods =\r\n            { Class: this.Class,\r\n                attr: this.attr,\r\n                html: this.html,\r\n                element: this.element,\r\n                append: this.append\r\n            };\r\n        return __assign({}, methods);\r\n    };\r\n    Ele.prototype.create = function (tagName) {\r\n        this.element = document.createElement(tagName);\r\n        return this.methodList();\r\n    };\r\n    Ele.prototype.sel = function (selector) {\r\n        this.element = document.querySelector(selector);\r\n        return this.methodList();\r\n    };\r\n    // prototype\r\n    Ele.copy = function () {\r\n        return new Ele();\r\n    };\r\n    return Ele;\r\n}());\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (spare);\n\n//# sourceURL=webpack:///./node_modules/sparetime.js/dist/spare.js?");

/***/ }),

/***/ "./src/components/Gui.js":
/*!*******************************!*\
  !*** ./src/components/Gui.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/components/settings.js\");\nvar sparetime_js_1 = __webpack_require__(/*! sparetime.js */ \"./node_modules/sparetime.js/dist/spare.js\");\nsparetime_js_1[\"default\"]();\nvar Gui = (function () {\n    var ShowWeatherImage = function (weather) {\n        var weatherArr = ['rain', 'clear', 'haze', 'clouds',];\n        if (weatherArr[0] === weather.toLowerCase()) {\n            //console.log(weather.toLowerCase(), weatherArr[0]);\n            return settings_1[\"default\"].weatherImages.rain;\n        }\n        if (weatherArr[1] === weather.toLowerCase()) {\n            //console.log(weather.toLowerCase(), weatherArr[1]);\n            return settings_1[\"default\"].weatherImages.clear;\n        }\n        if (weatherArr[2] === weather.toLowerCase()) {\n            //console.log(weather.toLowerCase(), weatherArr[2]);\n            return settings_1[\"default\"].weatherImages.haze;\n        }\n        if (weatherArr[3] === weather.toLowerCase()) {\n            //console.log(weather.toLowerCase(), weatherArr[3]);\n            return settings_1[\"default\"].weatherImages.clouds;\n        }\n    };\n    var handleUserInput = function (callback) {\n        var city = Spare.sel('#city').element.value;\n        var url = \"https://api.openweathermap.org/data/2.5/weather?q=\" + city + \"&appid=\" + settings_1[\"default\"].special + \" \";\n        callback(url);\n    };\n    var showWeather = function (data) {\n        console.log(data);\n        var temp = Math.floor(data.main.temp);\n        var currentWeather = data.weather[0].main;\n        console.info(currentWeather);\n        Spare.sel('#country').html(\"<em>Country:</em> \" + data.sys.country);\n        Spare.sel('#temp').html(temp + \" <em>F\\u00B0</em> \");\n        Spare.sel('#country-city').html(\"<em>City: </em>\" + data.name);\n        Spare.sel('#weather-type').html(\"<span>\" + data.weather[0].main + \"</span>\");\n        Spare.sel('#wind').html(\"<em>Wind:</em> \" + data.wind.speed);\n        Spare.sel('#weather-img')\n            .attr('alt', \"\" + data.weather[0].icon)\n            .attr('src', ShowWeatherImage(currentWeather));\n        Spare.sel('#humidity').html(\" <em>Humidity: </em> \" + data.main.humidity);\n    };\n    return {\n        handleUserInput: handleUserInput,\n        showWeather: showWeather\n    };\n})();\nexports[\"default\"] = Gui;\n\n\n//# sourceURL=webpack:///./src/components/Gui.js?");

/***/ }),

/***/ "./src/components/Utillites.js":
/*!*************************************!*\
  !*** ./src/components/Utillites.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/components/settings.js\");\nvar Gui_1 = __webpack_require__(/*! ./Gui */ \"./src/components/Gui.js\");\nvar Utilities = (function () {\n    var getLocation = function () {\n        if (navigator.geolocation) {\n            navigator.geolocation.getCurrentPosition(showPosition);\n        }\n        else {\n            Spare.sel('#demo').html(\"Geolocation is not supported by this browser.\");\n        }\n    };\n    function showPosition(position) {\n        var lat = position.coords.latitude;\n        var lon = position.coords.longitude;\n        var urlLocation = \"https://api.openweathermap.org/data/2.5/weather?lat=\" + lat + \"&lon=\" + lon + \"&appid=\" + settings_1[\"default\"].special;\n        getWeather(urlLocation).then(function (data) { return Gui_1[\"default\"].showWeather(data); });\n    }\n    function getWeather(workingUrl) {\n        return __awaiter(this, void 0, void 0, function () {\n            var data, e_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 3, , 4]);\n                        return [4 /*yield*/, fetch(workingUrl)];\n                    case 1:\n                        data = _a.sent();\n                        return [4 /*yield*/, data.json()];\n                    case 2: return [2 /*return*/, _a.sent()];\n                    case 3:\n                        e_1 = _a.sent();\n                        return [3 /*break*/, 4];\n                    case 4: return [2 /*return*/];\n                }\n            });\n        });\n    }\n    ;\n    var main = function (callback) {\n        window.onload = function () {\n            callback();\n        };\n    };\n    return {\n        getLocation: getLocation,\n        getWeather: getWeather,\n        main: main\n    };\n})();\nexports[\"default\"] = Utilities;\n\n\n//# sourceURL=webpack:///./src/components/Utillites.js?");

/***/ }),

/***/ "./src/components/settings.js":
/*!************************************!*\
  !*** ./src/components/settings.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports[\"default\"] = {\n    weatherImages: {\n        rain: 'http://icons.iconarchive.com/icons/large-icons/large-weather/256/rain-icon.png',\n        clear: 'https://cdn3.iconfinder.com/data/icons/bebreezee-weather-symbols/690/icon-weather-sunrainheavy-512.png',\n        haze: 'https://cdn0.iconfinder.com/data/icons/clouds-and-precipitation-filled/64/Clouds_and_Precipitation_EXP_04_Sun_with_fog_mist_haze_smoke_weather_forecast-512.png',\n        clouds: \"http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-many-clouds-icon.png\"\n    },\n    special: '8782b27405d40d14bf1e44126fddeb97'\n};\n\n\n//# sourceURL=webpack:///./src/components/settings.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_weather__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// const apiKey = \"8782b27405d40d14bf1e44126fddeb97\";\n//\n// var x = document.getElementById(\"demo\");\n// function getLocation() {\n//     if (navigator.geolocation) {\n//         navigator.geolocation.getCurrentPosition(showPosition);\n//     } else {\n//         x.innerHTML = \"Geolocation is not supported by this browser.\";\n//     }\n//\n//\n// }\n//\n// function showPosition(position) {\n//     let lat = position.coords.latitude;\n//     let lon = position.coords.longitude;\n//\n//\n//\n//     let urlLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;\n//\n//     getWeather(urlLocation);\n// }\n//\n//\n// window.onload = () => {\n//\n//     $('weather-img').setAttribute('src', weatherImages.clear);\n//\n// };\n//\n//\n//\n// let weatherImages = {\n//\n//     rain: 'http://icons.iconarchive.com/icons/large-icons/large-weather/256/rain-icon.png',\n//     clear: 'https://cdn3.iconfinder.com/data/icons/bebreezee-weather-symbols/690/icon-weather-sunrainheavy-512.png',\n//     haze: 'https://cdn0.iconfinder.com/data/icons/clouds-and-precipitation-filled/64/Clouds_and_Precipitation_EXP_04_Sun_with_fog_mist_haze_smoke_weather_forecast-512.png',\n//     clouds:\"http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-many-clouds-icon.png\",\n//\n// };\n//\n//\n// ShowWeatherImage = (weather) => {\n//\n//     let  weatherArr = ['rain','clear','haze','clouds',];\n//\n//\n//\n//\n//     if(weatherArr[0] === weather.toLowerCase()) {\n//\n//         console.log( weather.toLowerCase(), weatherArr[0]);\n//         return weatherImages.rain;\n//     }\n//\n//     if(weatherArr[1] === weather.toLowerCase()) {\n//         console.log( weather.toLowerCase(), weatherArr[1]);\n//         return weatherImages.clear;\n//     }\n//\n//     if(weatherArr[2] === weather.toLowerCase()) {\n//\n//         console.log( weather.toLowerCase(), weatherArr[2]);\n//         return weatherImages.haze;\n//     }\n//\n//     if(weatherArr[3] === weather.toLowerCase()) {\n//\n//         console.log( weather.toLowerCase(), weatherArr[3]);\n//         return weatherImages.clouds;\n//     }\n//\n//\n//\n// };\n//\n//\n// function $(id){\n//\n//     return document.getElementById(id);\n//\n// }\n//\n// handleUserInput =()=>{\n//\n//     // get city from user\n//     var city;\n//\n//     city = $('city').value;\n//\n//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey} `;\n//\n//\n//     //handle fetch\n//     getWeather(url);\n//\n//\n//\n//\n//\n//\n// };\n//\n//\n//\n//\n// getWeather = (workingUrl) =>{\n//\n//     fetch(workingUrl).then((results) => {\n//\n//         return results.json()\n//     }).then( data => {\n//         //console.log(data);\n//\n//         let currentWeather = data.weather[0].main;\n//\n//         $('country').innerHTML = `<em>Country:</em> ${data.sys.country}`;\n//         $('temp').innerHTML = ` Todays current tempeture is  <em>°F ${data.main.temp}</em> `;\n//         $('country-city').innerHTML = `<em>City: </em>${data.name}`;\n//         $('weather-type').innerHTML = `<span>${data.weather[0].main}</span>`;\n//         $('weather-img').setAttribute('alt',`${data.weather[0].icon}`);\n//         $('weather-img').setAttribute('src',ShowWeatherImage(currentWeather));\n//         $('humidity').innerText = `Humidity: ${data.main.humidity}`;\n//\n//         change = () =>{\n//             convert(data.main.temp);\n//         };\n//\n//\n//     });\n//\n//\n// };\n//\n//\n// convert = (f) => {\n//\n//\n//\n//     let c = (f - 32 * 5) / 9;\n//     // let ff = (c * 9 ) / 5 + 32;\n//\n//\n//\n//     $('temp').innerHTML = `<h4> Todays current tempeture is  <em>°C ${parseInt(c)}</em> </h4>`;\n//\n//     console.log(counter)\n//\n// };\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar Utillites_1 = __webpack_require__(/*! ./components/Utillites */ \"./src/components/Utillites.js\");\nvar settings_1 = __webpack_require__(/*! ./components/settings */ \"./src/components/settings.js\");\nvar Gui_1 = __webpack_require__(/*! ./components/Gui */ \"./src/components/Gui.js\");\nvar setUp = (function () {\n    var setDefaultWeatherImage = function () {\n        Spare.sel('#weather-img').attr('src', settings_1[\"default\"].weatherImages.clear);\n    };\n    var btnEvents = function () {\n        var btnLocatiion = Spare.sel('#btn-location').element;\n        var submitBtn = Spare.sel('#btn-submit').element;\n        btnLocatiion.onclick = function () {\n            Utillites_1[\"default\"].getLocation();\n        };\n        submitBtn.onclick = function () {\n            Gui_1[\"default\"].handleUserInput(function (url) {\n                Utillites_1[\"default\"].getWeather(url).then(function (data) { return Gui_1[\"default\"].showWeather(data); });\n            });\n        };\n    };\n    return {\n        btnEvents: btnEvents,\n        setDefaultWeatherImage: setDefaultWeatherImage\n    };\n})();\n//  startup\nUtillites_1[\"default\"].main(function () {\n    setUp.btnEvents();\n    setUp.setDefaultWeatherImage();\n});\n\n\n//# sourceURL=webpack:///./src/weather.js?");

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/index.js ./src/weather.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/ispirett/WebstormProjects/Microverse/weather-app/src/index.js */\"./src/index.js\");\nmodule.exports = __webpack_require__(/*! /home/ispirett/WebstormProjects/Microverse/weather-app/src/weather.js */\"./src/weather.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js_./src/weather.js?");

/***/ })

/******/ });