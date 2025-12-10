import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Podcast Host, True Crime Weekly",
    initials: "SM",
    quote:
      "S2T_script has been a game-changer for my podcast. The turnaround is incredibly fast and the accuracy is consistently impressive — even with multiple speakers and heavy accents. I won't use anyone else.",
    rating: 5,
  },
  {
    name: "James Odhiambo",
    role: "Documentary Filmmaker",
    initials: "JO",
    quote:
      "I've tried several transcription services and none come close to the quality I get from S2T. The team handles complex technical interviews with precision, and the subtitle files are always broadcast-ready.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Content Director, TechTalks Inc.",
    initials: "PN",
    quote:
      "We process hundreds of hours of content monthly and S2T_script handles it seamlessly. The client portal is clean, the team is responsive, and the accuracy guarantee gives us peace of mind every single time.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-brand uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Trusted by creators and professionals
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Don't take our word for it — here's what our clients say.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, initials, quote, rating }) => (
            <Card
              key={name}
              className="border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-600 text-sm leading-relaxed mb-6">
                  &ldquo;{quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center shrink-0">
                    <span className="text-white text-sm font-semibold">{initials}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{name}</div>
                    <div className="text-xs text-slate-500">{role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
