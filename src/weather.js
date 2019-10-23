"use strict";
exports.__esModule = true;
var Utillites_1 = require("./components/Utillites");
var settings_1 = require("./components/settings");
var Gui_1 = require("./components/Gui");
var setUp = (function () {
    var setDefaultWeatherImage = function () {
        Spare.sel('#weather-img').attr('src', settings_1["default"].weatherImages.clear);
    };
    var btnEvents = function () {
        var btnLocatiion = Spare.sel('#btn-location').element;
        var submitBtn = Spare.sel('#btn-submit').element;
        btnLocatiion.onclick = function () {
            Utillites_1["default"].getLocation();
        };
        submitBtn.onclick = function () {
            Gui_1["default"].handleUserInput(function (url) {
                Utillites_1["default"].getWeather(url).then(function (data) { return Gui_1["default"].showWeather(data); });
            });
        };
    };
    return {
        btnEvents: btnEvents,
        setDefaultWeatherImage: setDefaultWeatherImage
    };
})();
//  startup
Utillites_1["default"].main(function () {
    setUp.btnEvents();
    setUp.setDefaultWeatherImage();
});
