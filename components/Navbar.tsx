"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Solutions", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between px-5 rounded-2xl transition-all duration-500 glass-md",
            scrolled ? "py-3 shadow-xl shadow-black/30" : "py-4"
          )}
        >
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-white text-xs font-bold font-syne">S2</span>
            </div>
            <span className="font-syne text-xl font-bold text-white tracking-tight">
              S2T<span className="gradient-text-static">_script</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-medium text-white/50 hover:text-white transition-colors px-3 py-2"
            >
              Login
            </a>
            <a
              href="#"
              className="btn-glow text-sm px-5 py-2.5 rounded-xl"
            >
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-5 animate-fade-in">
            <nav className="flex flex-col gap-1 mb-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 font-medium transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="btn-glass text-sm px-5 py-2.5 rounded-xl text-center"
              >
                Login
              </a>
              <a
                href="#"
                className="btn-glow text-sm px-5 py-2.5 rounded-xl text-center"
              >
                Get Started Free
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
