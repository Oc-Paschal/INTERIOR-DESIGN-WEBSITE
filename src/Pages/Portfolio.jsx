import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import content from "../data/content.json";


const filters = ["All", "Living Room", "Bedroom", "Dining Space", "Study Room"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const items = content.portfolioPage.items;

  const filteredItems =
    activeFilter === "All"
      ? items
      : items.filter((item) => item.category === activeFilter);

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedItem(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="bg-[#0e0e0e] min-h-screen">
      {/* Page Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pt-32 pb-16 px-6 text-center"
      >
        <h1 className="text-white text-4xl md:text-5xl font-light font-serif mb-4">
          Our Portfolio
        </h1>
        <p className="text-white/40 text-sm tracking-widest uppercase font-light">
          A curated collection of spaces we have brought to life
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-3 flex-wrap px-6 pb-16">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 text-xs tracking-widest uppercase rounded-full border transition-all duration-300 ${
              activeFilter === filter
                ? "bg-green-700 border-green-700 text-white"
                : "border-white/20 text-white/40 hover:border-white/50 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      {/* Image Grid */}
      <motion.div
        layout
        className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className="relative overflow-hidden rounded-sm h-72 group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white/70 text-xs tracking-widest uppercase">
                  {item.label}
                </p>
                <p className="text-white/30 text-xs mt-1">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    {/* Lightbox */}
<AnimatePresence>
  {selectedItem && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedItem(null)}
      className="fixed inset-0 bg-black/90 z-50 flex items-start justify-center px-6 py-10 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-[#111] rounded-sm overflow-hidden"
      >
        {/* Image */}
        <img
          src={selectedItem.image}
          alt={selectedItem.label}
          className="w-full max-h-[60vh] object-cover"
        />

        {/* Details */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Left — concept + description */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-1">
                {selectedItem.category}
              </p>
              <h3 className="text-white text-2xl font-light font-serif">
                {content.portfolioPage.categories[selectedItem.category].concept}
              </h3>
            </div>
            <p className="text-white/50 text-sm leading-7">
              {content.portfolioPage.categories[selectedItem.category].description}
            </p>
          </div>

          {/* Right — materials, size, price */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-2">Materials</p>
              <p className="text-white/60 text-sm leading-6">
                {content.portfolioPage.categories[selectedItem.category].materials}
              </p>
            </div>
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-2">Room Size</p>
              <p className="text-white/60 text-sm">
                {content.portfolioPage.categories[selectedItem.category].size}
              </p>
            </div>
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-2">Investment</p>
              <p className="text-[#7aab94] text-lg font-light">
                {content.portfolioPage.categories[selectedItem.category].price}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="mt-auto text-white/50 hover:text-white text-xs tracking-widest uppercase border border-white/20 hover:border-white/50 px-4 py-2 rounded transition-all duration-300"
            >
              Close
            </button>
          </div>

        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
};

export default Portfolio;
