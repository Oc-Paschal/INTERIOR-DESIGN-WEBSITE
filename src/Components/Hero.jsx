import { motion } from "framer-motion";
import content from "../data/content.json";

const Hero = () => {
  const { brand, tagline, heading, subtext, buttons, navLinks } = content.hero;

  return (
    <div
      style={{ backgroundImage: "url('/images/Modern Living Room Zoom Background (Digital Download).jpg')" }}
      className="bg-center bg-cover h-screen filter brightness-90"
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 text-white px-6 md:px-15 flex flex-col justify-center h-full">

        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-20 py-6 z-20 text-white"
        >
          <h1 className="text-2xl font-semibold tracking-wide">
            {brand} <span className="text-gray-400 text-sm">{tagline}</span>
          </h1>

          <ul className="hidden md:flex gap-8 text-md">
            {navLinks.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="hover:text-gray-300 cursor-pointer"
              >
                {item}
              </motion.li>
            ))}
          </ul>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-700 px-4 py-2 text-sm rounded hover:bg-green-600"
          >
            Get in Touch
          </motion.button>
        </motion.nav>

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
              <motion.button
                key={btn.label}
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
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;