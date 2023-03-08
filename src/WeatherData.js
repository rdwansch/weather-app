import { GetHourly } from '~/API/Endpoints';
import useSwr from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export function useAPIHourly() {
  const { data, isLoading } = useSwr(GetHourly, fetcher);

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
