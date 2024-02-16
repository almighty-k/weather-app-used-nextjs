"use server";

import { API_ENDPOINT } from "../config";
import type { APIError, CurrentResponse, ForecastResponse } from "./api.types";

export async function fetchCurrentWeather({
  location,
}: {
  location: string;
}): Promise<CurrentResponse | APIError> {
  const res = await fetch(
    `${API_ENDPOINT}/current.json?key=${process.env.WHETHER_API_KEY}&q=${location}`,
    { cache: "no-store" },
  );

  return await res.json();
}

export async function fetchForecastWeather({
  location,
  days = 3, // freeプランに付き、最大3日まで
}: {
  location: string;
  days?: number;
}): Promise<ForecastResponse | APIError> {
  const res = await fetch(
    `${API_ENDPOINT}/forecast.json?key=${process.env.WHETHER_API_KEY}&q=${location}&days=${days}`,
    { cache: "no-store" },
  );
  return await res.json();
}
