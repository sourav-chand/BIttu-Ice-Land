"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-light-cream py-24">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-accent/20 px-4 py-1 text-sm font-semibold text-accent">
            Get In Touch
          </span>
          <h2
            className="text-3xl font-bold sm:text-4xl md:text-5xl"
            style={{ color: "#2D1B69", fontFamily: "Playfair Display, Georgia, serif" }}
          >
            Come Visit Us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base" style={{ color: "#2D1B69" }}>
            We&apos;re just around the corner. Stop by for a scoop or drop us a
            message!
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Info Cards + Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Map placeholder */}
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <div
                className="flex h-64 items-center justify-center bg-gradient-to-br from-dark-base to-[#2D1B69] sm:h-72"
              >
                <div className="text-center">
                  <MapPin className="mx-auto h-10 w-10 text-secondary" />
                  <p className="mt-3 font-medium text-light-cream">
                    Beliatore, Bankura, West Bengal
                  </p>
                  <p className="mt-1 text-sm text-light-cream/70">
                    Open in Google Maps →
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-primary">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm" style={{ color: "#2D1B69" }}>
                    Address
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed opacity-70" style={{ color: "#2D1B69" }}>
                    Beliatore, Bankura
                    <br />
                    West Bengal, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-green-500">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm" style={{ color: "#2D1B69" }}>
                    Open Hours
                  </h4>
                  <p className="mt-1 text-sm opacity-70" style={{ color: "#2D1B69" }}>
                    Mon – Sun
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    9:00 AM – 9:00 PM
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4 text-white shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="font-bold text-lg">Order via WhatsApp</span>
            </a>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-10">
              <h3
                className="text-2xl font-bold"
                style={{ color: "#2D1B69", fontFamily: "Playfair Display, Georgia, serif" }}
              >
                Send Us a Message
              </h3>
              <p className="mt-2 text-sm opacity-60" style={{ color: "#2D1B69" }}>
                We&apos;d love to hear from you!
              </p>

              <form className="mt-8 space-y-5">
                <div>
                  <label
                    className="mb-1.5 block text-sm font-medium"
                    style={{ color: "#2D1B69" }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Raju Da"
                    className="w-full rounded-xl border border-primary/10 bg-light-cream px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    style={{ color: "#2D1B69" }}
                  />
                </div>

                <div>
                  <label
                    className="mb-1.5 block text-sm font-medium"
                    style={{ color: "#2D1B69" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    className="w-full rounded-xl border border-primary/10 bg-light-cream px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    style={{ color: "#2D1B69" }}
                  />
                </div>

                <div>
                  <label
                    className="mb-1.5 block text-sm font-medium"
                    style={{ color: "#2D1B69" }}
                  >
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you'd like... 🍨"
                    className="w-full resize-none rounded-xl border border-primary/10 bg-light-cream px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    style={{ color: "#2D1B69" }}
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 font-bold text-white shadow-lg transition-all hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
