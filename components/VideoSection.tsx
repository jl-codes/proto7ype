// components/VideoSection.tsx
"use client";

import { useRef, useState } from "react";
import Link from "next/link";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative bg-black">
      {/* Top content — WHAT WE BUILD header */}
      <div className="section relative z-10">
        <div className="section-wide">
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-6xl font-bold mb-4 strobe-text">
              <span className="gradient-text">WHAT WE BUILD</span>
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto font-light">
              PROTO7YPE is an open-source arcade game studio — original titles,
              community mods, and a free engine built for makers who ship.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/games"
                className="button-primary inline-block text-base px-10 py-4"
              >
                Browse Games
              </Link>
              <a
                href="https://github.com/Frontier-Makerspace/proto7ype-arcade"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary inline-block text-base px-10 py-4"
              >
                View Source
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Video background section — pillars + CTA superimposed */}
      <div className="relative overflow-hidden">
        {/* Video background */}
        <video
          ref={videoRef}
          src="/images/promo-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Gradient edges for blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

        {/* Launch Party Footage indicator */}
        <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-pink-500/30 z-20">
          <div className="w-2.5 h-2.5 bg-pink-500 rounded-full animate-pulse" />
          <span className="text-white text-xs font-bold tracking-widest uppercase">
            Launch Party Footage
          </span>
        </div>

        {/* Mute/Unmute Control */}
        <button
          onClick={toggleMute}
          className="absolute bottom-6 right-6 bg-black/60 hover:bg-pink-500 text-white p-3 rounded-full hover:scale-110 transition-all duration-300 border border-white/20 backdrop-blur-sm z-20"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              />
            </svg>
          )}
        </button>

        {/* Content superimposed over the video */}
        <div className="relative z-10 px-6 py-16 lg:py-24">
          <div className="max-w-5xl mx-auto">
            {/* Studio pillars */}
            <div className="text-center mb-16">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-pink-500/40 transition-colors">
                  <div className="text-3xl mb-3">🕹️</div>
                  <h4 className="text-pink-400 font-bold mb-3 uppercase tracking-wider">
                    Arcade Exhibitions
                  </h4>
                  <p className="text-zinc-200 text-sm leading-relaxed">
                    We bring arcade cabinets to events, hackerspaces, and venues.
                    Come play, compete, and connect with the community.
                  </p>
                </div>
                <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-pink-500/40 transition-colors">
                  <div className="text-3xl mb-3">⚙️</div>
                  <h4 className="text-pink-400 font-bold mb-3 uppercase tracking-wider">
                    Open-Source Workflows
                  </h4>
                  <p className="text-zinc-200 text-sm leading-relaxed">
                    Every tool, template, and pipeline is open-source. Clone the
                    repo and start building your own arcade game today.
                  </p>
                </div>
                <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-pink-500/40 transition-colors">
                  <div className="text-3xl mb-3">🛠️</div>
                  <h4 className="text-pink-400 font-bold mb-3 uppercase tracking-wider">
                    Game Building Events
                  </h4>
                  <p className="text-zinc-200 text-sm leading-relaxed">
                    Hands-on workshops and game jams where players become makers.
                    Build, ship, and get your game on the cabinet.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="text-center">
              <div className="bg-black/40 backdrop-blur-md border border-pink-500/30 rounded-2xl p-8">
                <h3 className="text-3xl font-bold mb-4 gradient-text">
                  Start playing — or start building
                </h3>
                <p className="text-zinc-100 mb-8 text-lg">
                  Jump into our latest arcade titles, or clone the repo and ship
                  your own.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/games"
                    className="button-primary inline-block text-lg px-10 py-4"
                  >
                    Play Games
                  </Link>
                  <Link
                    href="/request-arcade"
                    className="button-primary inline-block text-lg px-10 py-4"
                  >
                    Request an Arcade
                  </Link>
                </div>
                <p className="text-xs text-zinc-400 mt-6 max-w-2xl mx-auto">
                  All PROTO7YPE games are free and open-source. Contributions
                  welcome on GitHub.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
