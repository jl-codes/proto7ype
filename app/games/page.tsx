// app/games/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

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

type GameCard = {
  title: string;
  slug: string;
  file: string;
  genre: string;
  description: string;
  icon: string;
  color: string;
};

const GAMES: GameCard[] = [
  {
    title: "Arc Bundas",
    slug: "arc-bundas",
    file: "arc-bundas.html",
    genre: "Arcade",
    description:
      "Classic arcade action with a twist. Dodge, shoot, and survive waves of increasingly chaotic enemies.",
    icon: "🚀",
    color: "pink",
  },
  {
    title: "Vibe Knights",
    slug: "vibe-knights",
    file: "vibe-knights.html",
    genre: "Action",
    description:
      "Hack and slash your way through hordes of enemies in this medieval-meets-neon brawler.",
    icon: "🗡️",
    color: "purple",
  },
  {
    title: "Cyber Blackjack",
    slug: "blackjack",
    file: "blackjack.html",
    genre: "Card",
    description:
      "Classic 21 with a cyberpunk edge. Test your luck and strategy against the dealer.",
    icon: "🃏",
    color: "green",
  },
  {
    title: "Cyber Drive",
    slug: "cyber-drive",
    file: "cyber-drive.html",
    genre: "Racing",
    description:
      "High-speed neon racing through a synthwave cityscape. Dodge traffic, hit boosts, and survive.",
    icon: "🏎️",
    color: "blue",
  },
  {
    title: "UFB",
    slug: "ufb",
    file: "ufb.html",
    genre: "Fighting",
    description:
      "Ultimate robot fighting. Pick your bot, learn the combos, and dominate the arena.",
    icon: "🤖",
    color: "orange",
  },
  {
    title: "Neon Serpent",
    slug: "neon-serpent",
    file: "neon-serpent.html",
    genre: "Arcade",
    description:
      "The classic snake game reimagined with neon visuals and power-ups. How long can you survive?",
    icon: "🐍",
    color: "green",
  },
  {
    title: "Cline Defenders",
    slug: "cline-defenders",
    file: "cline-defenders.html",
    genre: "Tower Defense",
    description:
      "Defend your codebase from bugs and exploits. Place towers, upgrade defenses, and protect the mainframe.",
    icon: "🛡️",
    color: "blue",
  },
  {
    title: "Beat Protocol",
    slug: "beat-protocol",
    file: "beat-protocol.html",
    genre: "Rhythm",
    description:
      "Hit the beat, ride the waveform. A rhythm game that puts your timing to the ultimate test.",
    icon: "🎵",
    color: "purple",
  },
  {
    title: "DREAD",
    slug: "dread",
    file: "dread.html",
    genre: "Horror",
    description:
      "Explore the darkness with nothing but your nerve. A horror experience that gets under your skin.",
    icon: "💀",
    color: "pink",
  },
  {
    title: "Shell Game",
    slug: "shell-game",
    file: "shell-game.html",
    genre: "Puzzle",
    description:
      "Track the shell, trust your eyes. A deceptively simple game that tests your focus and memory.",
    icon: "🎯",
    color: "orange",
  },
  {
    title: "High Noon",
    slug: "high-noon",
    file: "high-noon.html",
    genre: "Western",
    description:
      "Quick-draw showdowns in the digital frontier. Fastest trigger wins — no second chances.",
    icon: "🤠",
    color: "orange",
  },
  {
    title: "Klaus",
    slug: "klaus",
    file: "klaus.html",
    genre: "Platformer",
    description:
      "Guide Klaus through mind-bending levels. A platformer that plays with perception and gravity.",
    icon: "🏃",
    color: "blue",
  },
  {
    title: "Dance Dance",
    slug: "dancedance",
    file: "dancedance/index.html",
    genre: "Rhythm / AR",
    description:
      "Full-body rhythm game with AR pose detection. Dance your way to a high score — no controller needed.",
    icon: "💃",
    color: "purple",
  },
];

const colorMap: Record<
  string,
  { border: string; text: string; bg: string; hoverBorder: string }
