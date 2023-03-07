export default function MobileForecast() {
  const data = [
    { hour: '12 AM', informations: 'rainy', temp: '19°' },
    { hour: '1 AM', informations: 'rainy', temp: '20°' },
    { hour: '2 AM', informations: 'rainy', temp: '18°' },
  ];

  return (
    <div>
      <div className="flex gap-3 mt-3 overflow-x-scroll">
        {data.map(weather => (
          <div
            className={`text-gray-100 flex flex-col gap-3 items-center justify-center px-2 py-3 rounded-full relative border border-r-0 border-violet-600 bg-[#231e46a2]`}
          >
            <h3 className="font-semibold text-sm">{weather.hour}</h3>
            <img src="/assets/Moon cloud fast wind.png" width={50} alt="" />
            <p className="text-3xl">{weather.temp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <div className="text-gray-100 flex flex-col gap-3 items-center justify-center px-2 py-3 rounded-full relative border border-r-0 border-violet-400 bg-[#48319d]">
  <h3 className="font-semibold text-sm">Now</h3>
  <img src="/assets/Moon cloud fast wind.png" width={50} alt="" />
  <p className="text-3xl">21°</p>
</div>; */
}
