import { Suspense } from "react";

import { SearchInput } from "../components/search-input";
import { Title } from "../components/title";
import { CurrentWeatherCard } from "./_components/current-weather-card";
import { SkeletonCurrentWeatherCard } from "./_components/skeleton-current-weather-card";
import { EmptyCurrentWeatherCard } from "./_components/empty-current-weather-card";
import { ForecastWeatherTable } from "./_components/forecast-weather-table";
import { EmptyForecastWeatherTable } from "./_components/empty-forecast-weather-table";
import { SkeletonForecastWeatherTable } from "./_components/skeleton-forecast-weather-table";

export default function WeatherForecasts({
  searchParams,
}: {
  searchParams: { query: string | undefined };
}) {
  return (
    <div className="flex flex-col gap-10 px-4 py-8 md:gap-14">
      <Title title="Weather Forecasts App" />
      <div className="px-8 ">
        <SearchInput
          id="location"
          label="Location Input"
          type="text"
          placeholder="Input Example: tokyo or 35.6894, 139.6917"
        />
      </div>

      {searchParams.query ? (
        <Suspense fallback={<SkeletonCurrentWeatherCard />}>
          <CurrentWeatherCard query={searchParams.query} />
        </Suspense>
      ) : (
        <EmptyCurrentWeatherCard message="Enter Location for search." />
      )}

      {searchParams.query ? (
        <Suspense fallback={<SkeletonForecastWeatherTable />}>
          <ForecastWeatherTable query={searchParams.query} />
        </Suspense>
      ) : (
        <EmptyForecastWeatherTable />
      )}
    </div>
  );
}