> = {
  pink: {
    border: "border-pink-500/30",
    text: "text-pink-400",
    bg: "bg-pink-500/10",
    hoverBorder: "hover:border-pink-500/60",
  },
  purple: {
    border: "border-purple-500/30",
    text: "text-purple-400",
    bg: "bg-purple-500/10",
    hoverBorder: "hover:border-purple-500/60",
  },
  green: {
    border: "border-green-500/30",
    text: "text-green-400",
    bg: "bg-green-500/10",
    hoverBorder: "hover:border-green-500/60",
  },
  blue: {
    border: "border-blue-500/30",
    text: "text-blue-400",
    bg: "bg-blue-500/10",
    hoverBorder: "hover:border-blue-500/60",
  },
  orange: {
    border: "border-orange-500/30",
    text: "text-orange-400",
    bg: "bg-orange-500/10",
    hoverBorder: "hover:border-orange-500/60",
  },
};

function ArcadeBanner({ position }: { position: "top" | "bottom" }) {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-pink-600 via-pink-500 to-orange-500 py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-4 flex-wrap">
          <span className="text-2xl">🕹️</span>
          <p className="text-white font-black text-sm sm:text-base md:text-lg uppercase tracking-[0.15em] text-center">
            All games available on PROTO7YPE Arcade Cabinets
          </p>
          <span className="text-2xl">🕹️</span>
          {position === "bottom" && (
            <Link
              href="/request-arcade"
              className="ml-2 inline-flex items-center gap-2 bg-white text-pink-600 font-black text-xs sm:text-sm uppercase tracking-wider px-5 py-2 rounded-full hover:bg-pink-100 transition-colors"
            >
              Request a Cabinet →
            </Link>
          )}
        </div>
      </div>
      {/* Animated scanline effect */}
      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.05)_2px,rgba(0,0,0,0.05)_4px)]" />
    </div>
  );
}

export default function GamesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section relative overflow-hidden pb-8" style={{ paddingTop: '10rem' }}>
        <div className="section-wide max-w-5xl text-center">
          <h1 className="text-4xl lg:text-7xl font-bold mb-5 strobe-text leading-tight">
            <span className="gradient-text">The Arcade</span>
          </h1>
          <p className="text-xl lg:text-2xl text-zinc-200 mb-4 font-semibold max-w-3xl mx-auto leading-relaxed">
            {GAMES.length} free, open-source games — playable right now in your{" "}
            <span className="text-pink-400">browser</span>
          </p>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Every title is open-source. Play here, fork the repo, or load them
            onto your own arcade cabinet.
          </p>
        </div>

        {/* Background animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </section>

      {/* Top Arcade Cabinet Banner */}
      <ArcadeBanner position="top" />

      {/* Games Grid */}
      <section className="section">
        <div className="section-wide max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GAMES.map((game) => {
              const colors = colorMap[game.color] || colorMap.pink;
              return (
                <Link
                  key={game.slug}
                  href={`/games/${game.slug}`}
                  className={`group relative bg-zinc-900/50 border-2 ${colors.border} ${colors.hoverBorder} rounded-2xl p-6 transition-all duration-300 hover:bg-zinc-900/80 hover:scale-[1.02] block`}
                >
                  {/* Status badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-green-400 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Play Now
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-4">{game.icon}</div>

                  {/* Genre tag */}
                  <span
                    className={`inline-block text-xs font-bold uppercase tracking-widest ${colors.text} ${colors.bg} rounded-full px-3 py-1 mb-3`}
                  >
                    {game.genre}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                    {game.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {game.description}
                  </p>

                  {/* Play button hint */}
                  <div
                    className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider ${colors.text} opacity-70 group-hover:opacity-100 transition-opacity`}
                  >
                    <span>▶</span> Play in Browser
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rave-glow" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Arcade Cabinet Banner */}
      <ArcadeBanner position="bottom" />

      {/* Call to Action */}
      <section className="section">
        <div className="section-wide max-w-3xl">
          <div className="bg-zinc-900/30 border-2 border-pink-500/30 rounded-2xl p-8 lg:p-12 text-center rave-glow">
            <div className="text-5xl mb-6">⚙️</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">
              Open Source — Fork It, Mod It, Ship It
            </h2>
            <p className="text-zinc-300 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Every game is open-source. Star the repo to follow development, or
              contribute your own game to the collection.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/Frontier-Makerspace/proto7ype-arcade"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary inline-block text-base px-10 py-4 font-bold tracking-widest"
              >
                ⭐ STAR ON GITHUB
              </a>
              <Link
                href="/request-arcade"
                className="button-primary inline-block text-base px-10 py-4 font-bold tracking-widest"
              >
                REQUEST AN ARCADE
              </Link>
            </div>
            <p className="text-xs text-zinc-500 mt-6">
              All PROTO7YPE games are free and open-source. Contributions
              welcome.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
