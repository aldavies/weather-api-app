import axios from 'axios';
const API_KEY = '2ec8cd8f8e0169d80596fee7e4e5b0b7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`
    const request = axios.get(url);

    console.log('Request: ', request)
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
