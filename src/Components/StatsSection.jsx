import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import content from "../data/content.json"

const stats = content.stats

// Count up hook
const useCountUp = (target, isInView) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1000; // 2 seconds
    const increment = target / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return count;
};

// Individual stat item with its own inView
const StatItem = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useCountUp(stat.value, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
      className="flex flex-col items-center gap-2"
    >
      {/* Number */}
      <span className="text-white text-4xl md:text-5xl font-light tracking-tight">
        {count}
        <span className="text-[#7aab94]">{stat.suffix}</span>
      </span>

      {/* Thin line under number */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 32 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
        className="h-px bg-green-700"
      />

      {/* Label */}
      <p className="text-white/40 text-sm tracking-widest uppercase font-light">
        {stat.label}
      </p>
    </motion.div>
  );
};

export default function StatsSection() {
  return (
    <section className="bg-[#0e0e0e] py-24 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-16">

        {/* Stats Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-700 px-8 py-3 text-white text-sm rounded hover:bg-green-600 transition tracking-widest uppercase"
        >
          Learn About Us
        </motion.button>

      </div>
    </section>
  );
}