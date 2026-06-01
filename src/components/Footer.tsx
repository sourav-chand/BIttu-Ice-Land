"use client";

import { IceCream, Camera, Globe, MessageCircle, Heart } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: Globe, href: "#", label: "Facebook" },
  { icon: MessageCircle, href: "https://wa.me/91XXXXXXXXXX", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark-base">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,107,157,0.05),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <a href="#home" className="flex items-center gap-2 text-xl" style={{ fontFamily: "Pacifico, cursive" }}>
              <IceCream className="h-6 w-6 text-secondary" />
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Bittu Ice Land
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed opacity-70" style={{ color: "#E8D5F5" }}>
              Pure Joy, Every Scoop. Beliatore&apos;s sweetest destination for ice
              cream, dairy, and everyday essentials.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-secondary">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm opacity-70 transition-all hover:opacity-100 hover:text-primary"
                    style={{ color: "#E8D5F5" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-secondary">
              Visit Us
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: "#E8D5F5" }}>
              <li className="opacity-70">Beliatore, Bankura</li>
              <li className="opacity-70">West Bengal, India</li>
              <li className="opacity-70">Open: 9 AM – 9 PM</li>
              <li>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="opacity-70 transition-all hover:opacity-100 hover:text-primary"
                >
                  +91 XXXXXXXXXX
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-secondary">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-sm transition-all hover:bg-primary hover:text-white"
                  style={{ color: "#E8D5F5" }}
                  aria-label={s.label}
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="flex items-center justify-center gap-1 text-sm opacity-50" style={{ color: "#E8D5F5" }}>
            Made with <Heart className="h-4 w-4 text-primary" /> in Bankura,
            West Bengal &copy; {new Date().getFullYear()} Bittu Ice Land
          </p>
        </div>
      </div>
    </footer>
  );
}
