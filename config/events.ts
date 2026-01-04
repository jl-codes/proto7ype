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
  date: "January 17, 2026",
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

// Games Night event configuration
// Event URL: https://ti.to/proto7ype/proto7ype-poker
// Add new Thursday releases in Tito dashboard - they auto-appear on the /games page
export const gamesNightEvent: EventMeta = {
  slug: "proto7ype-poker",
  title: "Poker Tournament Night at PROTO7YPE",
  tagline: "Hosted poker tournament night (games of skill) with a $40 ticket and smooth check-in.",
  date: "Sundays",
  time: "7:00 PM",
  city: "San Francisco, CA",
  titoEventSlug:
    process.env.NEXT_PUBLIC_TITO_EVENT_SLUG_GAMES ||
    "proto7ype/proto7ype-poker",
  heroImage: "/images/hero-space.jpg",
  galleryImages: [],
  musicGenres: [], // Not applicable for Games Night
  features: [
    "Access to PROTO7YPE during the event window",
    "Hosted tables and tournament-style formats (no cash wagering)",
    "Community, music, and a smooth check-in flow",
    "Optional VIP seating and guest passes (if available)"
  ],
};

// Vibe XR 101 Workshop Series
// Event URL: https://ti.to/proto7ype/vibe-xr-101
export const vibeXR101Event: EventMeta = {
  slug: "vibe-xr-101",
  title: "Vibe XR 101",
  tagline: "AI-Native Game, XR, and Worldbuilding with Cline, Unreal, Blender, ThreeJS, and Open 3D Models",
  date: "10-Class Series",
  time: "Various Times",
  city: "San Francisco, CA",
  titoEventSlug:
    process.env.NEXT_PUBLIC_TITO_EVENT_SLUG_VIBE_XR ||
    "proto7ype/vibe-xr-101",
  heroImage: "/images/Vibe-XR-101.png",
  galleryImages: [],
  musicGenres: [], // Not applicable
  features: [
    "10-class build-first course series",
    "AI-native creative pipelines with Cline as your copilot",
    "Hands-on with Unreal Engine 5, Blender, ThreeJS, and more",
    "Choose your track: Game Dev, WebXR, or 3D Printing",
    "Build portfolio-worthy projects with AI assistance"
  ],
};
