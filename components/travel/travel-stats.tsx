import React from "react";
import {
  stateCount,
  countryCount,
  parkCount,
  TOTAL_COUNTRIES,
  ALL_NATIONAL_PARKS,
} from "@/lib/travel";

type StatProps = {
  value: number;
  total: number;
  label: string;
};

function Stat({ value, total, label }: StatProps) {
  const percent = Math.min(100, Math.round((value / total) * 100));
  return (
    <div className="rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 p-4 shadow-sm">
      <div className="text-2xl font-bold tabular-nums">
        {value}
        <span className="text-sm font-medium text-gray-400 dark:text-gray-500">
          /{total}
        </span>
      </div>
      <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mt-0.5">
        {label}
      </div>
      <div className="h-1 rounded-full bg-gray-100 dark:bg-gray-700 mt-3 overflow-hidden">
        <div
          className="h-full rounded-full bg-blue-600 dark:bg-blue-400"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default function TravelStats() {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4">
      <Stat value={stateCount} total={50} label="States" />
      <Stat value={countryCount} total={TOTAL_COUNTRIES} label="Countries" />
      <Stat
        value={parkCount}
        total={ALL_NATIONAL_PARKS.length}
        label="Nat'l Parks"
      />
    </div>
  );
}
