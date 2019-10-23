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

    const main = (callback) =>{
        window.onload = () =>{
            callback()
        }
    };

    return {
        getLocation,
        getWeather,
        main,
    }
})();


export default Utilities