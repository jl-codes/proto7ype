// app/request-arcade/page.tsx
import type { Metadata } from "next";
import RequestArcadeForm from "./RequestArcadeForm";

export const metadata: Metadata = {
  title: "Request an Arcade | PROTO7YPE",
  description:
    "Bring a PROTO7YPE arcade cabinet to your venue, event, or hackerspace. Custom open-source arcade installations built by an indie game studio collective.",
  keywords:
    "request arcade cabinet, custom arcade installation, indie arcade rental, arcade for events, arcade for venues, hackerspace arcade, proto7ype arcade, open source arcade",
  openGraph: {
    title: "Request an Arcade | PROTO7YPE",
    description:
      "Bring a PROTO7YPE arcade to your space. Custom open-source arcade installations for venues, events, and hackerspaces.",
    url: "https://proto7ype.events/request-arcade",
    type: "website",
  },
};

export default function RequestArcadePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section relative overflow-hidden pt-32 pb-16">
        <div className="section-wide max-w-4xl text-center">
          <h1 className="text-4xl lg:text-7xl font-bold mb-5 strobe-text leading-tight">
            <span className="gradient-text">Request an Arcade</span>
          </h1>
          <p className="text-xl lg:text-2xl text-zinc-200 mb-4 font-semibold max-w-3xl mx-auto leading-relaxed">
            Bring the <span className="text-pink-400">PROTO7YPE</span> experience to your space
          </p>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Custom arcade cabinets loaded with our open-source games — built for
            hackerspaces, venues, offices, events, and anywhere players gather.
          </p>
        </div>

        {/* Background animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>
      </section>

      {/* What We Offer */}
      <section className="section">
        <div className="section-wide max-w-5xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center gradient-text">
            What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🕹️", title: "Custom Cabinets", desc: "Purpose-built arcade hardware running our open-source game library" },
              { icon: "🎮", title: "Curated Games", desc: "Multiplayer, co-op, and solo titles — all free and open-source" },
              { icon: "⚡", title: "Full Support", desc: "Setup, maintenance, and game updates handled by our team" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center rave-glow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section">
        <div className="section-wide max-w-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center gradient-text">
            Tell Us About Your Space
          </h2>
          <p className="text-zinc-400 text-center mb-10">
            Fill out the form below and we&apos;ll get back to you with options
            and pricing.
          </p>

          <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 md:p-10">
            <RequestArcadeForm />
          </div>

          {/* Direct contact fallback */}
          <div className="text-center mt-8 text-sm text-zinc-500">
            <p>
              Prefer email?{" "}
              <a
                href="mailto:hello@proto7ype.com"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                hello@proto7ype.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
