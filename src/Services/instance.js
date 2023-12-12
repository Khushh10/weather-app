import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        appid: '9cd4b8f7032d45aef4ac47907d63d924',
        units: 'metric',
    },
});

export default instance;