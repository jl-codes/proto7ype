// app/games/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GameEmbed from "./GameEmbed";

type GameInfo = {
  title: string;
  slug: string;
  file: string;
  genre: string;
  description: string;
  icon: string;
};

const GAMES: GameInfo[] = [
  { title: "Arc Bundas", slug: "arc-bundas", file: "arc-bundas.html", genre: "Arcade", description: "Classic arcade action with a twist.", icon: "🚀" },
  { title: "Vibe Knights", slug: "vibe-knights", file: "vibe-knights.html", genre: "Action", description: "Hack and slash through hordes of enemies.", icon: "🗡️" },
  { title: "Cyber Blackjack", slug: "blackjack", file: "blackjack.html", genre: "Card", description: "Classic 21 with a cyberpunk edge.", icon: "🃏" },
  { title: "Cyber Drive", slug: "cyber-drive", file: "cyber-drive.html", genre: "Racing", description: "High-speed neon racing through a synthwave cityscape.", icon: "🏎️" },
  { title: "UFB", slug: "ufb", file: "ufb.html", genre: "Fighting", description: "Ultimate robot fighting in the arena.", icon: "🤖" },
  { title: "Neon Serpent", slug: "neon-serpent", file: "neon-serpent.html", genre: "Arcade", description: "The classic snake game reimagined with neon visuals.", icon: "🐍" },
  { title: "Cline Defenders", slug: "cline-defenders", file: "cline-defenders.html", genre: "Tower Defense", description: "Defend your codebase from bugs and exploits.", icon: "🛡️" },
  { title: "Beat Protocol", slug: "beat-protocol", file: "beat-protocol.html", genre: "Rhythm", description: "Hit the beat, ride the waveform.", icon: "🎵" },
  { title: "DREAD", slug: "dread", file: "dread.html", genre: "Horror", description: "Explore the darkness with nothing but your nerve.", icon: "💀" },
  { title: "Shell Game", slug: "shell-game", file: "shell-game.html", genre: "Puzzle", description: "Track the shell, trust your eyes.", icon: "🎯" },
  { title: "High Noon", slug: "high-noon", file: "high-noon.html", genre: "Western", description: "Quick-draw showdowns in the digital frontier.", icon: "🤠" },
  { title: "Klaus", slug: "klaus", file: "klaus.html", genre: "Platformer", description: "Guide Klaus through mind-bending levels.", icon: "🏃" },
  { title: "Dance Dance", slug: "dancedance", file: "dancedance/index.html", genre: "Rhythm / AR", description: "Full-body rhythm game with AR pose detection.", icon: "💃" },
];

export function generateStaticParams() {
  return GAMES.map((game) => ({ slug: game.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = GAMES.find((g) => g.slug === slug);
  if (!game) return {};
  return {
    title: `${game.title} | PROTO7YPE Arcade`,
    description: `Play ${game.title} — ${game.description} Free, open-source, playable in your browser.`,
    openGraph: {
      title: `${game.title} | PROTO7YPE Arcade`,
      description: `Play ${game.title} free in your browser. ${game.description}`,
      url: `https://proto7ype.events/games/${game.slug}`,
      type: "website",
    },
  };
}

export default async function GamePlayPage({ params }: Props) {
  const { slug } = await params;
  const game = GAMES.find((g) => g.slug === slug);
  if (!game) notFound();

  const gameSrc = `/arcade/${game.file}`;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar with game info and back button */}
      <div className="bg-gradient-to-r from-pink-600 via-pink-500 to-orange-500 pt-28 pb-3 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <Link
              href="/games"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-colors backdrop-blur-sm"
            >
              ← Back to Arcade
            </Link>
            <span className="text-2xl">{game.icon}</span>
            <div>
              <h1 className="text-white font-black text-lg sm:text-xl leading-tight">
                {game.title}
              </h1>
              <p className="text-white/70 text-xs uppercase tracking-wider font-bold">
                {game.genre}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white/80 text-xs font-bold uppercase tracking-wider hidden sm:inline">
              🕹️ Available on Arcade Cabinets
            </span>
            <Link
              href="/request-arcade"
              className="inline-flex items-center gap-1 bg-white text-pink-600 font-black text-xs uppercase tracking-wider px-4 py-2 rounded-full hover:bg-pink-100 transition-colors"
            >
              Get a Cabinet
            </Link>
          </div>
        </div>
      </div>

      {/* Game iframe */}
      <GameEmbed src={gameSrc} title={game.title} />

      {/* Bottom arcade banner */}
      <div className="bg-gradient-to-r from-pink-600 via-pink-500 to-orange-500 py-3 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-4 flex-wrap">
          <span className="text-xl">🕹️</span>
          <p className="text-white font-black text-xs sm:text-sm uppercase tracking-[0.15em] text-center">
            All games available on PROTO7YPE Arcade Cabinets
          </p>
          <span className="text-xl">🕹️</span>
          <Link
            href="/request-arcade"
            className="ml-2 inline-flex items-center gap-2 bg-white text-pink-600 font-black text-xs uppercase tracking-wider px-4 py-2 rounded-full hover:bg-pink-100 transition-colors"
          >
            Request a Cabinet →
          </Link>
        </div>
      </div>
    </div>
  );
}
