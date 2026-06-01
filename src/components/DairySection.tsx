"use client";

import { motion } from "framer-motion";
import { Milk, Package, ShoppingBag, Soup } from "lucide-react";

const categories = [
  {
    icon: Milk,
    title: "Fresh Milk & Dairy",
    description:
      "Pure, unadulterated milk sourced daily from local Bankura farms. Creamy and full of goodness.",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    icon: Soup,
    title: "Paneer & Chhena",
    description:
      "Freshly prepared cottage cheese and chhena — perfect for your Mishti Doi and Bengali sweets.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: Package,
    title: "Packaged Dairy",
    description:
      "Curd, buttermilk, ghee, and more — all hygienically packed and ready to take home.",
    gradient: "from-amber-400 to-yellow-500",
  },
  {
    icon: ShoppingBag,
    title: "General Grocery",
    description:
      "From cooking essentials to snacks — your everyday needs, all under one sweet roof.",
    gradient: "from-pink-400 to-rose-500",
  },
];

export default function DairySection() {
  return (
    <section className="relative bg-light-cream py-24">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-accent/20 px-4 py-1 text-sm font-semibold text-accent">
            More Than Ice Cream
          </span>
          <h2
            className="text-3xl font-bold sm:text-4xl md:text-5xl"
            style={{ color: "#2D1B69", fontFamily: "Playfair Display, Georgia, serif" }}
          >
            Beyond Ice Cream
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base" style={{ color: "#2D1B69" }}>
            Your one-stop shop for dairy essentials and everyday groceries —
            just like the old bazaar, but better.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-5 p-6 sm:p-8">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.gradient} shadow-md transition-transform duration-300 group-hover:scale-110`}
                >
                  <cat.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#2D1B69" }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed opacity-75"
                    style={{ color: "#2D1B69" }}
                  >
                    {cat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
