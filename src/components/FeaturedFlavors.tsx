"use client";

import { motion } from "framer-motion";
import { flavors } from "@/lib/flavors";

export default function FeaturedFlavors() {
  return (
    <section id="menu" className="relative bg-light-cream py-24">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Our Specialties
          </span>
          <h2
            className="text-3xl font-bold sm:text-4xl md:text-5xl"
            style={{ color: "#2D1B69", fontFamily: "Playfair Display, Georgia, serif" }}
          >
            Our Fan Favorites
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base" style={{ color: "#2D1B69" }}>
            Handcrafted daily with the finest ingredients — every scoop is a
            celebration of flavor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {flavors.map((flavor, i) => (
            <motion.div
              key={flavor.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.04 }}
              className="group relative cursor-pointer overflow-hidden rounded-3xl flavor-card-shadow transition-all duration-300 hover:flavor-card-shadow"
            >
              <div
                className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${flavor.gradient}`}
              >
                <span className="select-none text-6xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                  {flavor.emoji}
                </span>
                <div className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-sm font-bold shadow-md" style={{ color: "#2D1B69" }}>
                  ₹{flavor.price}
                </div>
              </div>
              <div className="bg-white p-5">
                <h3 className="text-xl font-bold" style={{ color: "#2D1B69" }}>
                  {flavor.name}
                </h3>
                <p className="mt-1 text-sm leading-snug opacity-75" style={{ color: "#2D1B69" }}>
                  {flavor.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
