"use client";

import { motion } from "framer-motion";
import { ChevronDown, IceCream, Sparkles } from "lucide-react";

const floatingIcons = [
  { icon: "🍦", x: "10%", y: "15%", delay: 0, size: "text-4xl" },
  { icon: "🍫", x: "85%", y: "20%", delay: 0.3, size: "text-3xl" },
  { icon: "🥭", x: "15%", y: "65%", delay: 0.6, size: "text-3xl" },
  { icon: "🍓", x: "80%", y: "70%", delay: 0.9, size: "text-4xl" },
  { icon: "🌹", x: "75%", y: "10%", delay: 1.2, size: "text-2xl" },
  { icon: "🍯", x: "20%", y: "80%", delay: 0.5, size: "text-2xl" },
  { icon: "🫐", x: "90%", y: "50%", delay: 0.8, size: "text-3xl" },
  { icon: "🇮🇳", x: "5%", y: "40%", delay: 1.0, size: "text-2xl" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1A0A2E 0%, #2D1B69 40%, #FF6B9D 100%)",
      }}
    >
      <div className="grain-overlay absolute inset-0" />

      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.size} select-none`}
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            delay: item.delay,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={childVariants} className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-light-cream backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-secondary" />
              Beliatore&apos;s Favorite Spot
              <Sparkles className="h-4 w-4 text-secondary" />
            </span>
          </motion.div>

          <motion.h1
            variants={childVariants}
            className="mx-auto max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "Playfair Display, Georgia, serif", color: "#FFF8F0" }}
          >
            <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
              West Bengal&apos;s Sweetest Spot
            </span>{" "}
            🍦
          </motion.h1>

          <motion.p
            variants={childVariants}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl"
            style={{ color: "#E8D5F5" }}
          >
            From creamy kulfi to exotic scoops — Bittu Ice Land has been serving
            joy in Beliatore since forever. Pure, fresh, and made with love.
          </motion.p>

          <motion.div
            variants={childVariants}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="#menu"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-3.5 text-base font-bold text-white shadow-xl shadow-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/40"
            >
              <IceCream className="h-5 w-5" />
              Explore Menu
              <span className="absolute inset-0 rounded-full bg-white/0 transition-all group-hover:bg-white/10" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-bold text-light-cream transition-all hover:border-white/60 hover:bg-white/10"
            >
              Learn About Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="scroll-indicator flex flex-col items-center gap-1">
          <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "#E8D5F5" }}>
            Scroll
          </span>
          <ChevronDown className="h-5 w-5 text-secondary" />
        </div>
      </motion.div>
    </section>
  );
}
