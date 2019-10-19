import spare from 'sparetime.js'
spare();

import settings from './settings.json'

const apiKey = "8782b27405d40d14bf1e44126fddeb97";

const  x = document.getElementById("demo");


window.onload = () => {
    Spare.sel('#weather-img').attr('src', weatherImages.clear);
    console.log()
};


let weatherImages = {
    rain: 'http://icons.iconarchive.com/icons/large-icons/large-weather/256/rain-icon.png',
    clear: 'https://cdn3.iconfinder.com/data/icons/bebreezee-weather-symbols/690/icon-weather-sunrainheavy-512.png',
    haze: 'https://cdn0.iconfinder.com/data/icons/clouds-and-precipitation-filled/64/Clouds_and_Precipitation_EXP_04_Sun_with_fog_mist_haze_smoke_weather_forecast-512.png',
    clouds:"http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-many-clouds-icon.png",
};


// UI -----------------------------



const Gui = (() => {
    const ShowWeatherImage = (weather: string): string => {
        let weatherArr: Array<string> = ['rain', 'clear', 'haze', 'clouds',];

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
    const handleUserInput = (callback: Function): void => {
        const city = Spare.sel('#city').element.value;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey} `;

        callback(url);
    };

    const showWeather = (data) => {
        const temp =  Math.floor(data.main.temp);
        const btnTemp = Spare.sel('#btn-temp').element;
        let currentWeather = data.weather[0].main;

        Spare.sel('#country').html(`<em>Country:</em> ${data.sys.country}`);
        Spare.sel('#temp').html(` Today's current tempeture is  <em>°F ${parseInt(data.main.temp)}</em> `);
        Spare.sel('#country-city').html(`<em>City: </em>${data.name}`);
        Spare.sel('#weather-type').html(`<span>${data.weather[0].main}</span>`);
        Spare.sel('#weather-img')
            .attr('alt', `${data.weather[0].icon}`)
            .attr('src', ShowWeatherImage(currentWeather));
        Spare.sel('#humidity').html(`Humidity: ${data.main.humidity}`);
        Spare.sel('#temp').html(` Todays current tempeture is  <em>°F ${temp}</em>`);


        btnTemp.onclick = () => {

            Utilities.convert(temp);
        }
    };
    return{
        handleUserInput,
        showWeather
    }
})();
// Utilities  -----------------------------------------

const Utilities = (() => {

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    };

    function showPosition(position) {
        let lat = position.coords.latitude;
        let lon  = position.coords.longitude;
        let urlLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        getWeather(urlLocation).then(data => Gui.showWeather(data));
    }

    async  function getWeather(workingUrl) {

        try {
            let data = await fetch(workingUrl);
            return await data.json()
        }
        catch (e) {

        }

    };

    const convert = (value): number => {

        let temp = Spare.sel('#temp');
        let tempValue = Math.floor(temp.element.children[0].innerHTML.split(' ')[1]);
         console.log(tempValue, value);
        let c =   (value - 32) * 5 / 9;
        let ff = (c * 9 / 5) + 32;

        if (tempValue == value){
            temp.element.innerHTML= ` Todays current tempeture is  <em>°C ${c}</em>`;
            return c
        }
        else if(tempValue == c){
            temp.element.innerHTML = ` Todays current tempeture is  <em>°F ${ff}</em>`;
            return ff
        }
    };
    return {
        getLocation,
        getWeather,
        convert
    }
})();





//Events ----------------------------------

const Events = (() => {
    const btnEvents = () => {
        const btnLocatiion = Spare.sel('#btn-location').element;
        const submitBtn = Spare.sel('#btn-submit').element;

        btnLocatiion.onclick = () => {
            Utilities.getLocation();
            console.log(settings.repo)
        };

        submitBtn.onclick = () => {
            Gui.handleUserInput((url) =>{
                Utilities.getWeather(url).then(data => Gui.showWeather(data));

            })
        };
    };
    return {
        btnEvents
    }
})();

//  startup
Events.btnEvents();