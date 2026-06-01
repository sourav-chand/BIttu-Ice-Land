"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const galleryItems = [
  { label: "Our Store Front", gradient: "from-[#FF6B9D] to-[#FFD93D]", h: "h-64" },
  { label: "Ice Cream Counter", gradient: "from-[#6BCB77] to-[#FFD93D]", h: "h-80" },
  { label: "Making Kulfi", gradient: "from-[#FF6B9D] to-[#6BCB77]", h: "h-56" },
  { label: "Fresh Milk Delivery", gradient: "from-blue-400 to-cyan-500", h: "h-72" },
  { label: "Happy Customers", gradient: "from-[#FFD93D] to-[#FF6B9D]", h: "h-60" },
  { label: "Daily Specials Board", gradient: "from-purple-500 to-pink-500", h: "h-96" },
  { label: "Beliatore Vibes", gradient: "from-emerald-400 to-teal-500", h: "h-52" },
  { label: "Sundaes & Smiles", gradient: "from-amber-400 to-orange-500", h: "h-68" },
  { label: "Behind the Counter", gradient: "from-rose-400 to-red-500", h: "h-76" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-dark-base py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(107,203,119,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-secondary/20 px-4 py-1 text-sm font-semibold text-secondary">
            Our World
          </span>
          <h2
            className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            style={{ fontFamily: "Playfair Display, Georgia, serif", color: "#FFF8F0" }}
          >
            A Peek Inside{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Our World
            </span>
          </h2>
        </motion.div>

        <div className="masonry-grid">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="gallery-item masonry-item relative overflow-hidden rounded-2xl"
            >
              <div
                className={`relative ${item.h} flex items-center justify-center bg-gradient-to-br ${item.gradient}`}
              >
                <span className="select-none text-5xl">🍨</span>
                <div className="gallery-overlay absolute inset-0 flex items-center justify-center bg-dark-base/50 backdrop-blur-sm">
                  <div className="text-center">
                    <Heart className="mx-auto h-8 w-8 text-secondary" />
                    <p className="mt-2 text-sm font-medium text-light-cream">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
