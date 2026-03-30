// components/HeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen gradient background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(135deg, #050509 0%, #1a0a1e 25%, #0d0d1a 50%, #150a10 75%, #050509 100%)",
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl pt-24 sm:pt-32 md:pt-36">
        {/* Logo with subtle glow */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/images/proto7ype-logo.png"
            alt="PROTO7YPE Logo"
            width={200}
            height={200}
            className="w-[100px] sm:w-[120px] lg:w-[180px] h-auto"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.4)) drop-shadow(0 0 40px rgba(236, 72, 153, 0.2))',
            }}
            priority
          />
        </div>
        
        {/* Main title with extreme glitch effect */}
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black mb-6 tracking-tight">
          <span className="text-white glitch-text" data-text="PROTO7YPE">PROTO7YPE</span>
        </h1>
        
        {/* Tagline */}
        <p className="text-base sm:text-lg lg:text-2xl text-zinc-200 mb-6 sm:mb-8 font-light tracking-wide">
          OPEN-SOURCE <span className="text-pink-500 font-bold">ARCADE GAME STUDIO</span>
        </p>

        {/* Game genres */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 px-2">
          {["ARCADE", "RHYTHM", "HORROR", "RACING", "CO-OP", "PUZZLE"].map((genre) => (
            <span
              key={genre}
              className="px-2.5 py-1.5 sm:px-4 sm:py-2.5 md:px-6 md:py-3 bg-black/40 border border-pink-500/30 sm:border-2 backdrop-blur-sm transform skew-x-[-5deg] text-pink-400 font-bold text-[0.55rem] sm:text-[0.65rem] md:text-xs tracking-wider hover:bg-pink-500/10 hover:border-pink-500/50 transition-all cursor-default"
            >
              <span className="inline-block transform skew-x-[5deg]">{genre}</span>
            </span>
          ))}
        </div>

        {/* Open-source community statement */}
        <div className="mb-10 sm:mb-16 max-w-2xl mx-auto">
          <p className="text-zinc-300 text-sm sm:text-base lg:text-xl leading-relaxed font-light">
            Open-source arcade games — from cabinet to code.
          </p>
          <span className="text-pink-500/80 text-xs uppercase tracking-widest mt-6 block border-t border-white/10 pt-6 w-fit mx-auto px-8">
            Fork it. Mod it. Play it. Ship it.
          </span>
        </div>

        {/* Main CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
          <Link
            href="/games"
            className="button-primary inline-block text-sm sm:text-base lg:text-xl px-8 sm:px-10 lg:px-12 py-4 sm:py-5 font-black tracking-widest hover:scale-105 transition-transform duration-200 w-full sm:w-auto text-center"
          >
            PLAY GAMES
          </Link>

          <Link
            href="/request-arcade"
            className="button-primary inline-block text-sm sm:text-base lg:text-xl px-8 sm:px-10 lg:px-12 py-4 sm:py-5 font-black tracking-widest hover:scale-105 transition-transform duration-200 w-full sm:w-auto text-center"
          >
            REQUEST AN ARCADE
          </Link>
        </div>
      </div>

      {/* Animated elements that dance with the neon theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/6 w-24 h-24 bg-green-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-orange-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-pink-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pink-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
