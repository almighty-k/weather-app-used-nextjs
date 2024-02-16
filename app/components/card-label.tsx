interface CardLabelProps {
  label: string;
}

export function CardLabel({ label }: CardLabelProps) {
  return (
    <span className="inline-block rounded-md border border-gray-400 bg-gray-200 px-2 py-1 font-medium">
      {label}
    </span>
  );
}
