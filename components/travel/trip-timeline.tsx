import React from "react";
import { trips } from "@/lib/travel";

function formatTripDate(date: string) {
  const [year, month] = date.split("-").map(Number);
  return new Date(year, (month ?? 1) - 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export default function TripTimeline() {
  const sorted = trips.slice().sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="flex flex-col gap-4 max-w-xl mx-auto">
      {sorted.map((trip) => (
        <article
          key={`${trip.date}-${trip.title}`}
          className="rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 p-5 sm:p-6 shadow-sm"
        >
          <time className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            {formatTripDate(trip.date)}
          </time>
          <h3 className="text-lg font-semibold mt-1">{trip.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1.5 leading-relaxed">
            {trip.description}
          </p>
          {trip.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {trip.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2.5 py-0.5 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
