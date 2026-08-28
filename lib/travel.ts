// Travel log data — edit this file after each trip and everything on /travel
// (counters, maps, globe markers, park checklist, trip timeline) updates.
//
// TODO(mikul): the entries below are placeholders — replace them with your
// real travels.

export type TripPlace = {
  name: string;
  lat: number;
  lng: number;
};

export type Trip = {
  title: string;
  date: string; // "YYYY-MM"
  description: string;
  tags: readonly string[];
  places: readonly TripPlace[];
};

export type ParkVisit = {
  name: string; // must match a name in ALL_NATIONAL_PARKS
  year?: number; // add once known; shown next to the park when present
};

// US states visited — two-letter postal codes ("DC" is shown on the map but
// not counted toward the 50). Currently: all 50 except KS, DE, OK.
export const visitedStates = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
] as const;

// Countries visited — names must match the world map's country names
// (world-atlas), e.g. "United States of America", "Dominican Rep.".
// England, Scotland, and Wales are one entry: "United Kingdom".
export const visitedCountries = [
  "United States of America",
  "India",
  "Canada",
  "Singapore",
  "Malaysia",
  "United Arab Emirates",
  "France",
  "Portugal",
  "Peru",
  "Greece",
  "United Kingdom",
  "Mexico",
  "Bahamas",
  "Costa Rica",
  "Brazil",
  "Argentina",
  "Uruguay",
  "Antarctica",
  "Dominican Rep.",
  "Jamaica",
] as const;

// Visited countries too small to appear on the 110m world map — drawn as
// marker dots instead of filled shapes.
export const smallCountryMarkers = [
  { name: "Singapore", lat: 1.35, lng: 103.82 },
] as const;

// Beli profile, linked under the hero stats (hidden if beliUrl is empty).
export const beliUrl = "https://beliapp.co/lists/MiPlaya";
export const beliHandle = "MiPlaya";

// Display metadata for the country list: map-dataset name -> label + ISO
// 3166-1 alpha-2 code (used to derive the flag emoji).
export const countryMeta: Record<string, { label: string; iso2: string }> = {
  "United States of America": { label: "United States", iso2: "US" },
  India: { label: "India", iso2: "IN" },
  Canada: { label: "Canada", iso2: "CA" },
  Singapore: { label: "Singapore", iso2: "SG" },
  Malaysia: { label: "Malaysia", iso2: "MY" },
  "United Arab Emirates": { label: "UAE", iso2: "AE" },
  France: { label: "France", iso2: "FR" },
  Portugal: { label: "Portugal", iso2: "PT" },
  Peru: { label: "Peru", iso2: "PE" },
  Greece: { label: "Greece", iso2: "GR" },
  "United Kingdom": { label: "United Kingdom", iso2: "GB" },
  Mexico: { label: "Mexico", iso2: "MX" },
  Bahamas: { label: "Bahamas", iso2: "BS" },
  "Costa Rica": { label: "Costa Rica", iso2: "CR" },
  Brazil: { label: "Brazil", iso2: "BR" },
  Argentina: { label: "Argentina", iso2: "AR" },
  Uruguay: { label: "Uruguay", iso2: "UY" },
  Antarctica: { label: "Antarctica", iso2: "AQ" },
  "Dominican Rep.": { label: "Dominican Republic", iso2: "DO" },
  Jamaica: { label: "Jamaica", iso2: "JM" },
};

export const visitedParks: readonly ParkVisit[] = [
  { name: "Acadia" },
  { name: "Arches" },
  { name: "Badlands" },
  { name: "Biscayne" },
  { name: "Bryce Canyon" },
  { name: "Canyonlands" },
  { name: "Capitol Reef" },
  { name: "Congaree" },
  { name: "Crater Lake" },
  { name: "Cuyahoga Valley" },
  { name: "Death Valley" },
  { name: "Denali" },
  { name: "Everglades" },
  { name: "Gateway Arch" },
  { name: "Glacier Bay" },
  { name: "Grand Canyon" },
  { name: "Grand Teton" },
  { name: "Great Smoky Mountains" },
  { name: "Hawaiʻi Volcanoes" },
  { name: "Hot Springs" },
  { name: "Indiana Dunes" },
  { name: "Joshua Tree" },
  { name: "Kenai Fjords" },
  { name: "Kings Canyon" },
  { name: "Lassen Volcanic" },
  { name: "Mammoth Cave" },
  { name: "Mount Rainier" },
  { name: "New River Gorge" },
  { name: "North Cascades" },
  { name: "Olympic" },
  { name: "Petrified Forest" },
  { name: "Pinnacles" },
  { name: "Redwood" },
  { name: "Rocky Mountain" },
  { name: "Saguaro" },
  { name: "Sequoia" },
  { name: "Shenandoah" },
  { name: "Yellowstone" },
  { name: "Yosemite" },
  { name: "Zion" },
];

