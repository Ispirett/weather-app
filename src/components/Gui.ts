import settings from './settings'
import spare from 'sparetime.js'
spare();
const Gui = (() => {
    const ShowWeatherImage = (weather: string): string => {
        let weatherArr: Array<string> = ['rain', 'clear', 'haze', 'clouds',];
        if (weatherArr[0] === weather.toLowerCase()) {
            return settings.weatherImages.rain;
        }

        if (weatherArr[1] === weather.toLowerCase()) {
            return settings.weatherImages.clear;
        }

        if (weatherArr[2] === weather.toLowerCase()) {
            return settings.weatherImages.haze;
        }

        if (weatherArr[3] === weather.toLowerCase()) {
            return settings.weatherImages.clouds;
        }


    };
    const handleUserInput = (callback: Function): void => {
        const city = Spare.sel('#city').element.value;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${settings.special} `;

        callback(url);
    };

    const showWeather = (data):void=> {
        const temp =  Math.floor(data.main.temp);
        let currentWeather = data.weather[0].main;
        console.info(currentWeather)
        Spare.sel('#country').html(`<em>Country:</em> ${data.sys.country}`);
        Spare.sel('#temp').html(`${temp} <em>F°</em> `);
        Spare.sel('#country-city').html(`<em>City: </em>${data.name}`);
        Spare.sel('#weather-type').html(`<span>${data.weather[0].main}</span>`);
        Spare.sel('#wind').html(`<em>Wind:</em> ${data.wind.speed}`);
        Spare.sel('#weather-img')
            .attr('alt', `${data.weather[0].icon}`)
            .attr('src', ShowWeatherImage(currentWeather));
        Spare.sel('#humidity').html(` <em>Humidity: </em> ${data.main.humidity}`);
    };
    return{
        handleUserInput,
        showWeather
    }
})();


export  default  Gui