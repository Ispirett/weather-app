import settings from './settings'
import spare from 'sparetime.js'
import Utilities from "./Utillites";
spare();
const Gui = (() => {
    const ShowWeatherImage = (weather: string): string => {
        let weatherArr: Array<string> = ['rain', 'clear', 'haze', 'clouds',];
        let weatherString:string = weather.toLowerCase();
        switch (weatherString) {
            case weatherArr[0]:
            return settings.weatherImages.rain;
            case weatherArr[1]:
            return settings.weatherImages.clear;
            case weatherArr[2]:
            return settings.weatherImages.haze;
            case weatherArr[3]:
            return settings.weatherImages.clouds;
            default:
            return settings.weatherImages.clear;
        }
    };

    const handleUserInput = (callback: Function): void => {
        const city = Spare.sel('#city').element.value;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${settings.special} `;

        callback(url);
    };

    const showWeather = (data):void=> {
        const temp =  Math.floor(data.main.temp);
        const btnTemp = Spare.sel('#btn-temp').element;
        let currentWeather = data.weather[0].main;
        Spare.sel('#country').html(`<em>Country:</em> ${data.sys.country}`);
        Spare.sel('#temp').html(`${temp} <em>F°</em> `);
        Spare.sel('#country-city').html(`<em>City: </em>${data.name}`);
        Spare.sel('#weather-type').html(`<span>${data.weather[0].main}</span>`);
        Spare.sel('#wind').html(`<em>Wind:</em> ${data.wind.speed}`);
        Spare.sel('#weather-img')
            .attr('alt', `${data.weather[0].icon}`)
            .attr('src', ShowWeatherImage(currentWeather));
        Spare.sel('#humidity').html(` <em>Humidity: </em> ${data.main.humidity}`);

        btnTemp.onclick = () =>{
            Utilities.convertTemp(temp,'#temp')
        }
    };
    return{
        handleUserInput,
        showWeather
    }
})();


export  default  Gui