export const trips: readonly Trip[] = [
  {
    title: "Great Britain tour",
    date: "2026-08",
    description: "England, Scotland, and Wales.",
    tags: ["England", "Scotland", "Wales"],
    places: [
      { name: "London", lat: 51.51, lng: -0.13 },
      { name: "Edinburgh", lat: 55.95, lng: -3.19 },
      { name: "Cardiff", lat: 51.48, lng: -3.18 },
    ],
  },
  {
    title: "Greece",
    date: "2026-03",
    description: "Athens and Santorini.",
    tags: ["Greece", "Athens", "Santorini"],
    places: [
      { name: "Athens", lat: 37.98, lng: 23.73 },
      { name: "Santorini", lat: 36.39, lng: 25.46 },
    ],
  },
];

export const TOTAL_COUNTRIES = 195;

// All 63 US national parks, with the states they sit in.
export const ALL_NATIONAL_PARKS: readonly { name: string; states: string }[] = [
  { name: "Acadia", states: "ME" },
  { name: "American Samoa", states: "AS" },
  { name: "Arches", states: "UT" },
  { name: "Badlands", states: "SD" },
  { name: "Big Bend", states: "TX" },
  { name: "Biscayne", states: "FL" },
  { name: "Black Canyon of the Gunnison", states: "CO" },
  { name: "Bryce Canyon", states: "UT" },
  { name: "Canyonlands", states: "UT" },
  { name: "Capitol Reef", states: "UT" },
  { name: "Carlsbad Caverns", states: "NM" },
  { name: "Channel Islands", states: "CA" },
  { name: "Congaree", states: "SC" },
  { name: "Crater Lake", states: "OR" },
  { name: "Cuyahoga Valley", states: "OH" },
  { name: "Death Valley", states: "CA, NV" },
  { name: "Denali", states: "AK" },
  { name: "Dry Tortugas", states: "FL" },
  { name: "Everglades", states: "FL" },
  { name: "Gates of the Arctic", states: "AK" },
  { name: "Gateway Arch", states: "MO" },
  { name: "Glacier", states: "MT" },
  { name: "Glacier Bay", states: "AK" },
  { name: "Grand Canyon", states: "AZ" },
  { name: "Grand Teton", states: "WY" },
  { name: "Great Basin", states: "NV" },
  { name: "Great Sand Dunes", states: "CO" },
  { name: "Great Smoky Mountains", states: "TN, NC" },
  { name: "Guadalupe Mountains", states: "TX" },
  { name: "Haleakalā", states: "HI" },
  { name: "Hawaiʻi Volcanoes", states: "HI" },
  { name: "Hot Springs", states: "AR" },
  { name: "Indiana Dunes", states: "IN" },
  { name: "Isle Royale", states: "MI" },
  { name: "Joshua Tree", states: "CA" },
  { name: "Katmai", states: "AK" },
  { name: "Kenai Fjords", states: "AK" },
  { name: "Kings Canyon", states: "CA" },
  { name: "Kobuk Valley", states: "AK" },
  { name: "Lake Clark", states: "AK" },
  { name: "Lassen Volcanic", states: "CA" },
  { name: "Mammoth Cave", states: "KY" },
  { name: "Mesa Verde", states: "CO" },
  { name: "Mount Rainier", states: "WA" },
  { name: "New River Gorge", states: "WV" },
  { name: "North Cascades", states: "WA" },
  { name: "Olympic", states: "WA" },
  { name: "Petrified Forest", states: "AZ" },
  { name: "Pinnacles", states: "CA" },
  { name: "Redwood", states: "CA" },
  { name: "Rocky Mountain", states: "CO" },
  { name: "Saguaro", states: "AZ" },
  { name: "Sequoia", states: "CA" },
  { name: "Shenandoah", states: "VA" },
  { name: "Theodore Roosevelt", states: "ND" },
  { name: "Virgin Islands", states: "VI" },
  { name: "Voyageurs", states: "MN" },
  { name: "White Sands", states: "NM" },
  { name: "Wind Cave", states: "SD" },
  { name: "Wrangell–St. Elias", states: "AK" },
  { name: "Yellowstone", states: "WY, MT, ID" },
  { name: "Yosemite", states: "CA" },
  { name: "Zion", states: "UT" },
];

