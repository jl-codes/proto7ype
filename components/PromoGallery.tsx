// components/PromoGallery.tsx
"use client";

import { currentEvent } from "../config/events";

export default function PromoGallery() {
  return (
    <section className="section relative">
      <div className="section-wide">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">
            Scenes from PROTO7YPE nights
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Hardware chaos, sound system worship, ridiculous energy, and a crowd that actually moves to the rhythm.
            This is where electronic music gets prototyped in real time.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {currentEvent.galleryImages.map((src, index) => {
            const isLarge = index === 0 || index === 3;
            return (
              <div
                key={src}
                className={`
                  relative overflow-hidden rounded-2xl border border-zinc-800 rave-glow
                  ${isLarge ? 'lg:col-span-2 aspect-[4/3]' : 'aspect-square'}
                  group cursor-pointer
                `}
              >
                <img
                  src={src}
                  alt={`PROTO7YPE ${index % 2 === 0 ? 'crowd energy' : 'DJ setup'}`}
                  className="w-full h-full object-cover gallery-image"
                  onError={(e) => {
                    // Fallback for missing images with different themes
                    const target = e.target as HTMLImageElement;
                    const themes = [
                      { bg: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)", icon: "🎵", text: "CROWD ENERGY" },
                      { bg: "linear-gradient(135deg, #8b5cf6 0%, #f97316 100%)", icon: "🎧", text: "DJ SETUP" },
                      { bg: "linear-gradient(135deg, #06b6d4 0%, #f97316 100%)", icon: "💡", text: "LIGHT SHOW" },
                      { bg: "linear-gradient(135deg, #10b981 0%, #f97316 100%)", icon: "🔥", text: "PEAK MOMENT" }
                    ];
                    const theme = themes[index % themes.length];
                    target.style.background = theme.bg;
                    target.style.display = "flex";
                    target.style.alignItems = "center";
                    target.style.justifyContent = "center";
                    target.innerHTML = `
                      <div class="text-white text-center p-6">
                        <div class="text-4xl mb-4">${theme.icon}</div>
                        <div class="font-bold text-lg mb-2">${theme.text}</div>
                        <div class="text-sm text-white/70">Photo coming soon</div>
                      </div>
                    `;
                  }}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="font-bold uppercase tracking-wider text-sm">
                      {index % 2 === 0 ? 'Pure Energy' : 'Sound System'}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {currentEvent.features.map((feature, index) => {
            const icons = ["✨", "🔊", "🛋️", "🍕", "💧"];
            return (
              <div 
                key={feature}
                className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6 text-center hover:border-orange-500/50 transition-colors duration-300 pulse-border"
              >
                <div className="text-3xl mb-4">{icons[index] || "⚡"}</div>
                <h3 className="text-white font-semibold mb-2 uppercase tracking-wide text-sm">
                  {feature}
                </h3>
                <p className="text-zinc-400 text-xs">
                  {feature.includes('lighting') && "Strobing visuals and immersive atmosphere"}
                  {feature.includes('sound') && "Heavy bass and crystal-clear highs"}
                  {feature.includes('chill') && "Space to decompress when you need it"}
                  {feature.includes('food') && "Fuel for late-night dancing"}
                  {feature.includes('refreshments') && "Stay hydrated, stay energized"}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 rave-glow">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to join the energy?</h3>
            <p className="text-zinc-300 mb-6 max-w-md mx-auto">
              This is a night built around movement, rhythm, and respect for the room and the people in it.
            </p>
            <a 
              href="/tickets" 
              className="button-primary inline-block"
            >
              Secure Your Spot
            </a>
          </div>
        </div>
      </div>

      {/* Background texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5"></div>
      </div>
    </section>
  );
}
