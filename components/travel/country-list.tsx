import React from "react";
import { visitedCountries, countryMeta, ukBreakdown } from "@/lib/travel";

function flagEmoji(iso2: string) {
  return String.fromCodePoint(
    ...iso2
      .toUpperCase()
      .split("")
      .map((char) => 0x1f1e6 + char.charCodeAt(0) - 65)
  );
}

export default function CountryList() {
  const countries = [
    ...visitedCountries.map((name) => {
      const meta = countryMeta[name] ?? { label: name, iso2: "" };
      return { label: meta.label, flag: meta.iso2 ? flagEmoji(meta.iso2) : "" };
    }),
    ...ukBreakdown.map(({ label, flag }) => ({ label, flag })),
  ].sort((a, b) => a.label.localeCompare(b.label));

  return (
    <ul className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
      {countries.map((country) => (
        <li
          key={country.label}
          className="flex items-center gap-1.5 rounded-full bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 px-3 py-1 text-sm shadow-sm"
        >
          {country.flag && <span aria-hidden="true">{country.flag}</span>}
          {country.label}
        </li>
      ))}
    </ul>
  );
}
