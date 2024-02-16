import { CardLabel } from "@/app/components/card-label";

export function SkeletonCurrentWeatherCard() {
  return (
    <div className="rounded-md border border-gray-300 bg-white">
      <CardLabel label="Current Weather" />

      <div className="flex items-start gap-3 p-3">
        <div className="h-20 w-20 animate-pulse bg-gray-200" />
        <div className=" flex flex-col gap-2">
          <div className="h-5 w-52 animate-pulse bg-gray-200" />
          <div className="h-5 w-52 animate-pulse bg-gray-200" />
          <div className="h-5 w-52 animate-pulse bg-gray-200" />
          <div className="h-5 w-52 animate-pulse bg-gray-200" />
          <div className="h-5 w-52 animate-pulse bg-gray-200" />
          <div className="h-5 w-52 animate-pulse bg-gray-200" />
          <div className="h-5 w-52 animate-pulse bg-gray-200" />
          <div className="h-5 w-52 animate-pulse bg-gray-200" />
          <div className="h-5 w-52 animate-pulse bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
