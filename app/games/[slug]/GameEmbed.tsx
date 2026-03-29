// app/games/[slug]/GameEmbed.tsx
"use client";

import { useCallback, useRef } from "react";

/**
 * Full-viewport iframe embedding a single proto7ype-arcade game.
 * Fills all available space between the top bar and bottom banner.
 * Click-to-focus forwards keyboard + gamepad input to the game.
 */
export default function GameEmbed({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleClick = useCallback(() => {
    iframeRef.current?.focus();
  }, []);

  return (
    <div
      className="relative flex-1 w-full bg-black"
      style={{ minHeight: "60vh" }}
      onClick={handleClick}
    >
      <iframe
        ref={iframeRef}
        src={src}
        title={`${title} — PROTO7YPE Arcade`}
        className="absolute inset-0 w-full h-full border-0 bg-black"
        allow="gamepad; keyboard-map; autoplay; fullscreen"
        tabIndex={0}
      />
    </div>
  );
}
