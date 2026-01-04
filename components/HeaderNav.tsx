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
  { href: "/tickets", label: "Tickets", variant: "cta" },
  { href: "/vibe-xr-101", label: "Vibe XR 101" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function HeaderNav() {
  const pathname = usePathname() || "/";

  return (
    <nav className="flex flex-wrap items-center justify-end gap-12 sm:gap-16 md:gap-20">
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
              <span className="skew-x-[12deg] inline-block">Tickets</span>
            </Link>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={
              "group relative inline-flex items-center justify-center rounded-full px-5 py-3 " +
              "text-sm sm:text-base md:text-lg font-bold uppercase tracking-[0.2em] " +
              "transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black " +
              (active
                ? "text-white bg-white/8"
                : "text-zinc-200 hover:text-white hover:bg-white/6")
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
