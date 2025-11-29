"use client";

import { useEffect } from "react";

type TitoWidgetProps = {
  eventSlug: string; // "<account>/<event>"
};

export default function TitoWidget({ eventSlug }: TitoWidgetProps) {
  useEffect(() => {
    const scriptId = "tito-inline-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src =
        "https://js.tito.io/v2/with/inline/without/widget-css";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="mt-8">
      <div className="rave-glow rounded-2xl border border-zinc-800 p-1">
        {/* Tito widget element. The script will enhance this. */}
        {/* @ts-ignore - tito-widget is a custom element from Tito's script */}
        <tito-widget event={eventSlug}></tito-widget>
      </div>
      
      {/* Loading placeholder while Tito loads */}
      <div className="loading-pulse text-center text-zinc-500 text-sm mt-4">
        Loading secure checkout...
      </div>
    </div>
  );
}
