class Weather {
    constructor() {
        this.clinetId = '';
        this.clinetSecret = '';
        this.url = 'https://api.openweathermap.org/data/2.5/';
        this.key = 'd106ffeaa6b66f06bfdea74eb9393c0e';
    }

    async getWeather(cityName) {
        const cityResponse = await fetch(`${this.url}weather?q=${cityName}&appid=${this.key}&units=metric&lang=az`);
        const city = await cityResponse.json();

        return {
            city
        }
    }
}

