// app/vibe-xr-101/page.tsx
import Image from "next/image";
import { vibeXR101Event } from "../../config/events";
import TitoWidget from "../../components/TitoWidget";

export const metadata = {
  title: "Vibe XR 101 - AI-Native Game & XR Development Course | PROTO7YPE",
  description:
    "10-class build-first course series on AI-native creative pipelines. Learn Unreal Engine 5, Blender, ThreeJS, and more with Cline as your copilot. Workshops in San Francisco.",
  keywords:
    "vibe xr 101, ai game development, unreal engine 5 course, blender course, threejs course, webxr, 3d printing, cline ai, ai-native development, san francisco workshops, proto7ype",
};

export default function VibeXR101Page() {
  const jsonLdEvent = {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    name: "Vibe XR 101 - AI-Native Game, XR, and Worldbuilding",
    description:
      "10-class build-first course series focused on AI-native creative pipelines with Cline, Unreal Engine 5, Blender, ThreeJS, and Open 3D Models.",
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
      name: "PROTO7YPE / Frontier Makerspace",
      url: "https://proto7ype.com",
    },
    url: "https://proto7ype.com/vibe-xr-101",
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEvent) }}
      />

      {/* Hero Section */}
      <section className="section relative overflow-hidden pt-32">
        <div className="section-wide max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-7xl font-bold mb-5 strobe-text leading-tight">
              <span className="gradient-text">Vibe XR 101</span>
            </h1>
            <p className="text-xl lg:text-3xl text-zinc-200 mb-8 font-semibold max-w-4xl mx-auto leading-relaxed">
              AI-Native Game, XR, and Worldbuilding
            </p>

            {/* Hero Image */}
            <div className="mx-auto mb-8 max-w-2xl overflow-hidden rounded-3xl border-2 border-pink-500/30 shadow-[0_0_80px_rgba(236,72,153,0.25)]">
              <Image
                src={vibeXR101Event.heroImage}
                alt="Vibe XR 101 Workshop Series"
                width={800}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>

            <p className="text-lg lg:text-xl text-zinc-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              with <span className="text-pink-400 font-bold">Cline</span>,{" "}
              <span className="text-pink-400 font-bold">Unreal Engine 5</span>,{" "}
              <span className="text-pink-400 font-bold">Blender</span>,{" "}
              <span className="text-pink-400 font-bold">ThreeJS</span>, and{" "}
              <span className="text-pink-400 font-bold">Open 3D Models</span>
            </p>

            <a
              href="#classes"
              className="button-primary inline-block text-base lg:text-lg px-10 py-4 shadow-2xl hover:shadow-pink-500/50"
            >
              View Classes & Register
            </a>
          </div>
        </div>

        {/* Background animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: "2s"}}></div>
        </div>
      </section>

      {/* What Is Vibe XR 101 */}
      <section className="section">
        <div className="section-wide max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center gradient-text">What Is Vibe XR 101?</h2>
          <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
            <p>
              <span className="text-white font-bold">Vibe XR 101</span> is a{" "}
              <span className="text-pink-400 font-semibold">10-class, build-first course series</span> focused on{" "}
              <span className="text-pink-400 font-semibold">AI-native creative pipelines</span>, where Cline acts as a{" "}
              <span className="text-pink-400 font-semibold">continuous copilot</span> across:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-pink-500 text-xl flex-shrink-0">•</span>
                <span>Video games</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 text-xl flex-shrink-0">•</span>
                <span>XR (AR / VR / MR)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 text-xl flex-shrink-0">•</span>
                <span>Interactive simulations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 text-xl flex-shrink-0">•</span>
                <span>Web-based 3D experiences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 text-xl flex-shrink-0">•</span>
                <span>Physical outputs (3D printing)</span>
              </li>
            </ul>
            <p className="text-pink-300 font-semibold italic pt-4">
              This is not a slide-only course. This is <span className="text-white">worldbuilding with intent</span>, 
              where AI assists thinking, exploration, iteration, and integration — not just generation.
            </p>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="section">
        <div className="section-wide max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center gradient-text">Core Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "AI should accelerate creative intent, not replace it",
              "A copilot is most useful when it understands context",
              "Toolchains should be composable, inspectable, and hackable",
              "Builders learn fastest by shipping small, real things",
              "Modern 3D workflows converge across games, XR, web, and fabrication"
            ].map((principle, index) => (
              <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 rave-glow">
                <p className="text-zinc-300 text-lg">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="section">
        <div className="section-wide max-w-5xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center gradient-text">Your Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tony Loehr */}
            <div className="bg-zinc-900/50 border border-pink-500/30 rounded-2xl p-8 rave-glow">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold text-pink-400 mb-2">Tony Loehr</h3>
              <p className="text-sm uppercase tracking-wider text-pink-300 mb-4 font-semibold">
                Unreal Engine + Cline Track
              </p>
              <ul className="text-zinc-300 space-y-2 text-sm">
                <li>• Unreal Engine 5 SME</li>
                <li>• Cline DevRel</li>
                <li>• AI-assisted simulation & XR builder</li>
                <li>• Focus: engines, systems, AI reasoning</li>
              </ul>
            </div>

            {/* Rayyan Zahid */}
            <div className="bg-zinc-900/50 border border-blue-500/30 rounded-2xl p-8 rave-glow">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Rayyan Zahid</h3>
              <p className="text-sm uppercase tracking-wider text-blue-300 mb-4 font-semibold">
                ThreeJS + Asset Creation Track
              </p>
              <ul className="text-zinc-300 space-y-2 text-sm">
                <li>• Hunyuan 3D & Blender SME</li>
                <li>• Sandbox VR contributor</li>
                <li>• Simulation Annex</li>
                <li>• Focus: asset generation, spatial & web 3D</li>
              </ul>
            </div>

            {/* Izn Tariq */}
            <div className="bg-zinc-900/50 border border-purple-500/30 rounded-2xl p-8 rave-glow">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-2">Izn Tariq</h3>
              <p className="text-sm uppercase tracking-wider text-purple-300 mb-4 font-semibold">
                3D Printing + Integration Track
              </p>
              <ul className="text-zinc-300 space-y-2 text-sm">
                <li>• Physical fabrication expert</li>
                <li>• Digital-to-physical workflows</li>
                <li>• STL prep, slicing, tolerances</li>
                <li>• Focus: AI → mesh → real object</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Tooling Stack */}
      <section className="section">
        <div className="section-wide max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center gradient-text">Core Tooling Stack</h2>
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-zinc-300">
              {[
                { name: "Cline", desc: "AI copilot via CLI + MCP Servers" },
                { name: "Hunyuan 3D", desc: "Text/Image → 3D generation" },
                { name: "Blender", desc: "Asset cleanup, refinement, animation" },
                { name: "Blender MCP", desc: "AI-driven geometry creation" },
                { name: "Unreal Engine 5", desc: "Real-time engine for games & XR" },
                { name: "Unreal MCP", desc: "AI inspection & modification" },
                { name: "ThreeJS", desc: "Web-based 3D & XR deployment" },
                { name: "WebXR", desc: "Browser-native immersive experiences" },
                { name: "3D Printing", desc: "STL prep, slicing, physical output" },
              ].map((tool, index) => (
                <div key={index} className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700">
                  <div className="font-bold text-pink-400 mb-1">{tool.name}</div>
                  <div className="text-sm text-zinc-400">{tool.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="section">
        <div className="section-wide max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center gradient-text">Course Structure</h2>
          <div className="space-y-6 text-zinc-300 text-lg">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-3">📚 Classes 1–4: Shared Foundation</h3>
              <p>Everyone learns together — fundamentals of AI-native 3D pipelines</p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-3">🎯 Classes 5–9: Choose Your Track</h3>
              <p>
                <span className="font-semibold">Track A:</span> Unreal Engine + Cline<br/>
                <span className="font-semibold">Track B:</span> ThreeJS + WebXR<br/>
                <span className="font-semibold">Track C:</span> 3D Printing + Physical Output
              </p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-3">🚀 Class 10: Capstone & Demo Night</h3>
              <p>All tracks converge — build & demo your portfolio-worthy project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Class Details */}
      <section className="section">
        <div className="section-wide max-w-5xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center gradient-text">Course Curriculum</h2>

          {/* Shared Core Classes */}
          <div className="mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-pink-400 mb-8 text-center">Shared Core (Classes 1-4)</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {/* Class 1 */}
              <div className="bg-zinc-900/30 border-2 border-pink-500/30 rounded-2xl p-6 shadow-xl hover:border-pink-500/50 transition-colors">
                <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      Class 1 — Vibe Coding & AI-Native Worldbuilding
                    </h4>
                    <p className="text-pink-400 font-semibold">Foundations</p>
                  </div>
                  <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">All Instructors</div>
                </div>
                <ul className="text-zinc-300 space-y-1.5 mb-4 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-0.5">•</span>
                    <span>What "Vibe Coding" actually means</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-0.5">•</span>
                    <span>How AI reasons about projects, not just prompts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-0.5">•</span>
                    <span>Intro to Cline CLI & MCP Servers</span>
                  </li>
                </ul>
                <p className="text-xs text-zinc-400 italic">
                  <span className="font-semibold text-pink-400">Outcome:</span> Build something immediately
                </p>
              </div>

              {/* Class 2 */}
              <div className="bg-zinc-900/30 border-2 border-blue-500/30 rounded-2xl p-6 shadow-xl hover:border-blue-500/50 transition-colors">
                <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      Class 2 — Hunyuan 3D: Text & Image → Geometry
                    </h4>
                    <p className="text-blue-400 font-semibold">Asset Genesis</p>
                  </div>
                  <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">Led by Rayyan</div>
                </div>
                <ul className="text-zinc-300 space-y-1.5 mb-4 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>How Hunyuan works (and its limits)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Prompting for usable geometry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Image → 3D workflows</span>
                  </li>
                </ul>
                <p className="text-xs text-zinc-400 italic">
                  <span className="font-semibold text-blue-400">Outcome:</span> Generated assets ready for refinement
                </p>
              </div>

              {/* Class 3 */}
              <div className="bg-zinc-900/30 border-2 border-purple-500/30 rounded-2xl p-6 shadow-xl hover:border-purple-500/50 transition-colors">
                <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      Class 3 — Blender Fundamentals
                    </h4>
                    <p className="text-purple-400 font-semibold">Making Assets Real</p>
                  </div>
                  <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">Led by Rayyan</div>
                </div>
                <ul className="text-zinc-300 space-y-1.5 mb-4 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <span>Cleaning AI-generated meshes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <span>Scale, normals, topology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <span>Materials & UVs for production</span>
                  </li>
                </ul>
                <p className="text-xs text-zinc-400 italic">
                  <span className="font-semibold text-purple-400">Outcome:</span> Clean, production-ready assets
                </p>
              </div>

              {/* Class 4 */}
              <div className="bg-zinc-900/30 border-2 border-pink-500/30 rounded-2xl p-6 shadow-xl hover:border-pink-500/50 transition-colors">
                <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      Class 4 — Blender MCP: AI-Assisted Modeling
                    </h4>
                    <p className="text-pink-400 font-semibold">Geometry at the Speed of Thought</p>
                  </div>
                  <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">Rayyan + Tony</div>
                </div>
                <ul className="text-zinc-300 space-y-1.5 mb-4 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-0.5">•</span>
                    <span>Prompt-driven geometry inside Blender</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-0.5">•</span>
                    <span>Rapid iteration loops with AI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-0.5">•</span>
                    <span>Knowing when not to use AI</span>
                  </li>
                </ul>
                <p className="text-xs text-zinc-400 italic">
                  <span className="font-semibold text-pink-400">Outcome:</span> Faster, expressive asset creation
                </p>
              </div>
            </div>
          </div>

          {/* Track Classes (Coming Soon) */}
          <div className="mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-blue-400 mb-8 text-center">Parallel Tracks (Classes 5-9)</h3>
            <div className="bg-amber-950/30 border-2 border-amber-600/50 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🔜</div>
              <h4 className="text-2xl font-bold text-amber-400 mb-4">Coming Soon</h4>
              <p className="text-zinc-300 text-lg mb-4">
                Choose your path: <span className="font-semibold">Unreal Engine + Cline</span>,{" "}
                <span className="font-semibold">ThreeJS + WebXR</span>, or{" "}
                <span className="font-semibold">3D Printing + Physical Output</span>
              </p>
              <p className="text-zinc-400">
                Registration for Classes 5-9 will open soon. Star the{" "}
                <a
                  href="https://github.com/Frontier-Makerspace/Vibe-XR-101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 underline"
                >
                  GitHub repo
                </a>{" "}
                for updates.
              </p>
            </div>
          </div>

          {/* Capstone (Coming Soon) */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-purple-400 mb-8 text-center">Capstone (Class 10)</h3>
            <div className="bg-amber-950/30 border-2 border-amber-600/50 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-2xl font-bold text-amber-400 mb-4">Build & Demo Night</h4>
              <p className="text-zinc-300 text-lg mb-4">
                All tracks converge for an open build session, live demos, and feedback.
              </p>
              <p className="text-zinc-400">Registration coming soon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="classes" className="section scroll-mt-24">
        <div className="section-wide max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center gradient-text">Register for Classes</h2>
          
          <div className="mb-8 text-center">
            <p className="text-zinc-300 text-lg mb-4">
              Select from Classes 1-4 below. All classes include hands-on building, 
              instructor guidance, and access to PROTO7YPE during the event.
            </p>
            <p className="text-zinc-400 text-sm">
              Dates, times, and pricing are displayed in the ticket selector below.
            </p>
          </div>

          <TitoWidget eventSlug={vibeXR101Event.titoEventSlug} />

          {/* Payment info */}
          <div className="text-center text-sm text-zinc-500 mt-6 max-w-2xl mx-auto">
            <p className="mb-2">
              Payments are processed securely via <strong>Stripe</strong> through our ticketing partner, <strong>Tito</strong>.
            </p>
            <p>
              You&apos;ll receive a QR-coded ticket and venue details in your confirmation email.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Walk Away With */}
      <section className="section">
        <div className="section-wide max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center gradient-text">What You&apos;ll Walk Away With</h2>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <ul className="space-y-4 text-zinc-300 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-pink-500 text-xl flex-shrink-0">✓</span>
                <span>Understand modern AI-native 3D pipelines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 text-xl flex-shrink-0">✓</span>
                <span>Know how to use Cline as a creative copilot, not a crutch</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 text-xl flex-shrink-0">✓</span>
                <span>Be fluent moving between AI, geometry, engines, web, and hardware</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 text-xl flex-shrink-0">✓</span>
                <span>Build interactive and physical worlds</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 text-xl flex-shrink-0">✓</span>
                <span>Have a foundation for games, XR, web, or fabrication</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 text-xl flex-shrink-0">✓</span>
                <span className="font-bold text-white">A portfolio-worthy digital or physical project</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="section">
        <div className="section-wide max-w-4xl">
          <div className="text-center bg-zinc-900/30 border border-zinc-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Questions?</h3>
            <p className="text-zinc-300 mb-4">
              We&apos;re here to help. Reach out with any questions about Vibe XR 101, the course structure, or registration.
            </p>
            <a 
              href="mailto:hello@proto7ype.com" 
              className="text-pink-400 hover:text-pink-300 font-semibold text-lg transition-colors"
            >
              hello@proto7ype.com
            </a>
            <div className="mt-6 pt-6 border-t border-zinc-800">
              <p className="text-zinc-400 text-sm mb-2">
                <span className="text-white font-bold">PROTO7YPE / Frontier Makerspace</span>
              </p>
              <p className="text-zinc-500 text-sm">
                No spectators. Only builders.
              </p>
              <div className="mt-4">
                <a
                  href="https://github.com/Frontier-Makerspace/Vibe-XR-101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-semibold transition-colors"
                >
                  ⭐ Star on GitHub for Updates
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
