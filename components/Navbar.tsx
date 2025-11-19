"use client";

import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <span
              className={cn(
                "text-2xl font-bold tracking-tight transition-colors",
                scrolled ? "text-brand" : "text-white"
              )}
            >
              S2T
              <span className={scrolled ? "text-brand-light" : "text-blue-300"}>
                _script
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  scrolled
                    ? "text-slate-600 hover:text-brand hover:bg-brand-muted"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className={cn(
                "text-sm font-medium px-4 py-2 rounded-md transition-colors",
                scrolled
                  ? "text-slate-600 hover:text-brand"
                  : "text-white/80 hover:text-white"
              )}
            >
              Login
            </a>
            <Button
              size="sm"
              className={cn(
                scrolled
                  ? "bg-brand hover:bg-brand-light text-white"
                  : "bg-white text-brand hover:bg-white/90"
              )}
              asChild
            >
              <a href="#">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button
                className={cn(
                  "p-2 rounded-md transition-colors",
                  scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
                )}
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 pt-10">
              <div className="mb-8">
                <span className="text-2xl font-bold text-brand">
                  S2T<span className="text-brand-light">_script</span>
                </span>
              </div>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-md text-slate-700 hover:text-brand hover:bg-brand-muted font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-8 flex flex-col gap-3">
                <Button variant="outline" className="border-brand text-brand hover:bg-brand-muted" asChild>
                  <a href="#">Login</a>
                </Button>
                <Button className="bg-brand hover:bg-brand-light text-white" asChild>
                  <a href="#">Get Started Free</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
