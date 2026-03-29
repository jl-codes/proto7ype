// app/games/page.tsx
import type { Metadata } from "next";
import ArcadeEmbed from "./ArcadeEmbed";

export const metadata: Metadata = {
  title: "Play Games | PROTO7YPE Arcade",
  description:
    "Play free, open-source arcade games built by PROTO7YPE. Keyboard and gamepad supported — pick a game and start playing instantly in your browser.",
  keywords:
    "play arcade games online, free browser games, open source arcade, indie arcade games, gamepad browser games, proto7ype arcade, retro arcade",
  openGraph: {
    title: "Play Games | PROTO7YPE Arcade",
    description:
      "Free, open-source arcade games you can play right now. Keyboard and gamepad supported.",
    url: "https://proto7ype.events/games",
    type: "website",
  },
};

export default function GamesPage() {
  return <ArcadeEmbed />;
}
