"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, IceCream } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark shadow-lg shadow-dark-base/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2 text-xl sm:text-2xl" style={{ fontFamily: "Pacifico, cursive", color: scrolled ? "#FFF8F0" : "#FFF8F0" }}>
          <IceCream className="h-6 w-6 text-secondary" />
          <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Bittu Ice Land
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href.slice(1))}
              className="text-sm font-medium transition-colors hover:text-primary"
              style={{ color: scrolled ? "#FFD93D" : "#FFF8F0" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40"
          >
            Order Now
          </button>
        </div>

        <button
          className="relative z-50 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-6 w-6 text-light-cream" />
          ) : (
            <Menu className="h-6 w-6 text-light-cream" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="glass-dark overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-3 px-5 pb-6 pt-2">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href.slice(1))}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-left text-light-cream transition-colors hover:bg-white/10"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="mt-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-center text-sm font-bold text-white shadow-lg"
              >
                Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
