import Image from "next/image";

import { fetchForecastWeather } from "@/app/api/api";
import { getMonthAndDate } from "@/app/utils";
import { ERROR_MESSAGES } from "@/app/messages";
import { EmptyForecastWeatherTable } from "./empty-forecast-weather-table";

interface ForecastWeatherTableProps {
  query: string;
}

export async function ForecastWeatherTable({
  query,
}: ForecastWeatherTableProps) {
  const forecastWeather = await fetchForecastWeather({ location: query });

  if ("error" in forecastWeather) {
    if (forecastWeather.error.code === 1006) {
      return <EmptyForecastWeatherTable />;
    }
    throw Error(ERROR_MESSAGES.unexpected);
  }

  const forecastsByDay = forecastWeather.forecast.forecastday;

  return (
    <table className="w-full border-collapse rounded-md border border-gray-300 bg-white">
      <thead>
        <tr>
          {forecastsByDay.map((forecast) => {
            return (
              <th
                key={forecast.date}
                className="border border-gray-300 py-2 font-normal"
              >
                {getMonthAndDate(forecast.date)}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          {forecastsByDay.map((forecast) => {
            return (
              <td key={forecast.date} className="border border-gray-300 py-4">
                <div className="flex items-center justify-center">
                  <Image
                    width={50}
                    height={50}
                    src={`https:${forecast.day.condition.icon}`}
                    alt={`${forecast.date} weather`}
                  />
                </div>
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
}
