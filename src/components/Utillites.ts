import settings from "./settings";
import Gui from "./Gui";

const Utilities = (() => {

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            Spare.sel('#demo').html( "Geolocation is not supported by this browser.");
        }
    };

    function showPosition(position) {
        let lat = position.coords.latitude;
        let lon  = position.coords.longitude;
        let urlLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${settings.special}`;
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

    const convertTemp = (temp:number , identity) => {
        const cel = Math.floor((temp - 35) * 5/9);
        let tempElement = Spare.sel(identity);
        let value = tempElement.element.innerText.split(' ')[1];
        if(value === 'F°'){
            tempElement.html(`${cel} <em>C°</em>`)
        }
        else {
            tempElement.html(`${temp} <em>F°</em>`)
        }
    };
    const main = (callback) =>{
        window.onload = () =>{
            callback()
        }
    };

    return {
        getLocation,
        getWeather,
        main,
        convertTemp
    }
})();


export default Utilities