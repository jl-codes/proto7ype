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

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Inquiry",
    description: "Tell us about your space, event, or vision. We'll ask a few questions to understand what you need.",
    icon: "📋",
  },
  {
    step: "02",
    title: "Design",
    description: "We'll spec a cabinet and game lineup tailored to your space — size, controls, and game selection.",
    icon: "✏️",
  },
  {
    step: "03",
    title: "Build",
    description: "Our team assembles your cabinet with custom hardware, loaded with our open-source game library.",
    icon: "🔧",
  },
  {
    step: "04",
    title: "Deliver & Support",
    description: "We deliver, set up, and provide ongoing game updates and maintenance support.",
    icon: "🚀",
  },
];

const FAQS = [
  {
    q: "How much does it cost?",
    a: "Pricing varies based on cabinet style, game count, and whether it's a permanent install or event rental. We'll provide a detailed quote after our initial conversation.",
  },
  {
    q: "Can I choose which games are loaded?",
    a: "Absolutely. You can pick from our full open-source library, and we can even work with you to customize titles or add community mods.",
  },
  {
    q: "Do you ship outside of San Francisco?",
    a: "We primarily serve the Bay Area for hands-on delivery and setup. For locations outside the Bay, we can arrange shipping and provide remote setup support.",
  },
  {
    q: "Can I rent an arcade for a one-time event?",
    a: "Yes! We offer both permanent installations and short-term event rentals — from a single night to multi-week pop-ups.",
  },
  {
    q: "What kind of maintenance is included?",
    a: "We handle hardware issues, game updates, and software patches. For permanent installs, we offer ongoing support plans.",
  },
  {
    q: "Is the hardware open-source too?",
    a: "Our cabinet designs are documented and shared. You're welcome to build your own using our specs and load it with our games.",
  },
];

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
            Bring the <span className="text-pink-400">PROTO7YPE</span>{" "}
            experience to your space
          </p>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Custom arcade cabinets loaded with our open-source games — built for
            hackerspaces, venues, offices, events, and anywhere players gather.
          </p>
        </div>

        {/* Background animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </section>

      {/* What You Get */}
      <section className="section">
        <div className="section-wide max-w-5xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center gradient-text">
            What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🕹️",
                title: "Custom Cabinets",
                desc: "Purpose-built arcade hardware running our open-source game library. Your branding, your style.",
              },
              {
                icon: "🎮",
                title: "Curated Games",
                desc: "Multiplayer, co-op, and solo titles — all free and open-source. We'll recommend the best mix for your audience.",
              },
              {
                icon: "⚡",
                title: "Full Support",
                desc: "Setup, maintenance, and game updates handled by our team. You focus on your space — we handle the tech.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center rave-glow hover:border-pink-500/30 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — Process Timeline */}
      <section className="section">
        <div className="section-wide max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center gradient-text">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-pink-500/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-pink-500/10 border-2 border-pink-500/40 flex items-center justify-center text-pink-400 font-black text-sm">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl mb-2">{step.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built For Section */}
      <section className="section">
        <div className="section-wide max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center gradient-text">
            Built For
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "🏢", label: "Offices & Lounges" },
              { icon: "🍺", label: "Bars & Restaurants" },
              { icon: "🔧", label: "Hackerspaces" },
              { icon: "🎉", label: "Events & Festivals" },
              { icon: "🎓", label: "Schools & Libraries" },
              { icon: "🏠", label: "Private Collections" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-5 text-center hover:border-pink-500/30 transition-colors"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-zinc-300 text-sm font-semibold">
                  {item.label}
                </p>
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
                href="mailto:hello@proto7ype.events"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                hello@proto7ype.events
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="section-wide max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center gradient-text">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-pink-500/20 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
