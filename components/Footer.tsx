import React from "react";
import { Twitter, Linkedin, Facebook, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Company: ["About Us", "Blog", "Careers", "Press"],
  Services: ["Transcription", "Editing", "Captioning", "Subtitling"],
  Support: ["Help Center", "Pricing", "Contact", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
};

const socials = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                S2T<span className="text-blue-400">_script</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Professional, human-powered transcription services for creators,
              filmmakers, and businesses worldwide.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} S2T_script. All rights reserved.</p>
          <p>Made with precision for creators who care about quality.</p>
        </div>
      </div>
    </footer>
  );
}
