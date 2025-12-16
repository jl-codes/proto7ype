// components/HeroSection.tsx
"use client";

import Link from "next/link";
import { currentEvent } from "../config/events";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <img
          src={currentEvent.heroImage}
          alt="PROTO7YPE space with neon lighting"
          className="w-full h-full object-cover object-[center_bottom]"
          onError={(e) => {
            // Fallback for missing image
            const target = e.target as HTMLImageElement;
            target.style.background = 
              "linear-gradient(135deg, #050509 0%, #f97316 30%, #8b5cf6 60%, #10b981 100%)";
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Logo with subtle glow */}
        <div className="mb-8 flex justify-center">
          <img
            src="/images/proto7ype-logo.png"
            alt="PROTO7YPE Logo"
            className="w-[150px] lg:w-[250px] h-auto"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.4)) drop-shadow(0 0 40px rgba(236, 72, 153, 0.2))',
            }}
          />
        </div>
        
        {/* Main title with extreme glitch effect */}
        <h1 className="text-7xl lg:text-[12rem] font-black mb-8 tracking-tighter">
          <span className="text-white glitch-text" data-text="PROTO7YPE">PROTO7YPE</span>
        </h1>
        
        {/* Tagline */}
        <p className="text-2xl lg:text-3xl text-zinc-200 mb-12 font-light tracking-wide">
          SAN FRANCISCO&apos;S EXCLUSIVE <span className="text-pink-500 font-bold">XR PENTHOUSE</span>
        </p>

        {/* Music genres - Curated selection */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 sm:gap-x-12 sm:gap-y-8 lg:gap-x-16 mb-16">
          {["TRAP", "INDUSTRIAL", "EDM", "GOTH", "TECHNO"].map((genre) => (
            <span
              key={genre}
              className="inline-block min-w-[9rem] px-5 py-3 sm:px-8 sm:py-4 lg:px-10 bg-black/40 border-2 border-pink-500/30 backdrop-blur-sm transform skew-x-[-5deg] text-pink-400 font-bold text-xs tracking-wider hover:bg-pink-500/10 hover:border-pink-500/50 transition-all cursor-default"
            >
              <span className="inline-block transform skew-x-[5deg]">{genre}</span>
            </span>
          ))}
        </div>

        {/* Vibe Statement */}
        <div className="mb-16 max-w-2xl mx-auto">
          <p className="text-zinc-300 text-lg lg:text-xl leading-loose font-light">
            A visceral audio-visual experience high above the city. <br/>
            Skyline views. Immersive Extended Reality. 4AM Energy. <br/>
            <span className="text-pink-500/80 text-xs uppercase tracking-widest mt-6 block border-t border-white/10 pt-6 w-fit mx-auto px-8">Location revealed upon entry confirmation</span>
          </p>
        </div>

        {/* Main CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/tickets"
            className="button-primary inline-block text-xl px-12 py-5 font-black tracking-widest hover:scale-105 transition-transform duration-200"
          >
            AFTERS SHOWS
          </Link>

          <Link
            href="/games"
            className="button-primary inline-block text-xl px-12 py-5 font-black tracking-widest hover:scale-105 transition-transform duration-200"
          >
            GAMES NIGHT
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
