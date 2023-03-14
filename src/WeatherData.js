import { getHourly, getCurrentWeather, getDaily } from '~/API/Endpoints';
import useSwr from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export function useAPIHourly() {
  const { data, isLoading, error } = useSwr(getHourly, fetcher, {
    revalidateIfStale: true,
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

export function useCurrentWeather(city) {
  const { data, isLoading, error } = useSwr(getCurrentWeather(city), fetcher, {
    revalidateIfStale: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (!isLoading && data.cod == '404') {
    return { data: [], isLoading };
  }

  return { data, isLoading };
}

export function useDaily(city) {
  const { data, isLoading, error } = useSwr(getDaily(city), fetcher, {
    revalidateIfStale: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  let _data = [];

  if (!isLoading) {
    if (data.cod == '404') {
      return { data: [], isLoading };
    }

    data.list.map((weather, idx) => {
      if (idx % 8 == 0) {
        _data.push(weather);
      }
    });
  }

  return { data: _data, isLoading };
}

export function useHourlyWeather(city) {
  const { data, isLoading, error } = useSwr(getDaily(city), fetcher, {
    revalidateIfStale: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  let _data = [];

  if (!isLoading) {
    if (data.cod == '404') {
      return { data: [], isLoading };
    }

    data.list.map((weather, idx) => {
      if (idx < 5) {
        _data.push(weather);
      }
    });
  }

  return { data: _data, isLoading };
}
