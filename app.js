const weather = new Weather();
const ui = new UI();

document.getElementById('searchBtn').addEventListener('click', () => {
    ui.clear();

    const city = document.getElementById('city');
    let cityVal = city.value;
    city.value = '';

    if (cityVal !== '') {
        const clock = document.getElementById('clock');
        weather.getWeather(cityVal)
            .then(res => {
                // ui.showCityName(res)
                ui.showCityName(res.city.name, res.city.sys.country);
                ui.showTemp(res.city.main.temp);
                ui.showMinMax(res.city.main.temp_min, res.city.main.temp_max);
                ui.showDesc(res.city.weather[0].description);
                ui.showIcon(res.city.weather[0].icon);
                console.log(res.city);
            }).catch(error => {
                ui.showAlert(cityVal);
            });
        clock.style.display = "block";
    }
});


function time() {
    const clock = document.getElementById('clock');

    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}

setInterval(() => {
    time();
}, 1000);
