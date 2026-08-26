import React from "react";
import usa from "@svg-maps/usa";

type UsStatesMapProps = {
  visited: readonly string[];
};

export default function UsStatesMap({ visited }: UsStatesMapProps) {
  const visitedSet = new Set(visited.map((s) => s.toLowerCase()));

  return (
    <svg
      viewBox={usa.viewBox}
      role="img"
      aria-label="Map of the United States with visited states highlighted"
      className="w-full h-auto"
    >
      {usa.locations.map((state) => (
        <path
          key={state.id}
          d={state.path}
          className={
            visitedSet.has(state.id)
              ? "fill-blue-600 dark:fill-blue-500 hover:fill-blue-500 dark:hover:fill-blue-400 stroke-gray-50 dark:stroke-gray-900 transition-colors"
              : "fill-gray-200 dark:fill-gray-700 hover:fill-gray-300 dark:hover:fill-gray-600 stroke-gray-50 dark:stroke-gray-900 transition-colors"
          }
          strokeWidth={1}
        >
          <title>{state.name}</title>
        </path>
      ))}
    </svg>
  );
}
