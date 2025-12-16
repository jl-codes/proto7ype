// components/VideoSection.tsx
"use client";

import { useRef, useState } from "react";

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
    <section className="section relative bg-black">
      <div className="section-wide">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4 strobe-text">
            <span className="gradient-text">UNDERGROUND EXPERIENCES</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto font-light">
            PROTO7YPE is a high-energy, immersive venue in San Francisco featuring XR visual environments, late-night afters, and hosted Games Night events.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/tickets" className="button-primary inline-block text-base px-10 py-4">
              Afters Shows
            </a>
            <a href="/games" className="button-primary inline-block text-base px-10 py-4">
              Games Night
            </a>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Video Container */}
          <div className="relative aspect-[9/16] lg:aspect-video rounded-2xl overflow-hidden border-2 border-orange-500/50 rave-glow bg-zinc-900 mx-auto max-w-lg lg:max-w-none group">
            <video
              ref={videoRef}
              src="/images/promo-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>

            {/* Mute/Unmute Control */}
            <button
              onClick={toggleMute}
              className="absolute bottom-6 right-6 bg-black/60 hover:bg-orange-500 text-white p-3 rounded-full hover:scale-110 transition-all duration-300 border border-white/20 backdrop-blur-sm z-20 group-hover:opacity-100 opacity-0 lg:opacity-100"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                </svg>
              )}
            </button>

            {/* "Live" Indicator */}
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-orange-500/30">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-white text-xs font-bold tracking-widest uppercase">Live Footage</span>
            </div>
          </div>

            {/* Video description with attitude */}
          <div className="mt-12 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 rave-glow hover:border-orange-500/30 transition-colors">
                <div className="text-3xl mb-3">🌀</div>
                <h4 className="text-orange-400 font-bold mb-3 uppercase tracking-wider">
                  XR Visual Worlds
                </h4>
                <p className="text-zinc-300 text-sm">
                  Projection mapping + reactive environments that turn the room into a living system.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 rave-glow hover:border-orange-500/30 transition-colors">
                <div className="text-3xl mb-3">🔊</div>
                <h4 className="text-orange-400 font-bold mb-3 uppercase tracking-wider">
                  Afters Shows
                </h4>
                <p className="text-zinc-300 text-sm">
                  Late-night sets, high-fidelity sound, and a respect-first room built for serious energy.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 rave-glow hover:border-orange-500/30 transition-colors">
                <div className="text-3xl mb-3">♠️</div>
                <h4 className="text-orange-400 font-bold mb-3 uppercase tracking-wider">
                  Games Night
                </h4>
                <p className="text-zinc-300 text-sm">
                  Hosted tables and tournament-style formats as part of private social club access.
                </p>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-12">
            <div className="bg-zinc-900/30 border border-orange-500/30 rounded-2xl p-8 rave-glow">
              <h3 className="text-3xl font-bold mb-4 gradient-text">Choose your experience</h3>
              <p className="text-zinc-200 mb-8 text-lg">
                Explore upcoming afters shows, or grab a Daily Membership for Games Night.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/tickets" className="button-primary inline-block text-lg px-10 py-4">
                  Afters Shows
                </a>
                <a href="/games" className="button-primary inline-block text-lg px-10 py-4">
                  Games Night
                </a>
              </div>
              <p className="text-xs text-zinc-500 mt-6 max-w-2xl mx-auto">
                PROTO7YPE is based in San Francisco. Event details and venue address are shared after purchase.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Intense background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-orange-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
}
