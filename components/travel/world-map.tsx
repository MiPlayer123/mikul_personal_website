"use client";

import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import worldData from "world-atlas/countries-110m.json";

type WorldMapProps = {
  visited: readonly string[];
  // visited countries too small to appear as shapes on the 110m map
  markers?: readonly { name: string; lat: number; lng: number }[];
};

export default function WorldMap({ visited, markers = [] }: WorldMapProps) {
  const visitedSet = new Set(visited.map((c) => c.toLowerCase()));
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div>
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 160 }}
        style={{ width: "100%", height: "auto" }}
        aria-label="World map with visited countries highlighted"
      >
        <Geographies geography={worldData}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name as string;
              const isVisited = visitedSet.has(name.toLowerCase());
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setHovered(name)}
                  onMouseLeave={() => setHovered(null)}
                  className={
                    isVisited
                      ? "fill-blue-600 dark:fill-blue-500 hover:fill-blue-500 dark:hover:fill-blue-400 stroke-gray-50 dark:stroke-gray-900 transition-colors focus:outline-none"
                      : "fill-gray-200 dark:fill-gray-700 hover:fill-gray-300 dark:hover:fill-gray-600 stroke-gray-50 dark:stroke-gray-900 transition-colors focus:outline-none"
                  }
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
        {markers.map((marker) => (
          <Marker key={marker.name} coordinates={[marker.lng, marker.lat]}>
            <circle
              r={4}
              className="fill-blue-600 dark:fill-blue-500 stroke-gray-50 dark:stroke-gray-900 cursor-default"
              strokeWidth={1}
              onMouseEnter={() => setHovered(marker.name)}
              onMouseLeave={() => setHovered(null)}
            />
          </Marker>
        ))}
      </ComposableMap>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 h-5">
        {hovered ?? ""}
      </p>
    </div>
  );
}
