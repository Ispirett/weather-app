
const apiKey = "8782b27405d40d14bf1e44126fddeb97";

var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }


}

function showPosition(position) {
   let lat = position.coords.latitude;
    let lon = position.coords.longitude;



    let urlLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    getWeather(urlLocation);
}


window.onload = () => {

    $('weather-img').setAttribute('src', weatherImages.clear);

};



let weatherImages = {

    rain: 'http://icons.iconarchive.com/icons/large-icons/large-weather/256/rain-icon.png',
    clear: 'https://cdn3.iconfinder.com/data/icons/bebreezee-weather-symbols/690/icon-weather-sunrainheavy-512.png',
    haze: 'https://cdn0.iconfinder.com/data/icons/clouds-and-precipitation-filled/64/Clouds_and_Precipitation_EXP_04_Sun_with_fog_mist_haze_smoke_weather_forecast-512.png',
    clouds:"http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-many-clouds-icon.png",

};


 ShowWeatherImage = (weather) => {

   let  weatherArr = ['rain','clear','haze','clouds',];




       if(weatherArr[0] === weather.toLowerCase()) {

           console.log( weather.toLowerCase(), weatherArr[0]);
           return weatherImages.rain;
       }

       if(weatherArr[1] === weather.toLowerCase()) {
           console.log( weather.toLowerCase(), weatherArr[1]);
           return weatherImages.clear;
       }

       if(weatherArr[2] === weather.toLowerCase()) {

            console.log( weather.toLowerCase(), weatherArr[2]);
            return weatherImages.haze;
       }

       if(weatherArr[3] === weather.toLowerCase()) {

           console.log( weather.toLowerCase(), weatherArr[3]);
           return weatherImages.clouds;
       }



};


function $(id){

    return document.getElementById(id);

}

handleUserInput =()=>{

    // get city from user
    var city;

    city = $('city').value;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey} `;


    //handle fetch
    getWeather(url);






};




getWeather = (workingUrl) =>{

    fetch(workingUrl).then((results) => {

        return results.json()
    }).then( data => {
        //console.log(data);

        let currentWeather = data.weather[0].main;

        $('country').innerHTML = `<em>Country:</em> ${data.sys.country}`;
        $('temp-div').innerHTML = `<h4> Todays current tempeture is  <em>${data.main.temp}</em> </h4>`;
        $('country-city').innerHTML = `<em>City: </em>${data.name}`;
        $('weather-type').innerHTML = `<span>${data.weather[0].main}</span>`;
        $('weather-img').setAttribute('alt',`${data.weather[0].icon}`);
        $('weather-img').setAttribute('src',ShowWeatherImage(currentWeather));
        $('humidity').innerText = `Humidity: ${data.main.humidity}`


    });


};