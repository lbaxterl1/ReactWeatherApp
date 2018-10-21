import axios from 'axios';

const API_KEY = '4bb7307bcb9a55dfed7d2d857e614011';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},uk`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}