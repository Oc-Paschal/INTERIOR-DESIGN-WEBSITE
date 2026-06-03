import { motion } from "framer-motion";
import content from "../data/content.json";
import { Link } from "react-router-dom";

const Hero = () => {
  const { heading, subtext, buttons } = content.hero;

  return (
    <div
      style={{
        backgroundImage:
          "url('/images/Simple Warm Modern Home Virtual Background _ Zoom Living Room _ Zoom Background Living Room _ Zoom Backgrounds _ Virtual Background _ - Etsy.jpg')",
      }}
      className="bg-center bg-cover h-screen filter brightness-90"
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 text-white px-6 md:px-15 flex flex-col justify-center h-full">
        <div className="max-w-2xl mt-20">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 48, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="h-px bg-green-600 mb-6"
          />

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-light leading-tight mb-6 font-serif"
          >
            {heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="text-gray-300 mb-8"
          >
            {subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="flex gap-4"
          >
            {buttons.map((btn) => (
  <Link key={btn.label} to={btn.path}>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={
        btn.variant === "primary"
          ? "bg-green-700 px-6 py-3 rounded hover:bg-green-600 transition"
          : "border border-gray-400 px-6 py-3 rounded hover:bg-white hover:text-black transition"
      }
    >
      {btn.label}
    </motion.button>
  </Link>
))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
