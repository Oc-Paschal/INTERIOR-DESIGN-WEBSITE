import { useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: " /images/Home interior designs.jpg",
    label: "Living Room",
  },
  {
    id: 2,
    image: "/images/download (10).jpg",
    label: "Bedroom",
  },
  {
    id: 3,
    image: "/images/Mesa de cristal para comedor.jpg",
    label: "Dining Space",
  },
  {
    id: 4,
    image: "/images/Office Bookshelves_ Transforming Your Workspace into an Inspirational Sanctuary - Fuss Free Home.jpg",
    label: "Study Room",
  },
];

// Header text fades up on scroll into view
const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Cards stagger in on scroll
const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Slide direction tracking for AnimatePresence
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: (direction) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  }),
};

export default function PortfolioCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const total = slides.length;

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const next = () => {
    setDirection(1);
    setCurrent((next) => (next + 1) % total);
  };

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const getVisible = () => {
    return [0, 1, 2].map((offset) => slides[(current + offset) % total]);
  };

  return (
    <section className="bg-[#0e0e0e] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header Row */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex items-start justify-between mb-10"
        >
          <div>
            <h2 className="text-white text-3xl md:text-4xl font-light tracking-wide mb-2 font-serif">
              Refined and Contemporary
            </h2>
            <p className="text-white/40 text-md font-light">
              Stunning interiors designed to inspire simplicity and elegance.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3 mt-2">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-white/50 hover:text-white transition-all duration-300"
            >
              <LuChevronLeft size={18} />
            </motion.button>
            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-white/50 hover:text-white transition-all duration-300"
            >
              <LuChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* Image Cards */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout" custom={direction}>
            {getVisible().map((slide, index) => (
              <motion.div
                key={slide.id}
                custom={direction}
                variants={{ ...cardVariants, ...slideVariants }}
                initial="enter"
                animate="center"
                exit="exit"
                className={`relative overflow-hidden rounded-sm ${
                  index === 0 ? "md:col-span-1 h-72" : "h-72"
                }`}
              >
                <motion.img
                  src={slide.image}
                  alt={slide.label}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/40"
                  whileHover={{ opacity: 0.15 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Label — slides up on hover */}
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="absolute bottom-4 left-4 text-white/70 text-xs tracking-widest uppercase"
                >
                  {slide.label}
                </motion.span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dot Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center gap-2 mt-8"
        >
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goTo(index)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                width: index === current ? 24 : 6,
                backgroundColor: index === current ? "#7aab94" : "rgba(255,255,255,0.3)",
              }}
              transition={{ duration: 0.3 }}
              className="h-1.5 rounded-full"
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}