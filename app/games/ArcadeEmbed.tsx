// app/games/ArcadeEmbed.tsx
"use client";

import { useCallback, useRef } from "react";

/**
 * Full-viewport iframe embedding the proto7ype-arcade game selection menu.
 *
 * The arcade is served as a static site from `public/arcade/` (git submodule).
 * The iframe fills all available space below the fixed site header and
 * forwards keyboard + gamepad input so games are fully playable in-browser.
 */
export default function ArcadeEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  /** Focus the iframe on click so keyboard/gamepad events reach the games. */
  const handleClick = useCallback(() => {
    iframeRef.current?.focus();
  }, []);

  return (
    <div
      className="relative w-full flex-1"
      style={{
        /*
         * Fill the viewport below the fixed header.
         * The header is ~5.5rem on mobile, ~6.5rem on desktop (py-10/py-12 + text).
         * Using a CSS custom-property-style calc keeps it in one place to tweak.
         * 100dvh accounts for mobile browser chrome.
         */
        height: "calc(100dvh - 5.5rem)",
        minHeight: 0,
      }}
      onClick={handleClick}
    >
      <iframe
        ref={iframeRef}
        src="/arcade/index.html"
        title="PROTO7YPE Arcade — Game Selection"
        className="absolute inset-0 w-full h-full border-0 bg-black"
        allow="gamepad; keyboard-map; autoplay; fullscreen"
        tabIndex={0}
      />
    </div>
  );
}
