import Image from "next/image";

import { fetchCurrentWeather } from "@/app/api/api";
import { type CurrentResponse } from "@/app/api/api.types";
import { CardLabel } from "@/app/components/card-label";
import { InfoRow } from "@/app/components/info-row";
import { ERROR_MESSAGES } from "@/app/messages";
import { EmptyCurrentWeatherCard } from "./empty-current-weather-card";

interface CurrentWeatherCardProps {
  query: string;
}

export async function CurrentWeatherCard({ query }: CurrentWeatherCardProps) {
  const currentWeather = await fetchCurrentWeather({ location: query });

  if ("error" in currentWeather) {
    if (currentWeather.error.code === 1006) {
      return (
        <EmptyCurrentWeatherCard message={ERROR_MESSAGES.locationNotFound} />
      );
    }
    throw Error(ERROR_MESSAGES.unexpected);
  }

  const { location, current } = currentWeather;

  return (
    <div className="rounded-md border border-gray-300 bg-white">
      <CardLabel label="Current Weather" />

      <div className="flex items-start gap-3 p-3">
        <Image
          width={80}
          height={80}
          src={`https:${current.condition.icon}`}
          alt="icon"
        />
        <div>
          <InfoRow label="Now" value={location.localtime} />
          <InfoRow label="Location" value={location.name} />
          <InfoRow label="Temperature" value={`${current.temp_c}°C`} />
          <InfoRow label="Feels Like" value={`${current.feelslike_c}°C`} />
          <InfoRow label="Humidity" value={`${current.humidity}%`} />
          <InfoRow label="Precipitation" value={`${current.precip_mm}mm`} />
          <InfoRow label="Wind Speed" value={`${current.wind_kph}km/h`} />
          <InfoRow label="Wind Direction" value={current.wind_dir} />
          <InfoRow label="Pressure" value={`${current.pressure_in} Inches`} />
          <InfoRow label="UV Index" value={<UvInfo uv={current.uv} />} />
        </div>
      </div>
    </div>
  );
}

interface UvInfoProps {
  uv: CurrentResponse["current"]["uv"];
}

function UvInfo({ uv }: UvInfoProps) {
  if (uv <= 2) {
    return <span>Low</span>;
  }
  if (uv <= 5) {
    return <span>Moderate</span>;
  }
  if (uv <= 7) {
    return <span>High</span>;
  }
  return <span>Very High</span>;
}
