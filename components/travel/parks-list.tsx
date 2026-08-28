"use client";

import React, { useState } from "react";
import { ALL_NATIONAL_PARKS, visitedParks } from "@/lib/travel";

const PREVIEW_COUNT = 8;

export default function ParksList() {
  const [showAll, setShowAll] = useState(false);
  const visitedByName = new Map(visitedParks.map((p) => [p.name, p.year]));
  const visited = ALL_NATIONAL_PARKS.filter((p) => visitedByName.has(p.name));
  const remaining = ALL_NATIONAL_PARKS.filter(
    (p) => !visitedByName.has(p.name)
  );

  const sorted = visited
    .slice()
    .sort(
      (a, b) =>
        (visitedByName.get(b.name) ?? 0) - (visitedByName.get(a.name) ?? 0) ||
        a.name.localeCompare(b.name)
    );
  const shown = showAll ? sorted : sorted.slice(0, PREVIEW_COUNT);

  return (
    <div>
      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
        {visited.length} of {ALL_NATIONAL_PARKS.length} national parks
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
        {shown.map((park) => {
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

      <button
        type="button"
        onClick={() => setShowAll(!showAll)}
        className="mt-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500"
      >
        {showAll
          ? "Show fewer ↑"
          : `Show all ${visited.length} visited →`}
      </button>

      {showAll && (
        <div className="mt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Still on the list ({remaining.length})
          </p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
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
        </div>
      )}
    </div>
  );
}
