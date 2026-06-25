"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/content";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Guarantees", href: "#guarantees" },
  { label: "Contact", href: "#contact" },
];

export function MaddyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-maddy-brown/10 bg-maddy-cream/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="#top"
          className="font-maddy-display text-lg font-semibold tracking-wide text-maddy-brown md:text-xl"
        >
          {site.name}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-maddy-brown/70 transition-colors hover:text-maddy-brown"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contact"
              className="rounded-full border border-maddy-brown/30 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-maddy-brown transition-colors hover:bg-maddy-brown hover:text-maddy-cream"
            >
              Get in Touch
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-maddy-brown md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-maddy-brown/10 bg-maddy-cream px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-sm font-semibold uppercase tracking-[0.15em] text-maddy-brown/80 hover:text-maddy-brown"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="mt-2 inline-block rounded-full border border-maddy-brown/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-maddy-brown"
                onClick={() => setMobileOpen(false)}
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
