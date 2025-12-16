// app/page.tsx
import HeroSection from "../components/HeroSection";
import VideoSection from "../components/VideoSection";

export default function HomePage() {
  return (
    <>
      {/* Hero section with that sick neon space photo */}
      <HeroSection />

      {/* Instagram video as the centerpiece - "You good bro?" energy */}
      <VideoSection />

      {/* Simple final CTA */}
      <section className="section bg-zinc-900/20 border-t border-zinc-800">
        <div className="section-wide text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 strobe-text">
              <span className="gradient-text">A GLITCH IN THE SIMULATION</span>
            </h2>
            <p className="text-xl text-zinc-300 mb-10 leading-relaxed font-light">
              This isn&apos;t a tech demo. It&apos;s an audiovisual override. <br/>
              State-of-the-art XR projection mapping. Reactive visual environments. High-fidelity industrial sound. <br/>
              <span className="text-orange-400 font-medium block mt-4">We are redefining the San Francisco underground.</span>
            </p>
            
            <div className="space-y-8">
              <a href="/tickets" className="button-primary inline-block text-lg px-12 py-5 font-bold tracking-widest hover:scale-105 transition-transform duration-200">
                GET ON THE LIST
              </a>
              
              <div className="flex flex-col md:flex-row justify-center gap-8 mt-12 text-sm text-zinc-400">
               <div className="flex items-center gap-3 justify-center">
                  <span className="text-orange-500 text-xl">⚠️</span>
                  <span>RESPECT THE SPACE</span>
               </div>
               <div className="flex items-center gap-3 justify-center">
                  <span className="text-orange-500 text-xl">📍</span>
                  <span>SECRET DOWNTOWN LOCATION</span>
               </div>
               <div className="flex items-center gap-3 justify-center">
                  <span className="text-orange-500 text-xl">🚫</span>
                  <span> STRICT NO PHOTOS POLICY</span>
               </div>
              </div>

              <p className="text-xs text-zinc-600 uppercase tracking-widest max-w-lg mx-auto mt-8 opacity-60">
                21+ • ID REQUIRED • GOOD VIBES MANDATORY
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
