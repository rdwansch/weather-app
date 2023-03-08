import { useRef } from 'react';

export default function MobileForecast({ data }) {
  let Weather = data.hourly.time;
  const ref = useRef();

  const currentHours = new Date().getHours();

  return (
    <div>
      <div className="flex gap-3 mt-3 overflow-x-scroll" ref={ref}>
        {Weather.map((_, idx) => (
          <div
            key={_}
            className={`text-gray-100 flex flex-col gap-3 items-center justify-center px-2 py-3 rounded-full relative border border-r-0 ${
              currentHours === data.hourly.time[idx] ? 'border-violet-400 bg-[#48319d]' : 'border-violet-600 bg-[#231e46a2]'
            }`}
          >
            <h3 className="font-semibold text-sm">
              {currentHours !== data.hourly.time[idx] ? data.hourly.time[idx] + ':00' : 'Now'}
            </h3>
            <img src="/assets/Moon cloud fast wind.png" width={50} alt="" />
            <p className="text-3xl">{data.hourly.temperature_2m[idx].toFixed(0)}°</p>
          </div>
        ))}
      </div>
    </div>
  );
}
