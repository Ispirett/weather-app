import Utilities from './components/Utillites'
import settings from './components/settings'
import Gui from './components/Gui'



const setUp = (() => {
   const setDefaultWeatherImage = () =>{
       Spare.sel('#weather-img').attr('src', settings.weatherImages.clear);
   };
    const btnEvents = () => {
        const btnLocatiion = Spare.sel('#btn-location').element;
        const submitBtn = Spare.sel('#btn-submit').element;

        btnLocatiion.onclick = () => {
            Utilities.getLocation();
        };

        submitBtn.onclick = () => {
            Gui.handleUserInput((url) =>{
                Utilities.getWeather(url).then(data => Gui.showWeather(data));

            })
        };
    };
    return {
        btnEvents,
        setDefaultWeatherImage
    }
})();

//  startup



Utilities.main(() =>{
    setUp.btnEvents();
    setUp.setDefaultWeatherImage();
});



