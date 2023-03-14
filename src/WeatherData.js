import { getHourly, getCurrentWeather } from '~/API/Endpoints';
import useSwr from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export function useAPIHourly() {
  const { data, isLoading } = useSwr(getHourly, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  let formatedTime;
  let _data;

  if (!isLoading) {
    formatedTime = data.hourly.time.map(_time => new Date(_time).getHours());
    _data = {
      ...data,
      hourly: {
        ...data.hourly,
        time: formatedTime,
      },
    };
  }

  return { data: _data, isLoading };
}

export function useCurrentWeather() {
  const { data, isLoading } = useSwr(getCurrentWeather, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, isLoading };
}
