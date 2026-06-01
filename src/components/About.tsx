"use client";

import { motion } from "framer-motion";
import { Leaf, Heart, Timer } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "We source locally — pure milk straight from Bankura farms.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: Heart,
    title: "Local Love",
    description: "Beliatore is our home. Every cone and carton is made for our community.",
    gradient: "from-pink-400 to-rose-500",
  },
  {
    icon: Timer,
    title: "Daily Made",
    description: "Never frozen twice. Every batch is fresh from our kitchen daily.",
    gradient: "from-amber-400 to-orange-500",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-dark-base py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-3 inline-block rounded-full bg-primary/20 px-4 py-1 text-sm font-semibold text-primary">
              Our Story
            </span>
            <h2
              className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
              style={{ fontFamily: "Playfair Display, Georgia, serif", color: "#FFF8F0" }}
            >
              Where Every Scoop{" "}
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Tells a Story
              </span>
            </h2>
            <p className="mt-6 leading-relaxed" style={{ color: "#E8D5F5" }}>
              A beloved neighborhood store in Beliatore, Bankura — Bittu Ice
              Land has been the go-to destination for ice creams, dairy
              essentials, and everyday needs. More than a shop, we&apos;re a part of
              your sweetest memories. From school kids rushing in after classes
              to families sharing a Sunday treat, every corner of our store
              echoes with laughter and the clink of ice cream cups.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {values.map((v) => (
                <motion.div
                  key={v.title}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl bg-white/5 p-5 text-center backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  <div
                    className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${v.gradient}`}
                  >
                    <v.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-sm" style={{ color: "#FFF8F0" }}>
                    {v.title}
                  </h4>
                  <p className="mt-1 text-xs leading-snug opacity-75" style={{ color: "#E8D5F5" }}>
                    {v.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FF6B9D] via-[#FFD93D] to-[#6BCB77] p-1">
              <div className="rounded-2xl bg-dark-base p-8 text-center">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-primary text-4xl">
                  🍨
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Pacifico, cursive", color: "#FFF8F0" }}
                >
                  Bittu Ice Land
                </h3>
                <p className="mt-2" style={{ color: "#E8D5F5" }}>
                  Beliatore, Bankura, West Bengal
                </p>
                <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
                <p className="mt-6 text-sm italic leading-relaxed" style={{ color: "#E8D5F5" }}>
                  &ldquo;Pure Joy, Every Scoop&rdquo;
                </p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-secondary/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
