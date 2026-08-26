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
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        <span className="font-semibold text-gray-900 dark:text-gray-100">
          {visited.length} of {ALL_NATIONAL_PARKS.length} national parks
        </span>{" "}
        — most recent first
      </p>

      <ul className="flex flex-col gap-2">
        {visited
          .slice()
          .sort(
            (a, b) =>
              (visitedByName.get(b.name) ?? 0) - (visitedByName.get(a.name) ?? 0)
          )
          .map((park) => (
            <li
              key={park.name}
              className="flex items-center gap-3 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 px-4 py-2.5 text-sm shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 flex-none" />
              <span className="font-medium">{park.name}</span>
              <span className="text-gray-400 dark:text-gray-500 text-xs">
                {park.states}
              </span>
              <span className="ml-auto text-xs text-gray-400 dark:text-gray-500 tabular-nums">
                {visitedByName.get(park.name)}
              </span>
            </li>
          ))}
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
