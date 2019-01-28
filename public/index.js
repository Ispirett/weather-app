



/*request(url,  (err, response, body) => {
    if (err){
        console.log("err", err)
    }
    else{
        console.log("body")
    }

    let weather = JSON.parse(body);

    console.log(`its, ${weather.main.temp} in ${weather.sys.country}`);
    ans = `its, ${weather.main.temp} in ${weather.sys.country}`

}); */





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


    var city;

    city = $('city').value;
    console.log(city);
    const apiKey = "8782b27405d40d14bf1e44126fddeb97";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey} `;
    var ans = "";






    fetch(url).then((results) => {

        return results.json()
    }).then( data => {
        //console.log(data);

        let currentWeather = data.weather[0].main;

        $('country').innerHTML = `<em>Country:</em> ${data.sys.country}`;
        $('temp-div').innerHTML = `<h4> Todays current tempeture is  <em>${data.main.temp}</em> </h4>`;

        $('weather-type').innerHTML = `<span>${data.weather[0].main}</span>`;
        $('weather-img').setAttribute('alt',`${data.weather[0].icon}`);
        $('weather-img').setAttribute('src',ShowWeatherImage(currentWeather));
        $('humidity').innerText = `Humidity: ${data.main.humidity}`


    });


};

window.onload = () => {

    $('weather-img').setAttribute('src', weatherImages.clear);

};