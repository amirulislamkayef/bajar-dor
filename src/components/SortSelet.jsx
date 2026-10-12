"use client";

import { usePathname, useRouter } from "next/navigation";

const options = [
  { value: "default", label: "ডিফল্ট" },
  { value: "price-asc", label: "দাম: কম থেকে বেশি" },
  { value: "price-desc", label: "দাম: বেশি থেকে কম" },
];

export default function SortSelect({ current }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <select
      value={current}
      onChange={(e) => router.push(`${pathname}?sort=${e.target.value}`)}
      className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-800 outline-none"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
