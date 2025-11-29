// config/events.ts
export type EventMeta = {
  slug: string;            // internal key, e.g. "sound-session-jan-2025"
  title: string;
  tagline: string;
  date: string;
  time: string;
  city: string;
  // IMPORTANT: Do NOT include the full address here – we keep that in Tito emails only
  titoEventSlug: string;   // "<account>/<event>"
  heroImage: string;
  galleryImages: string[];
  musicGenres: string[];   // For sound sessions
  features: string[];      // Event highlights
};

export const currentEvent: EventMeta = {
  slug: "techno-afters-proto7ype",
  title: "Techno Afters @ PROTO7YPE",
  tagline: "Late-night techno afterparty in San Francisco. Underground electronic music until 4AM.",
  date: "December 13, 2025",
  time: "10:00 PM – 4:00 AM",
  city: "San Francisco, CA",
  titoEventSlug:
    process.env.NEXT_PUBLIC_TITO_EVENT_SLUG_CURRENT ||
    "proto7ype/techno-afters-proto7ype",
  heroImage: "/images/hero-space.jpg",
  galleryImages: [
    "/images/crowd-1.jpg",
    "/images/dj-1.jpg",
    "/images/crowd-2.jpg",
    "/images/lights-1.jpg",
  ],
  musicGenres: ["Techno", "Hard Techno", "Industrial", "Minimal"],
  features: [
    "Immersive lighting",
    "Heavy sound system presence", 
    "Designated chill + decompression areas",
    "Hot food station + late-night snacks",
    "Non-alcoholic refreshments + hydration support"
  ],
};
