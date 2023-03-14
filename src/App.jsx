import { useAPIHourly, useCurrentWeather, useDaily, useHourlyWeather } from '~/WeatherData';
import MobileForecast from '~/components/MobileForecast';
import { getFullDate } from '~/lib/date';
import { days } from '~/lib/date';
import { useRef, useState } from 'react';

export default function App() {
  const [city, setCity] = useState('');
  const ref = useRef();

  const hourlyWeather = useAPIHourly();
  const currentWeather = useCurrentWeather(city);
  const dailyWeather = useDaily(city);
  const hourlyWeatherMap = useHourlyWeather(city);

  const handleSubmit = e => {
    e.preventDefault();
    setCity(e.currentTarget.elements[0].value);
  };

  return (
    <>
      <section className="bg-gradient-to-tr from-violet-900 to-pink-900 max-w-[100vw] min-h-[100vh] mx-auto p-10 hidden sm:block  ">
        <div className="max-w-md mx-auto mb-5">
          <form onSubmit={handleSubmit} ref={ref}>
            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-5 ml-5"
                type="text"
                id="search"
                placeholder="Search something.."
              />
              <div className="grid place-items-center h-full w-12 bg-[rgba(0,0,0,0.2)] text-black hover:bg-violet-300  border rounded-lg">
                <button type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>

        {!currentWeather.isLoading && currentWeather.data.length == 0 ? (
          <h1 className="text-center text-white text-3xl">City Not Found</h1>
        ) : (
          <>
            <>
              <h1 className="text-3xl font-bold text-center text-white mb-3">
                {!currentWeather.isLoading ? currentWeather.data.name : '...'}
              </h1>

              <p className="text-center text-gray-200">
                {getFullDate(new Date(), 'full')} | Time: {new Date().getHours()}:{new Date().getMinutes()}
              </p>

              <h3 className="text-center text-2xl text-gray-300 font-bold mt-10">Clouds</h3>

              <div className="flex mx-auto max-w-sm mt-5 items-center justify-between">
                <img
                  src={`http://openweathermap.org/img/wn/${
                    !currentWeather.isLoading ? currentWeather.data.weather[0].icon : ''
                  }@2x.png`}
                  alt="div"
                  width={100}
                />
                <p className="text-gray-200 text-3xl">30°</p>
                <div className="flex bg-[rgba(0,0,0,0.3)] flex-col p-5">
                  <div className="flex gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="text-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"
                      />
                    </svg>
                    <p className="text-gray-300">Humidity: 70%</p>
                  </div>
                  <div className="flex gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="text-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    <p className="text-gray-300">Wind: 30 km/s</p>
                  </div>
                </div>
              </div>

              <div className="max-w-[700px] mx-auto mt-10">
                <h3 className="text-2xl font-semibold text-gray-100">Hourly Forecast</h3>
                <hr className="border-gray-400 my-2" />

                <div className="flex justify-between">
                  {!hourlyWeatherMap.isLoading
                    ? hourlyWeatherMap.data.map((weather, idx) => (
                        <div className="" key={idx}>
                          <p className="text-gray-300 text-center">{weather.dt_txt.slice(11, -3)}</p>
                          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                          <p className="text-gray-100 text-center">{weather.main.temp}°</p>
                        </div>
                      ))
                    : '...'}
                </div>
              </div>

              <div className="max-w-[700px] mx-auto mt-10">
                <h3 className="text-2xl font-semibold text-gray-100">Daily Forecast</h3>
                <hr className="border-gray-400 my-2" />

                <div className="flex justify-between">
                  {!dailyWeather.isLoading
                    ? dailyWeather.data.map((weather, idx) => (
                        <div className="" key={idx}>
                          <p className="text-gray-300 text-center">
                            {days[new Date(weather.dt_txt.replace(' 09:00:00', '')).getDay()]}
                          </p>
                          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                          <p className="text-gray-100 text-center">{weather.main.temp}°</p>
                        </div>
                      ))
                    : '...'}
                </div>
              </div>
            </>
          </>
        )}

        <div className="w-fit mx-auto mt-10">
          <h3 className="text-gray-200">Ridhwan | 2023</h3>
        </div>
      </section>

      <section className={`bg-[url(/assets/background-mobile.png)] bg-fixed w-[100vw] min-h-[100vh] bg-cover sm:hidden`}>
        {!currentWeather.isLoading && currentWeather.data.length == 0 ? (
          'No Cities '
        ) : (
          <>
            <div className="text-center pt-24">
              <h1 className="text-xl text-white mx-auto">{!currentWeather.isLoading ? currentWeather.data.name : '...'}</h1>
              <h2 className="text-7xl text-white font-light ">
                {!currentWeather.isLoading ? currentWeather.data.main.temp : '...'}°
              </h2>
              <p className="text-gray-300 font-semibold ">
                {!currentWeather.isLoading ? currentWeather.data.weather[0].description : '...'}
              </p>
            </div>

            <div className="mx-auto left-0 right-0 w-fit z-10 mt-10 fixed">
              <img src="/assets/house.png" alt="House" width={400} />
            </div>

            {/* Dark blur */}
            <div className="bg-gradient-to-b from-[#3a3f5400] to-[#3a3f5479] h-full top-0 absolute left-0 right-0" />

            <div className="min-h-[50vh] relative rounded-t-[44px] mt-64 z-10 bg-[rgba(1,2,56,0.5)]">
              <div className="__blur absolute top-0 right-0 left-0 h-[50vh] backdrop-blur-xl rounded-t-[44px] border-t border-violet-400" />
              {/* Starts Modal */}
              <div className="px-5 relative">
                <div className="bg-gradient-to-r from-[rgba(255,255,255,0.01)] via-[#ffd5fba4] to-[rgba(255,255,255,0.01)] w-3/4 mx-auto h-1 " />
                <div className="flex justify-between pt-5">
                  <h5
                    className={
                      'text-gray-300 font-semibold relative ' +
                      "after:content-[''] after:absolute after:w-full after:h-0.5 after:bg- after:bottom-0 after:right-0 after:left-0 after:mx-auto after:bg-gradient-to-r after:from-[rgba(255,255,255,0)] after:via-pink-300 after:to-[rgba(255,255,255,0.2)] after:rounded"
                    }
                  >
                    Hourly Forecast
                  </h5>
                  <h5 className="text-gray-300 font-semibold">{getFullDate(new Date())}</h5>
                </div>
                <div className="border border-[rgba(255,255,255,0.2)]"></div>

                {!hourlyWeather.isLoading && <MobileForecast data={hourlyWeather.data} />}
                {/* Air Quality */}
                <div className="bg-[#17143dcb] p-5 border border-violet-900 rounded-2xl mt-5">
                  <div>
                    <h3 className="text-gray-400 uppercase font-semibold text-sm">Air Quality</h3>
                  </div>

                  <h3 className="text-white text-2xl font-semibold">3-Low Health Risk</h3>

                  <input readOnly className=" w-full h-0.5" type="range" value="30" min="0"></input>
                  <hr className="my-1 border bg-transparent border-gray-700" />

                  <div className="flex items-center justify-between">
                    <p className="text-gray-200">See More</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="text-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </div>
                </div>
                {/* End Air Quality */}
                <div className="flex gap-5">
                  <div className="w-2/3 bg-[#17143dcb] p-5 border border-violet-900 rounded-2xl mt-5">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-gray-400 uppercase font-semibold text-sm">Wind</h3>
                      </div>
                      <p className="text-4xl text-white">
                        {!currentWeather.isLoading ? currentWeather.data.wind.speed : ''}{' '}
                        <span className="text-xl text-gray-400">m/s</span>
                      </p>
                      {!currentWeather.isLoading ? (
                        <div className="text-white flex mt-5">
                          <span className="text-gray-500">-----------</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={40}
                            height={40}
                            fill="currentColor"
                            className={`rotate-[${currentWeather.data.wind.deg}deg] text-white`}
                            viewBox="0 0 16 16"
                          >
                            <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
                          </svg>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                  <div className="w-2/3 bg-[#17143dcb] p-5 border border-violet-900 rounded-2xl mt-5">
                    <div>
                      <div className="flex gap-3 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="text-gray-400"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                        </svg>

                        <h3 className="text-gray-400 uppercase font-semibold text-sm">Sunrise</h3>
                      </div>
                      <p className="text-white text-3xl">5:28</p>

                      <hr className="bg-transparent border border-gray-600 my-2" />
                      <div className="flex gap-3 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="text-gray-400"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <h3 className="text-gray-400 uppercase font-semibold text-sm">
                          Sunset <span className="text-white">17:53</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Modal */}
            </div>
          </>
        )}
      </section>
    </>
  );
}
