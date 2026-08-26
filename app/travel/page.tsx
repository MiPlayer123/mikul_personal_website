import React from "react";
import SectionHeading from "@/components/section-heading";
import TravelGlobe from "@/components/travel/travel-globe";
import TravelStats from "@/components/travel/travel-stats";
import UsStatesMap from "@/components/travel/us-states-map";
import WorldMap from "@/components/travel/world-map";
import ParksList from "@/components/travel/parks-list";
import TripTimeline from "@/components/travel/trip-timeline";
import TravelLockForm from "@/components/travel/travel-lock-form";
import { isTravelUnlocked } from "@/lib/travel-lock";
import {
  visitedStates,
  visitedCountries,
  smallCountryMarkers,
  globeMarkers,
} from "@/lib/travel";

// Render per-request so the TRAVEL_PASSWORD cookie gate is always evaluated,
// even when the env var is added after a build.
export const dynamic = "force-dynamic";

export default async function TravelPage() {
  const unlocked = await isTravelUnlocked();

  return (
    <main className="flex flex-col items-center px-4 pb-24">
      {/* Hero */}
      <section className="w-full max-w-5xl grid gap-10 lg:grid-cols-2 items-center scroll-mt-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
            Travel log
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Where I&apos;ve been
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Every state, country, and national park — updated after each trip.
          </p>
          <TravelStats />
        </div>
        <TravelGlobe markers={globeMarkers} />
      </section>

      {/* United States */}
      <section className="w-full max-w-5xl mt-20">
        <SectionHeading>United States</SectionHeading>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <UsStatesMap visited={visitedStates} />
          <ParksList />
        </div>
      </section>

      {/* World */}
      <section className="w-full max-w-4xl mt-20">
        <SectionHeading>Around the world</SectionHeading>
        <WorldMap visited={visitedCountries} markers={smallCountryMarkers} />
      </section>

      {/* Trips */}
      <section className="w-full max-w-5xl mt-20">
        <SectionHeading>Trips</SectionHeading>
        {unlocked ? <TripTimeline /> : <TravelLockForm />}
      </section>
    </main>
  );
}
