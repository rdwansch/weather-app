import { useAPIHourly } from '~/WeatherData';
import MobileForecast from '~/components/MobileForecast';

export default function App() {
  const { data, isLoading } = useAPIHourly();

  return (
    <>
      <div className={`bg-[url(/assets/background-mobile.png)] bg-fixed w-[100vw] min-h-[100vh] bg-cover`}>
        <div className="text-center pt-24">
          <h1 className="text-3xl text-white  mx-auto">Montreal</h1>
          <h2 className="text-7xl text-white font-light ">19°</h2>
          <p className="text-gray-400 font-semibold ">Mostly Clear</p>
          <p className="text-white font-semibold ">H:24° L:18°</p>
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
              <h5 className="text-gray-300 font-semibold">Weekly Forecast</h5>
            </div>
            <div className="border border-[rgba(255,255,255,0.2)]"></div>

            {!isLoading && <MobileForecast data={data} />}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="text-gray-500"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                    </svg>
                    <h3 className="text-gray-400 uppercase font-semibold text-sm">UV Index</h3>
                  </div>
                  <p className="text-4xl text-white">4</p>
                  <p className="text-white text-3xl">Moderate</p>
                  <input readOnly className=" w-full h-0.5" type="range" value="0" min="0"></input>
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
                  <p className="text-white text-4xl">5:28 AM</p>

                  <hr className="bg-transparent border border-gray-600 my-2" />
                  <p className="text-white">Sunset: 7:25 PM</p>
                </div>
              </div>
            </div>
          </div>
          {/* End Modal */}
        </div>
      </div>
    </>
  );
}
