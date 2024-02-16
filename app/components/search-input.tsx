"use client";

import { type ComponentProps } from "react";
import { useQueryState } from "nuqs";

interface SearchInputProps extends ComponentProps<"input"> {
  label: string;
}

export function SearchInput({ label, ...props }: SearchInputProps) {
  const [query, setQuery] = useQueryState("query", {
    shallow: false,
    history: "replace",
    throttleMs: 500,
  });

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={props.id} className="text-lg">
        {label}
      </label>
      <input
        {...props}
        value={query || ""}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-md border border-gray-300 p-3 text-sm focus:border-violet-500 focus:outline-none"
        placeholder="Input Example: tokyo or 35.6894, 139.6917"
      />
    </div>
  );
}
