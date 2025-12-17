"use client";

import React, { useState } from "react";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basic",
    pricePerMin: 1.5,
    pricePerHour: 80,
    description: "Perfect for occasional use and small projects",
    features: [
      "Human transcription",
      "5-day delivery",
      "Standard accuracy (98%)",
      "DOCX & PDF formats",
      "Email support",
    ],
    notIncluded: ["Rush delivery", "Priority support", "Custom formatting"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    pricePerMin: 2.5,
    pricePerHour: 130,
    description: "Our most popular plan for regular creators",
    features: [
      "Human transcription",
      "48-hour delivery",
      "High accuracy (99%+)",
      "All file formats",
      "Speaker identification",
      "Priority support",
      "Timestamps included",
    ],
    notIncluded: ["Same-day delivery"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    pricePerMin: null,
    pricePerHour: null,
    description: "Custom solutions for high-volume teams",
    features: [
      "Everything in Professional",
      "Same-day delivery",
      "Dedicated account manager",
      "Custom formatting",
      "API access",
      "Volume discounts",
      "NDA & compliance",
      "24/7 phone support",
    ],
    notIncluded: [],
    cta: "Contact Us",
    popular: false,
  },
];

export default function Pricing() {
  const [perHour, setPerHour] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-brand uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            No hidden fees. Pay only for what you need.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center bg-white border border-slate-200 rounded-full p-1 gap-1">
            <button
              onClick={() => setPerHour(false)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all",
                !perHour ? "bg-brand text-white shadow-sm" : "text-slate-500 hover:text-slate-700"
              )}
            >
              Per Minute
            </button>
            <button
              onClick={() => setPerHour(true)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all",
                perHour ? "bg-brand text-white shadow-sm" : "text-slate-500 hover:text-slate-700"
              )}
            >
              Per Hour
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map(({ name, pricePerMin, pricePerHour, description, features, notIncluded, cta, popular }) => (
            <div
              key={name}
              className={cn(
                "relative rounded-2xl p-8 transition-all duration-300",
                popular
                  ? "bg-brand text-white shadow-2xl scale-105 border border-brand-light"
                  : "bg-white border border-slate-200 hover:shadow-lg hover:-translate-y-1"
              )}
            >
              {popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-amber-400 text-amber-900 hover:bg-amber-400 px-4 py-1 text-xs font-bold">
                    <Zap className="w-3 h-3 mr-1" />
                    MOST POPULAR
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className={cn("text-xl font-bold mb-1", popular ? "text-white" : "text-slate-900")}>
                  {name}
                </h3>
                <p className={cn("text-sm", popular ? "text-white/70" : "text-slate-500")}>
                  {description}
                </p>
              </div>

              <div className="mb-8">
                {pricePerMin !== null ? (
                  <div>
                    <span className={cn("text-4xl font-bold", popular ? "text-white" : "text-slate-900")}>
                      ${perHour ? pricePerHour : pricePerMin}
                    </span>
                    <span className={cn("text-sm ml-1", popular ? "text-white/60" : "text-slate-400")}>
                      /{perHour ? "hour" : "minute"}
                    </span>
                  </div>
                ) : (
                  <div className={cn("text-4xl font-bold", popular ? "text-white" : "text-slate-900")}>
                    Custom
                  </div>
                )}
              </div>

              <Button
                className={cn(
                  "w-full mb-8",
                  popular
                    ? "bg-white text-brand hover:bg-white/90 font-semibold"
                    : "bg-brand text-white hover:bg-brand-light"
                )}
                size="lg"
                asChild
              >
                <a href="#">{cta}</a>
              </Button>

              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={cn(
                        "w-4 h-4 shrink-0 mt-0.5",
                        popular ? "text-blue-200" : "text-brand"
                      )}
                    />
                    <span className={popular ? "text-white/80" : "text-slate-600"}>{f}</span>
                  </li>
                ))}
                {notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm opacity-40">
                    <span className="w-4 h-4 shrink-0 mt-0.5 text-center leading-4">—</span>
                    <span className={popular ? "text-white/60" : "text-slate-400"}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
