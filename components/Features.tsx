import React from "react";
import { Video, Mic2, Captions, Gift, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Video,
    title: "Video Transcriptions",
    description:
      "Accurate transcriptions for interviews, webinars, documentaries, and all video content formats.",
  },
  {
    icon: Mic2,
    title: "Podcast Transcriptions",
    description:
      "Turn your podcast episodes into searchable, readable text. Boost your SEO and reach new audiences.",
  },
  {
    icon: Captions,
    title: "Captioning & Subtitling",
    description:
      "Professionally timed captions and subtitles for accessibility compliance and global reach.",
  },
  {
    icon: Gift,
    title: "Loyalty Discounts",
    description:
      "Returning clients enjoy progressive discounts. The more you transcribe, the more you save.",
  },
  {
    icon: Shield,
    title: "100% Happy Guarantee",
    description:
      "Not satisfied? We'll redo it or refund you — no questions asked. Your satisfaction is our priority.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Standard 48-hour delivery with rush options available. We never miss a deadline.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-brand uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Everything you need for{" "}
            <span className="text-brand">perfect transcriptions</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            From quick podcasts to large-scale video projects, we have the tools
            and talent to deliver.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="group border border-slate-100 hover:border-brand/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-brand-muted flex items-center justify-center mb-4 group-hover:bg-brand transition-colors duration-300">
                  <Icon className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
