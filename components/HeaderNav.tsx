"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

type NavItem = {
  href: string;
  label: string;
  variant?: "default" | "cta";
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/learn", label: "Learn" },
  { href: "/request-arcade", label: "Request an Arcade", variant: "cta" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function HeaderNav() {
  const pathname = usePathname() || "/";
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger button — mobile only */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative z-50 flex flex-col items-center justify-center w-10 h-10 gap-1.5 rounded-lg bg-white/10 border border-white/10 transition-all"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span
          className={
            "block w-5 h-0.5 bg-white rounded-full transition-all duration-300 " +
            (isOpen ? "rotate-45 translate-y-[4px]" : "")
          }
        />
        <span
          className={
            "block w-5 h-0.5 bg-white rounded-full transition-all duration-300 " +
            (isOpen ? "opacity-0" : "")
          }
        />
        <span
          className={
            "block w-5 h-0.5 bg-white rounded-full transition-all duration-300 " +
            (isOpen ? "-rotate-45 -translate-y-[4px]" : "")
          }
        />
      </button>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-2 lg:gap-3">
        {NAV_ITEMS.map((item) => {
          const active = isActivePath(pathname, item.href);

          if (item.variant === "cta") {
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "group relative inline-flex items-center justify-center px-5 py-2.5 text-sm lg:text-base font-bold uppercase tracking-[0.15em] " +
                  "text-black bg-white hover:bg-green-500 transition-all duration-300 rounded-full skew-x-[-12deg] " +
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                }
                aria-current={active ? "page" : undefined}
              >
                <span className="skew-x-[12deg] inline-block">{item.label}</span>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={
                "group relative inline-flex items-center justify-center rounded-full px-4 py-2 " +
                "text-sm lg:text-base font-bold uppercase tracking-[0.12em] " +
                "border transition-all duration-300 " +
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black " +
                (active
                  ? "text-white bg-white/15 border-green-400/40 shadow-[0_0_12px_rgba(74,222,128,0.15)]"
                  : "text-zinc-300 bg-white/[0.07] border-white/10 hover:text-white hover:bg-white/15 hover:border-white/20")
              }
            >
              {/* underline bar */}
              <span
                className={
                  "pointer-events-none absolute inset-x-3 bottom-1 h-px rounded-full bg-gradient-to-r from-transparent via-green-300/70 to-transparent " +
                  "transition-all duration-300 " +
                  (active
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100")
                }
              />

              {/* subtle glow on hover */}
              <span
                className={
                  "pointer-events-none absolute inset-0 rounded-full transition-opacity duration-300 blur-md " +
                  "bg-green-400/10 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                }
              />

              <span className="relative">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={
          "fixed inset-0 z-40 md:hidden transition-all duration-300 " +
          (isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none")
        }
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-lg"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu content */}
        <nav
          className={
            "relative z-10 flex flex-col items-center justify-center h-full gap-6 px-8 transition-transform duration-300 " +
            (isOpen ? "translate-y-0" : "-translate-y-8")
          }
        >
          {NAV_ITEMS.map((item) => {
            const active = isActivePath(pathname, item.href);

            if (item.variant === "cta") {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={
                    "inline-flex items-center justify-center px-8 py-4 text-lg font-bold uppercase tracking-[0.2em] " +
                    "text-black bg-white hover:bg-green-500 transition-all duration-300 rounded-full skew-x-[-12deg]"
                  }
                  aria-current={active ? "page" : undefined}
                >
                  <span className="skew-x-[12deg] inline-block">
                    {item.label}
                  </span>
                </Link>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                aria-current={active ? "page" : undefined}
                className={
                  "text-2xl font-bold uppercase tracking-[0.2em] py-3 px-6 rounded-full border transition-all duration-300 " +
                  (active
                    ? "text-white bg-white/15 border-green-400/40"
                    : "text-zinc-300 border-transparent hover:text-white hover:bg-white/10")
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
