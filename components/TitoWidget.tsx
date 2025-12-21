"use client";

import { useEffect, useState, useRef } from "react";

type TitoWidgetProps = {
  eventSlug: string; // "<account>/<event>"
};

export default function TitoWidget({ eventSlug }: TitoWidgetProps) {
  const [isLoading, setIsLoading] = useState(true);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Function to apply horizontal layout styles (desktop only)
  const applyHorizontalLayout = () => {
    // Let CSS control mobile layout entirely
    if (
      typeof window !== "undefined" &&
      (window.innerWidth < 768 || window.matchMedia?.("(max-width: 768px)").matches)
    ) {
      return;
    }

    if (!widgetRef.current) {
      console.log("❌ No widget ref");
      return;
    }

    console.log('🔍 Searching for Tito elements...');
    console.log('Widget container:', widgetRef.current);

    // Log all elements in the widget
    const allElements = widgetRef.current.querySelectorAll('*');
    console.log(`📊 Total elements found: ${allElements.length}`);

    // Try multiple selector strategies
    const selectors = [
      '[class*="ticket"]',
      '[class*="release"]',
      '[class*="tito"]',
      'div[class]',
      '.tito-ticket-type',
      '.tito-ticket',
      '.tito-release'
    ];

    selectors.forEach(selector => {
      const elements = widgetRef.current?.querySelectorAll(selector);
      if (elements && elements.length > 0) {
        console.log(`✅ Found ${elements.length} elements with selector: ${selector}`);
        elements.forEach((el, i) => {
          console.log(`  Element ${i}:`, el.className, el);
        });
      }
    });

    // Find all ticket/release elements (Tito uses "release" terminology)
    const ticketTypes = widgetRef.current.querySelectorAll('[class*="release"], [class*="ticket"]');
    
    console.log(`🎫 Applying styles to ${ticketTypes.length} ticket elements`);
    
    ticketTypes.forEach((ticket, index) => {
      const element = ticket as HTMLElement;
      console.log(`Styling ticket ${index}:`, element.className);
      
      // Apply flexbox layout
      element.style.display = 'flex';
      element.style.flexDirection = 'row';
      element.style.alignItems = 'center';
      element.style.justifyContent = 'space-between';
      element.style.gap = '1.5rem';
      element.style.flexWrap = 'nowrap';
      element.style.padding = '1.25rem 1.5rem';
      element.style.marginBottom = '1rem';
      
      // Style child elements
      const children = Array.from(element.children) as HTMLElement[];
      console.log(`  Children count: ${children.length}`);
      
      children.forEach((child, childIndex) => {
        console.log(`    Child ${childIndex}:`, child.className);
        if (childIndex === 0) {
          // First child (ticket name) - make it flex
          child.style.flex = '1';
          child.style.minWidth = '150px';
        } else {
          // Other children (price, quantity) - keep them from shrinking
          child.style.flexShrink = '0';
          child.style.display = 'flex';
          child.style.alignItems = 'center';
          child.style.gap = '1rem';
        }
      });
    });
    
    console.log('✨ Horizontal layout applied!');
  };

  useEffect(() => {
    const scriptId = "tito-inline-script";
    const cssId = "tito-custom-css";

    // Load custom CSS with cache-busting
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `/tito.css?v=${Date.now()}`;
      link.id = cssId;
      document.head.appendChild(link);
    }

    // Load Tito script with development mode
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src =
        "https://js.tito.io/v2/with/inline,development_mode/without/widget-css";
      script.async = true;
      script.id = scriptId;
      script.onload = () => {
        // Give the widget a moment to render, then apply styles
        setTimeout(() => {
          applyHorizontalLayout();
          setIsLoading(false);
        }, 1500);
      };
      document.body.appendChild(script);
    } else {
      setTimeout(() => {
        applyHorizontalLayout();
        setIsLoading(false);
      }, 500);
    }

    // Watch for DOM changes and re-apply styles
    const observer = new MutationObserver(() => {
      applyHorizontalLayout();
    });

    if (widgetRef.current) {
      observer.observe(widgetRef.current, {
        childList: true,
        subtree: true,
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-8 relative" ref={widgetRef}>
      {/* Enhanced wrapper with better styling */}
      <div className="bg-zinc-900/50 rounded-2xl border-2 border-zinc-800 p-6 backdrop-blur-sm shadow-2xl">
        {/* Tito widget element */}
        {/* @ts-expect-error - tito-widget is a custom element from Tito's script */}
        <tito-widget event={eventSlug}></tito-widget>
      </div>
      
      {/* Improved loading state */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/80 rounded-2xl backdrop-blur-sm">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-zinc-700 border-t-orange-500 mb-4"></div>
            <p className="text-zinc-400 text-sm font-semibold tracking-wider">Loading tickets...</p>
          </div>
        </div>
      )}
    </div>
  );
}
