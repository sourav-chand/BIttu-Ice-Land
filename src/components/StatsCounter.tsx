"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import { IceCream, Sparkles, Users, Award } from "lucide-react";

const stats = [
  { icon: Award, value: 10, suffix: "+", label: "Years of Service" },
  { icon: IceCream, value: 50, suffix: "+", label: "Flavors Created" },
  { icon: Users, value: 1000, suffix: "+", label: "Happy Customers / Mo." },
  { icon: Sparkles, value: 100, suffix: "%", label: "Fresh Daily" },
];

function Counter({
  value,
  suffix,
  label,
  icon: Icon,
  gradient,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  gradient: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 20, stiffness: 60 });
  const rounded = useTransform(spring, (v) => Math.floor(v));

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center"
    >
      <div
        className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-lg`}
      >
        <Icon className="h-7 w-7 text-white" />
      </div>
      <div className="text-4xl font-bold sm:text-5xl" style={{ color: "#FFF8F0" }}>
        <motion.span>{rounded}</motion.span>
        <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
          {suffix}
        </span>
      </div>
      <p className="mt-2 text-sm font-medium tracking-wide uppercase" style={{ color: "#E8D5F5" }}>
        {label}
      </p>
    </motion.div>
  );
}

export default function StatsCounter() {
  const gradients = [
    "from-pink-500 to-rose-600",
    "from-amber-400 to-orange-500",
    "from-green-400 to-emerald-500",
    "from-yellow-400 to-amber-500",
  ];

  return (
    <section className="relative bg-dark-base py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,107,157,0.1),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Counter key={stat.label} {...stat} gradient={gradients[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
