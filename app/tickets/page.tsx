// app/tickets/page.tsx
import { currentEvent } from "../../config/events";
import TitoWidget from "../../components/TitoWidget";

export const metadata = {
  title: `Tickets - ${currentEvent.title} | PROTO7YPE`,
  description: `Secure your spot at ${currentEvent.title}. Pulsating low-end, strobing light, and pure electronic energy at PROTO7YPE's underground venue in San Francisco.`,
};

export default function TicketsPage() {
  return (
    <div className="min-h-screen">
      {/* Header section */}
      <section className="section relative overflow-hidden">
        <div className="section-wide max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 strobe-text">
              <span className="gradient-text">Secure Your Spot</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-6">
              {currentEvent.title}
            </p>
            
            {/* Event details */}
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 rave-glow inline-block">
              <div className="flex flex-col lg:flex-row items-center gap-6 text-center lg:text-left">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">{currentEvent.date}</div>
                  <div className="text-orange-400 font-semibold">{currentEvent.time}</div>
                </div>
                <div className="hidden lg:block w-px h-12 bg-zinc-700"></div>
                <div>
                  <div className="text-zinc-400 text-sm uppercase tracking-wider mb-1">Location</div>
                  <div className="text-white font-semibold">PROTO7YPE · San Francisco, CA</div>
                  <div className="text-xs text-zinc-500">Full address revealed via email after purchase</div>
                </div>
              </div>
            </div>
          </div>

          {/* Music genres and vibes */}
          <div className="text-center mb-8">
            <p className="text-zinc-300 mb-4">A curated mix of:</p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {currentEvent.musicGenres.map((genre) => (
                <span
                  key={genre}
                  className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 font-semibold text-sm uppercase tracking-wider pulse-border"
                >
                  {genre}
                </span>
              ))}
            </div>
            <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
              {currentEvent.tagline}
            </p>
          </div>

          {/* Pricing breakdown */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center gradient-text">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-zinc-900/50 border border-zinc-700 rounded-xl p-6 text-center rave-glow">
                <div className="text-orange-400 font-bold text-sm uppercase tracking-wider mb-2">Early Energy</div>
                <div className="text-3xl font-bold text-white mb-2">$30</div>
                <div className="text-zinc-400 text-sm">First 100 tickets</div>
                <div className="text-xs text-zinc-500 mt-2">For the early movers</div>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-700 rounded-xl p-6 text-center rave-glow">
                <div className="text-orange-400 font-bold text-sm uppercase tracking-wider mb-2">Peak Vibes</div>
                <div className="text-3xl font-bold text-white mb-2">$40</div>
                <div className="text-zinc-400 text-sm">Next 100 tickets</div>
                <div className="text-xs text-zinc-500 mt-2">When energy builds</div>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-700 rounded-xl p-6 text-center rave-glow">
                <div className="text-orange-400 font-bold text-sm uppercase tracking-wider mb-2">Last Chance</div>
                <div className="text-3xl font-bold text-white mb-2">$50</div>
                <div className="text-zinc-400 text-sm">All remaining</div>
                <div className="text-xs text-zinc-500 mt-2">Final opportunity</div>
              </div>
            </div>
          </div>

          {/* What's included */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-center text-white">What's included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              {currentEvent.features.map((feature, index) => {
                const icons = ["✨", "🔊", "🛋️", "🍕", "💧"];
                return (
                  <div key={feature} className="flex items-center gap-3 bg-zinc-900/20 rounded-lg p-3">
                    <span className="text-xl">{icons[index] || "⚡"}</span>
                    <span className="text-zinc-300">{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Important info */}
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold mb-4 text-orange-400 uppercase tracking-wider">Important Info</h3>
            <ul className="text-sm text-zinc-300 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Age:</strong> 21+ event</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Drinks:</strong> Non-alcoholic refreshments + hydration support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Location:</strong> Exact address + arrival instructions emailed after purchase</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Check-in:</strong> QR ticket required for entry</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Vibe:</strong> Respect the room, respect the people, move with the music</span>
              </li>
            </ul>
          </div>

          {/* Tito widget */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center gradient-text">Choose Your Tickets</h2>
            <TitoWidget eventSlug={currentEvent.titoEventSlug} />
          </div>

          {/* Security & payment info */}
          <div className="text-center text-xs text-zinc-500 max-w-2xl mx-auto">
            <p className="mb-2">
              Payments are processed securely via <strong>Stripe</strong> through our ticketing partner, <strong>Tito</strong>.
            </p>
            <p className="mb-2">
              You'll receive a QR-coded ticket and the exact venue address in your confirmation email immediately after purchase.
            </p>
            <p>
              Questions? Email us or find us at the venue. This is about community, energy, and respect for electronic music culture.
            </p>
          </div>
        </div>

        {/* Background animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </section>
    </div>
  );
}
