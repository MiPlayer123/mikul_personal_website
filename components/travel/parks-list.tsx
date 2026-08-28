import React from "react";
import { ALL_NATIONAL_PARKS, visitedParks } from "@/lib/travel";

export default function ParksList() {
  const visitedByName = new Map(visitedParks.map((p) => [p.name, p.year]));
  const visited = ALL_NATIONAL_PARKS.filter((p) => visitedByName.has(p.name));
  const remaining = ALL_NATIONAL_PARKS.filter(
    (p) => !visitedByName.has(p.name)
  );

  return (
    <div>
      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
        {visited.length} of {ALL_NATIONAL_PARKS.length} national parks
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
        {visited
          .slice()
          .sort(
            (a, b) =>
              (visitedByName.get(b.name) ?? 0) -
                (visitedByName.get(a.name) ?? 0) ||
              a.name.localeCompare(b.name)
          )
          .map((park) => {
            const year = visitedByName.get(park.name);
            return (
              <li
                key={park.name}
                className="flex items-center gap-2 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 px-3 py-1.5 text-sm shadow-sm"
              >
                <svg
                  className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 flex-none"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 10.5l4 4 8-9" />
                </svg>
                <span className="font-medium truncate">{park.name}</span>
                {year && (
                  <span className="ml-auto text-xs text-gray-400 dark:text-gray-500 tabular-nums">
                    {year}
                  </span>
                )}
              </li>
            );
          })}
      </ul>

      <details className="mt-4 group">
        <summary className="cursor-pointer text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 list-none">
          <span className="group-open:hidden">
            Show {remaining.length} still on the list →
          </span>
          <span className="hidden group-open:inline">Hide the list ↑</span>
        </summary>
        <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5">
          {remaining.map((park) => (
            <li
              key={park.name}
              className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600 flex-none" />
              {park.name}
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
