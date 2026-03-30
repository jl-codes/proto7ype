"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <nav className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
      {NAV_ITEMS.map((item) => {
        const active = isActivePath(pathname, item.href);

        if (item.variant === "cta") {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                "group relative inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base md:text-lg font-bold uppercase tracking-[0.2em] " +
                "text-black bg-white hover:bg-orange-500 transition-all duration-300 rounded-full skew-x-[-12deg] " +
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
              "group relative inline-flex items-center justify-center rounded-full px-5 py-2.5 " +
              "text-sm sm:text-base md:text-lg font-bold uppercase tracking-[0.15em] " +
              "border transition-all duration-300 " +
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black " +
              (active
                ? "text-white bg-white/15 border-orange-400/40 shadow-[0_0_12px_rgba(251,146,60,0.15)]"
                : "text-zinc-300 bg-white/[0.07] border-white/10 hover:text-white hover:bg-white/15 hover:border-white/20")
            }
          >
            {/* underline bar */}
            <span
              className={
                "pointer-events-none absolute inset-x-3 bottom-1 h-px rounded-full bg-gradient-to-r from-transparent via-orange-300/70 to-transparent " +
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
                "bg-orange-400/10 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
              }
            />

            <span className="relative">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
