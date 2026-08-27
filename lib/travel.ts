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
  year: number;
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

// TODO(mikul): paste your Beli profile URL to show a food link under the
// hero stats (hidden while empty).
export const beliUrl = "";

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
  { name: "Yosemite", year: 2025 },
  { name: "Zion", year: 2024 },
  { name: "Grand Canyon", year: 2024 },
  { name: "Joshua Tree", year: 2023 },
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

// Derived values used across the page
export const stateCount = visitedStates.filter(
  (s: string) => s !== "DC"
).length;
export const countryCount = visitedCountries.length;
export const parkCount = visitedParks.length;
export const globeMarkers = trips.flatMap((trip) =>
  trip.places.map(({ lat, lng }) => ({ lat, lng }))
);
