"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@s2tscript.com",
    href: "mailto:hello@s2tscript.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 700 000 000",
    href: "tel:+254700000000",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Nairobi, Kenya",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri, 8am–6pm EAT",
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-brand uppercase tracking-widest">
            Contact
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Get in touch with our team
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Have a question or ready to start a project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-muted flex items-center justify-center mb-4">
                  <Send className="w-7 h-7 text-brand" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Message sent!</h3>
                <p className="text-slate-500">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700" htmlFor="name">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700" htmlFor="email">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700" htmlFor="subject">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700" htmlFor="message">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-brand hover:bg-brand-light text-white font-semibold">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-900 mb-5">Contact Information</h3>
              <ul className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-muted flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-brand" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm text-slate-700 hover:text-brand transition-colors font-medium"
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="text-sm text-slate-700 font-medium">{value}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand rounded-2xl p-6 text-white">
              <h4 className="font-semibold mb-2">Urgent project?</h4>
              <p className="text-sm text-white/70 mb-4">
                We offer same-day turnaround for rush projects. Get in touch and
                we'll prioritize your order.
              </p>
              <Button variant="outline-white" size="sm" className="font-medium" asChild>
                <a href="mailto:rush@s2tscript.com">Email Rush Team</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
