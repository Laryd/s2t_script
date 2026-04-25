import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Podcast Host, True Crime Weekly",
    initials: "SM",
    quote:
      "S2T_script has been a game-changer for my podcast. The turnaround is incredibly fast and the accuracy is consistently impressive — even with multiple speakers and heavy accents. I won't use anyone else.",
    rating: 5,
    avatarFrom: "from-blue-500",
    avatarTo: "to-violet-600",
    avatarShadow: "shadow-blue-500/30",
  },
  {
    name: "James Odhiambo",
    role: "Documentary Filmmaker",
    initials: "JO",
    quote:
      "I've tried several transcription services and none come close to the quality I get from S2T. The team handles complex technical interviews with precision, and the subtitle files are always broadcast-ready.",
    rating: 5,
    avatarFrom: "from-violet-500",
    avatarTo: "to-pink-600",
    avatarShadow: "shadow-violet-500/30",
  },
  {
    name: "Priya Nair",
    role: "Content Director, TechTalks Inc.",
    initials: "PN",
    quote:
      "We process hundreds of hours of content monthly and S2T_script handles it seamlessly. The client portal is clean, the team is responsive, and the accuracy guarantee gives us peace of mind every time.",
    rating: 5,
    avatarFrom: "from-cyan-500",
    avatarTo: "to-blue-600",
    avatarShadow: "shadow-cyan-500/30",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 relative">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-violet-600/07 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center text-xs font-bold text-rose-400/80 uppercase tracking-[0.22em] mb-5 px-3.5 py-1.5 glass rounded-full">
            Testimonials
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Trusted by creators{" "}
            <span className="gradient-text">and professionals</span>
          </h2>
          <p className="text-white/45 text-lg">
            Don't take our word for it — here's what our clients say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map(
            ({ name, role, initials, quote, rating, avatarFrom, avatarTo, avatarShadow }) => (
              <div
                key={name}
                className="glass-card rounded-3xl p-7 group relative overflow-hidden"
              >
                {/* Background quote icon */}
                <Quote className="absolute top-5 right-5 w-10 h-10 text-white/[0.03] rotate-180 pointer-events-none" />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 icon-glow-amber" />
                  ))}
                </div>

                <blockquote className="text-white/50 text-sm leading-relaxed mb-6 relative">
                  &ldquo;{quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarFrom} ${avatarTo} flex items-center justify-center shrink-0 shadow-lg ${avatarShadow}`}
                  >
                    <span className="text-white text-xs font-bold">{initials}</span>
                  </div>
                  <div>
                    <div className="font-syne font-semibold text-white text-sm">{name}</div>
                    <div className="text-xs text-white/35 mt-0.5">{role}</div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
