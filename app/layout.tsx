// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Audiowide } from "next/font/google";
import { HeaderNav } from "@/components/HeaderNav";

const audiowide = Audiowide({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "PROTO7YPE | Exclusive Immersive Penthouse Afters SF",
  description:
    "San Francisco's premier immersive nightlife venue. High-fidelity audio, XR visual environments, and curated industrial energy high above the city.",
  keywords:
    "sf penthouse party, luxury afters, private rave san francisco, goth techno, industrial bass, immersive nightlife, xr experience, vip venue",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "PROTO7YPE | Exclusive Immersive Penthouse Afters",
    description:
      "Where the skyline meets the sound system. A visceral audio-visual experience high above San Francisco.",
    url: "https://proto7ype.events",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Tito widget CSS override */}
        <link rel="stylesheet" href="/tito.css" />
        {/* Preload critical fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${audiowide.className} bg-black text-white min-h-screen`}>
        <div className="min-h-screen flex flex-col grid-bg">
          {/* Header */}
          <header className="fixed top-0 left-0 right-0 z-50 w-full px-6 md:px-12 py-10 md:py-12 flex items-center justify-between transition-all duration-300">
            {/* Glassmorphism background container - separate to allow content to float effectively */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md border-b border-white/10"></div>
            
            {/* Content */}
            <div className="relative z-10 w-full flex flex-wrap items-center justify-between gap-4">
              <div className="shrink-0 font-black text-2xl sm:text-3xl md:text-4xl tracking-[0.2em] italic bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-orange-500">
                PROTO7YPE
              </div>

              <div className="w-full sm:flex-1 sm:flex sm:justify-end">
                <HeaderNav />
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="w-full px-6 py-6 text-xs text-zinc-500 border-t border-zinc-800 bg-black/50">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <span className="font-mono tracking-widest text-zinc-400">PROTO7YPE</span>
                <span className="hidden md:block text-zinc-700">·</span>
                <span>The experimental side of hackerspaces</span>
                <span className="hidden md:block text-zinc-700">·</span>
                <span>San Francisco</span>
              </div>
              <div className="text-center md:text-right">
                <div className="mb-1">Location revealed after ticket purchase</div>
                <div className="text-zinc-600">Where sound, hardware, and energy get prototyped in real time</div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
