import { getFullDate } from '~/lib/date';

const today = getFullDate(new Date(), 'API');

export const GetHourly = `https://api.open-meteo.com/v1/forecast?latitude=-6.99&longitude=110.42&hourly=temperature_2m,weathercode&start_date=${today}&end_date=${today}&timezone=Asia%2FBangkok`;
