import { type ReactNode } from "react";

interface InfoRowProps {
  label: string;
  value?: string | ReactNode;
}

export function InfoRow({ label, value = "" }: InfoRowProps) {
  return (
    <p>
      {label}: <span className="text-gray-400">{value}</span>
    </p>
  );
}
