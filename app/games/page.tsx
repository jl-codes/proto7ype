// app/games/page.tsx
import Image from "next/image";
import { gamesNightEvent } from "../../config/events";
import TitoWidget from "../../components/TitoWidget";

export const metadata = {
  title: "Poker Tournament Night in San Francisco | PROTO7YPE",
  description:
    "Join PROTO7YPE for Sunday poker tournaments in San Francisco. Hosted tournament-style play (games of skill) with a $40 ticket, smooth check-in, and a strict no-wagering policy.",
  keywords:
    "poker tournament san francisco, sunday poker tournament, poker night sf, hosted poker tournament, private poker event, games of skill poker, PROTO7YPE poker",
};

export default function GamesPage() {
  const jsonLdEvent = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Poker Tournament Night at PROTO7YPE",
    description:
      "Sunday poker tournaments in San Francisco. Hosted tournament-style play (games of skill) with a strict no-wagering policy.",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "PROTO7YPE",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "PROTO7YPE",
      url: "https://proto7ype.com",
    },
    offers: {
      "@type": "Offer",
      price: "40",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://proto7ype.com/games",
      category: "primary",
    },
    url: "https://proto7ype.com/games",
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What's your refund policy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Refunds are available up to 24 hours before the event start time. After that, tickets may be transferred to a future date at our discretion. If PROTO7YPE cancels an event, you'll receive a full refund or transfer option.",
        },
      },
      {
        "@type": "Question",
        name: "How does check-in work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Check-in is handled via your QR code at the door. You may be asked to show ID depending on the event.",
        },
      },
      {
        "@type": "Question",
        name: "What should I bring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bring your QR ticket (on phone or printed) and a valid ID. Everything else is provided for an enjoyable evening of games and community.",
        },
      },
      {
        "@type": "Question",
        name: "Age requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Games Night is typically 21+ (ID required). Check your specific event details for any variations.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEvent) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      {/* Hero Section */}
      <section className="section relative overflow-hidden pt-32">
        <div className="section-wide max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-7xl font-bold mb-6 strobe-text leading-tight">
              <span className="gradient-text">Poker Tournament Night at PROTO7YPE</span>
            </h1>
            <p className="text-xl lg:text-3xl text-zinc-300 mb-8 font-semibold">
              Sunday poker tournaments • Games of skill • San Francisco
            </p>

            <div className="mx-auto mb-5 max-w-xl">
              <div className="relative mx-auto w-full overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl max-h-[260px] sm:max-h-[320px] lg:max-h-[380px]">
                <Image
                  src="/images/PROTO7YPE-Poker-Sunday-Game-Night.webp"
                  alt="Poker tournament night at PROTO7YPE in San Francisco"
                  width={1024}
                  height={1024}
                  priority
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <p className="text-lg lg:text-xl text-zinc-400 mb-6 max-w-2xl mx-auto leading-relaxed">
              Join us every <span className="text-pink-400 font-bold">Sunday at 7:00 PM</span> for hosted tournament-style poker in a private, entertainment-focused setting.
            </p>
            <p className="text-base lg:text-lg text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Tickets are <span className="text-pink-400 font-bold">$40</span>.
            </p>
            <a 
              href="#checkout" 
              className="button-primary inline-block text-base lg:text-lg px-10 py-4 shadow-2xl hover:shadow-pink-500/50"
            >
              Get Tickets ($40)
            </a>
          </div>
        </div>

        {/* Enhanced background animation with card suit motifs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: "2s"}}></div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="section">
        <div className="section-wide max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gamesNightEvent.features.map((feature, index) => {
              const icons = ["🎯", "♠️", "🤝", "✨"];
              return (
                <div key={feature} className="flex items-start gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 rave-glow">
                  <span className="text-3xl flex-shrink-0">{icons[index] || "⚡"}</span>
                  <span className="text-zinc-300 text-lg">{feature}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Block - MUST appear above checkout */}
      <section className="section">
        <div className="section-wide max-w-4xl">
          <div className="bg-amber-950/30 border-2 border-amber-600/50 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            {/* Subtle pulsing background */}
            <div className="absolute inset-0 bg-amber-500/5 animate-pulse pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-amber-400 uppercase tracking-wider flex items-center gap-3">
                <span className="text-3xl lg:text-4xl animate-pulse">⚠️</span>
                No-Wagering Policy
              </h2>
              <div className="text-zinc-100 space-y-4 text-base lg:text-lg leading-relaxed">
                <p className="font-bold text-amber-200">
                  No cash wagering. No rake. No buy-ins.
                </p>
                <p>
                  PROTO7YPE Games Nights are private, entertainment-focused events featuring games of skill. 
                  Tournament chips have no cash value. Side bets or private stakes are not permitted.
                </p>
                <p>
                  Any prizes (if offered) are fixed in advance and provided independently of attendance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Section */}
      <section id="checkout" className="section scroll-mt-24">
        <div className="section-wide max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Get Tickets</h2>
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 mb-6">
            <div className="text-center mb-6">
              <div className="text-2xl font-bold text-white mb-2">{gamesNightEvent.date}</div>
              <div className="text-pink-400 font-semibold text-xl">{gamesNightEvent.time}</div>
              <div className="text-zinc-400 mt-2">PROTO7YPE · San Francisco, CA</div>
              <div className="text-xs text-zinc-500 mt-1">Exact address revealed via email after purchase</div>
            </div>
          </div>
          <TitoWidget eventSlug={gamesNightEvent.titoEventSlug} />
          
          {/* Payment info */}
          <div className="text-center text-sm text-zinc-500 mt-6 max-w-2xl mx-auto">
            <p className="mb-2">
              Payments are processed securely via <strong>Stripe</strong> through our ticketing partner, <strong>Tito</strong>.
            </p>
            <p>
              You&apos;ll receive a QR-coded membership ticket and venue details in your confirmation email.
            </p>
          </div>
        </div>
      </section>

      {/* House Rules Section */}
      <section className="section">
        <div className="section-wide max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">House Rules</h2>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <ul className="space-y-4 text-zinc-300">
              <li className="flex items-start gap-3">
                <span className="text-pink-500 text-xl flex-shrink-0">•</span>
                <span className="text-lg">No side bets or private stakes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 text-xl flex-shrink-0">•</span>
                <span className="text-lg">No cash on tables</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 text-xl flex-shrink-0">•</span>
                <span className="text-lg">Respect-first environment — harassment or unsafe behavior results in removal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 text-xl flex-shrink-0">•</span>
                <span className="text-lg">House may refuse service or remove participants at any time</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="section-wide max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {/* Refund Policy */}
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-3">What&apos;s your refund policy?</h3>
              <ul className="text-zinc-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span>Refunds available up to 24 hours before the event start time.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span>After that, tickets may be transferred to a future date at our discretion.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span>If PROTO7YPE cancels an event, you&apos;ll receive a full refund or transfer option.</span>
                </li>
              </ul>
            </div>

            {/* Check-in */}
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-3">How does check-in work?</h3>
              <ul className="text-zinc-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span>Check-in is handled via your QR code at the door.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span>You may be asked to show ID depending on the event.</span>
                </li>
              </ul>
            </div>

            {/* What to Bring */}
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-3">What should I bring?</h3>
              <p className="text-zinc-300">
                Just bring yourself, your QR ticket (on phone or printed), and a valid ID. 
                Everything else is provided for an enjoyable evening of games and community.
              </p>
            </div>

            {/* Age & ID */}
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-3">Age requirements?</h3>
              <p className="text-zinc-300">
                Games Night is typically 21+ (ID required). Check your specific event details for any variations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="section">
        <div className="section-wide max-w-4xl">
          <div className="text-center bg-zinc-900/30 border border-zinc-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Questions?</h3>
            <p className="text-zinc-300 mb-4">
              We&apos;re here to help. Reach out with any questions about Games Night, membership, or the venue.
            </p>
            <a 
              href="mailto:hello@proto7ype.com" 
              className="text-pink-400 hover:text-pink-300 font-semibold text-lg transition-colors"
            >
              hello@proto7ype.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
