import { CardLabel } from "@/app/components/card-label";

interface EmptyCurrentWeatherCardProps {
  message: string;
}

export async function EmptyCurrentWeatherCard({
  message,
}: EmptyCurrentWeatherCardProps) {
  return (
    <div className=" h-72 rounded-md border border-gray-300 bg-white">
      <CardLabel label="Current Weather" />
      <p className="mt-3 text-center text-gray-400">{message}</p>
    </div>
  );
}
