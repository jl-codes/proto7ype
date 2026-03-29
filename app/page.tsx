// app/page.tsx
import Link from "next/link";
import HeroSection from "../components/HeroSection";
import VideoSection from "../components/VideoSection";

export default function HomePage() {
  return (
    <>
      {/* Hero section — logo, tagline, genre chips */}
      <HeroSection />

      {/* Gameplay footage & studio pillars */}
      <VideoSection />

      {/* Bottom CTA — get involved */}
      <section className="section bg-zinc-900/20 border-t border-zinc-800">
        <div className="section-wide text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 strobe-text">
              <span className="gradient-text">JOIN THE ARCADE</span>
            </h2>
            <p className="text-xl text-zinc-300 mb-10 leading-relaxed font-light">
              Play our latest titles, request a custom arcade cabinet for your
              space, or learn how to build your own games with the PROTO7YPE
              open-source engine.
            </p>

            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <Link
                  href="/games"
                  className="button-primary inline-block text-lg px-12 py-5 font-bold tracking-widest hover:scale-105 transition-transform duration-200"
                >
                  PLAY GAMES
                </Link>
                <Link
                  href="/request-arcade"
                  className="button-primary inline-block text-lg px-12 py-5 font-bold tracking-widest hover:scale-105 transition-transform duration-200"
                >
                  REQUEST AN ARCADE
                </Link>
                <Link
                  href="/learn"
                  className="button-primary inline-block text-lg px-12 py-5 font-bold tracking-widest hover:scale-105 transition-transform duration-200"
                >
                  LEARN
                </Link>
              </div>

              <p className="text-xs text-zinc-500 mt-6 max-w-2xl mx-auto">
                All PROTO7YPE games are free and open-source.
                Contributions welcome on{" "}
                <a
                  href="https://github.com/jl-codes/proto7ype"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition-colors"
                >
                  GitHub
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
