import axios from 'axios';

const API_KEY = '9b6ce9dbe2cc179723d93c7c4a2972ac';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const getWeatherByCity = async (city: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        lang: 'pt_br',
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getWeatherByCoords = async (lat: number, lon: number) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        lang: 'pt_br',
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getForecastByCity = async (city: string) => {
  try {
    const response = await axios.get(FORECAST_URL, {
      params: {
        q: city,
        appid: API_KEY,
        lang: 'pt_br',
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