// Shown in the country list alongside "United Kingdom" (not counted toward
// the 195 — they are one UN country). Subdivision flags use emoji tag
// sequences, so the emoji is stored directly instead of derived from ISO.
export const ukBreakdown = [
  { label: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { label: "Scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
  { label: "Wales", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿" },
] as const;

// Approximate centroids used for globe markers.
const STATE_CENTROIDS: Record<string, { lat: number; lng: number }> = {
  AL: { lat: 32.8, lng: -86.8 },
  AK: { lat: 64.0, lng: -152.0 },
  AZ: { lat: 34.2, lng: -111.6 },
  AR: { lat: 34.8, lng: -92.2 },
  CA: { lat: 37.2, lng: -119.3 },
  CO: { lat: 39.0, lng: -105.5 },
  CT: { lat: 41.6, lng: -72.7 },
  DE: { lat: 39.0, lng: -75.5 },
  DC: { lat: 38.9, lng: -77.0 },
  FL: { lat: 28.6, lng: -82.4 },
  GA: { lat: 32.6, lng: -83.4 },
  HI: { lat: 20.3, lng: -156.4 },
  ID: { lat: 44.4, lng: -114.6 },
  IL: { lat: 40.0, lng: -89.2 },
  IN: { lat: 39.9, lng: -86.3 },
  IA: { lat: 42.0, lng: -93.5 },
  KS: { lat: 38.5, lng: -98.4 },
  KY: { lat: 37.5, lng: -85.3 },
  LA: { lat: 31.0, lng: -92.0 },
  ME: { lat: 45.4, lng: -69.2 },
  MD: { lat: 39.0, lng: -76.8 },
  MA: { lat: 42.3, lng: -71.8 },
  MI: { lat: 44.3, lng: -85.4 },
  MN: { lat: 46.3, lng: -94.3 },
  MS: { lat: 32.7, lng: -89.7 },
  MO: { lat: 38.4, lng: -92.5 },
  MT: { lat: 47.0, lng: -109.6 },
  NE: { lat: 41.5, lng: -99.8 },
  NV: { lat: 39.3, lng: -116.6 },
  NH: { lat: 43.7, lng: -71.6 },
  NJ: { lat: 40.2, lng: -74.7 },
  NM: { lat: 34.4, lng: -106.1 },
  NY: { lat: 42.9, lng: -75.5 },
  NC: { lat: 35.5, lng: -79.4 },
  ND: { lat: 47.5, lng: -100.5 },
  OH: { lat: 40.3, lng: -82.8 },
  OK: { lat: 35.6, lng: -97.5 },
  OR: { lat: 43.9, lng: -120.6 },
  PA: { lat: 40.9, lng: -77.8 },
  RI: { lat: 41.7, lng: -71.6 },
  SC: { lat: 33.9, lng: -80.9 },
  SD: { lat: 44.4, lng: -100.2 },
  TN: { lat: 35.9, lng: -86.4 },
  TX: { lat: 31.5, lng: -99.3 },
  UT: { lat: 39.3, lng: -111.7 },
  VT: { lat: 44.1, lng: -72.7 },
  VA: { lat: 37.5, lng: -78.9 },
  WA: { lat: 47.4, lng: -120.4 },
  WV: { lat: 38.6, lng: -80.6 },
  WI: { lat: 44.6, lng: -89.9 },
  WY: { lat: 43.0, lng: -107.5 },
};

// Keyed by map-dataset name; the US is covered by state markers, and the UK
// gets one marker per home nation.
const COUNTRY_CENTROIDS: Record<string, { lat: number; lng: number }[]> = {
  India: [{ lat: 22.0, lng: 79.0 }],
  Canada: [{ lat: 56.0, lng: -106.0 }],
  Singapore: [{ lat: 1.35, lng: 103.82 }],
  Malaysia: [{ lat: 4.2, lng: 102.0 }],
  "United Arab Emirates": [{ lat: 24.0, lng: 54.0 }],
  France: [{ lat: 46.6, lng: 2.5 }],
  Portugal: [{ lat: 39.6, lng: -8.0 }],
  Peru: [{ lat: -9.2, lng: -75.0 }],
  Greece: [{ lat: 39.0, lng: 22.0 }],
  "United Kingdom": [
    { lat: 52.4, lng: -1.5 }, // England
    { lat: 56.8, lng: -4.2 }, // Scotland
    { lat: 52.3, lng: -3.7 }, // Wales
  ],
  Mexico: [{ lat: 23.6, lng: -102.5 }],
  Bahamas: [{ lat: 24.25, lng: -76.0 }],
  "Costa Rica": [{ lat: 9.7, lng: -84.2 }],
  Brazil: [{ lat: -10.0, lng: -53.0 }],
  Argentina: [{ lat: -34.0, lng: -64.0 }],
  Uruguay: [{ lat: -32.8, lng: -56.0 }],
  Antarctica: [{ lat: -75.0, lng: 0.0 }],
  "Dominican Rep.": [{ lat: 18.9, lng: -70.5 }],
  Jamaica: [{ lat: 18.1, lng: -77.3 }],
};

// Derived values used across the page
export const stateCount = visitedStates.filter(
  (s: string) => s !== "DC"
).length;
export const countryCount = visitedCountries.length;
export const parkCount = visitedParks.length;

// Globe markers: one dot per visited state and per visited country
// (states cover the US; the UK gets England/Scotland/Wales dots).
export const globeMarkers = [
  ...visitedStates.flatMap((s) =>
    STATE_CENTROIDS[s] ? [STATE_CENTROIDS[s]] : []
  ),
  ...visitedCountries
    .filter((c) => c !== "United States of America")
    .flatMap((c) => COUNTRY_CENTROIDS[c] ?? []),
];
