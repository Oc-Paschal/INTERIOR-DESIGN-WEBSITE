import { LuLayoutDashboard, LuLamp, LuSofa } from "react-icons/lu";
import { motion } from "framer-motion";

const features = [
  {
    icon: <LuLayoutDashboard size={36} strokeWidth={1.2} />,
    title: "Modern Spaces",
    description:
      "Thoughtfully crafted interiors where contemporary form meets enduring elegance. Every space, a statement.",
  },
  {
    icon: <LuLamp size={36} strokeWidth={1.2} />,
    title: "Elegant Lighting",
    description:
      "Curated lighting that does more than illuminate. it sets the atmosphere, defines the space, and elevates every detail.",
  },
  {
    icon: <LuSofa size={36} strokeWidth={1.2} />,
    title: "Luxury Living",
    description:
      "We create homes that go beyond aesthetics, crafting environments where everyday moments feel exceptional.",
  },
];

// Parent container — controls stagger timing for children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Each feature card
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// Icon — pops in with a slight scale
const iconVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function FeaturesStrip() {
  return (
    <section className="bg-[#0e0e0e] py-16 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex flex-col items-center text-center px-10 py-10 gap-4 group"
          >
            {/* Icon */}
            <motion.div
              variants={iconVariants}
              whileHover={{ y: -6, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-[#7aab94] cursor-default"
            >
              {feature.icon}
            </motion.div>

            {/* Title */}
            <motion.h3
              variants={cardVariants}
              className="text-white text-base font-light tracking-widest uppercase"
            >
              {feature.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              variants={cardVariants}
              className="text-white/40 text-sm leading-relaxed font-light"
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}