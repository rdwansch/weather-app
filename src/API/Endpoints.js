import { getFullDate } from '~/lib/date';

const today = getFullDate(new Date(), 'API');

export const getHourly = `https://api.open-meteo.com/v1/forecast?latitude=-6.99&longitude=110.42&hourly=temperature_2m,weathercode&start_date=${today}&end_date=${today}&timezone=Asia%2FBangkok`;

export const getCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=-6.99&lon=110.42&units=metric&lang=id&appid=${
  import.meta.env.VITE_APIKEY
}`;
