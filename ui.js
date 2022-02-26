class UI {
    constructor() {
        this.cityName = document.getElementById('cityName');
        this.temp = document.getElementById('temp');
        this.desc = document.getElementById('desc');
        this.minmax = document.getElementById('minmax');
        this.alert = document.getElementById('alert');
        this.wIcon = document.getElementById('wIcon');
    }

    showCityName(cityName, country) {
        this.cityName.innerHTML = `${cityName}, ${country}`;
    }

    showTemp(temp) {
        this.temp.innerHTML = `${Math.round(temp)}°c`;
    }

    showMinMax(min, max) {
        this.minmax.innerHTML = `${Math.round(min)}°c / ${Math.round(max)}°c`;
    }
    showDesc(desc) {
        this.desc.innerHTML = `${desc}`;
    }
    showIcon(icon) {
        let iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
        this.wIcon.setAttribute('src', iconUrl);
        this.wIcon.style.display = 'block';
    }

    showAlert(text) {
        this.alert.innerHTML = `${text} tapılmadı..`;
    }

    clear() {
        this.alert.innerHTML = '';
    }
}