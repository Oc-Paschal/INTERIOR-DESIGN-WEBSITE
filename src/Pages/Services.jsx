import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import content from "../data/content.json";
import {
  LuLayoutDashboard,
  LuRuler,
  LuLamp,
  LuSofa,
  LuBriefcase,
} from "react-icons/lu";

const iconMap = {
  layout: <LuLayoutDashboard size={32} strokeWidth={1.2} />,
  ruler: <LuRuler size={32} strokeWidth={1.2} />,
  lamp: <LuLamp size={32} strokeWidth={1.2} />,
  sofa: <LuSofa size={32} strokeWidth={1.2} />,
  briefcase: <LuBriefcase size={32} strokeWidth={1.2} />,
};

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const services = content.services.items;

  return (
    <div className="bg-[#0e0e0e] min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pt-32 pb-16 px-6 text-center"
      >
        <h1 className="text-white text-4xl md:text-5xl font-light font-serif mb-4">
          Our Services
        </h1>
        <p className="text-white/40 text-sm tracking-widest uppercase font-light">
          Everything you need to transform your space from concept to reality
        </p>
      </motion.div>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 border border-white/10 rounded-sm overflow-hidden">
          <div className="border-r border-white/10">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                onClick={() => setActiveService(index)}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className={`flex items-center justify-between px-8 py-6 cursor-pointer border-b border-white/10 transition-all duration-300 ${
                  activeService === index
                    ? "bg-white/5"
                    : "hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center gap-5">
                  <span
                    className={`text-xs tracking-widest font-light transition-colors duration-300 ${
                      activeService === index
                        ? "text-[#7aab94]"
                        : "text-white/20"
                    }`}
                  >
                    0{index + 1}
                  </span>

                  <span
                    className={`text-sm tracking-widest uppercase font-light transition-colors duration-300 ${
                      activeService === index ? "text-white" : "text-white/40"
                    }`}
                  >
                    {service.title}
                  </span>
                </div>

                {/* Active indicator */}
                <motion.div
                  animate={{
                    opacity: activeService === index ? 1 : 0,
                    x: activeService === index ? 0 : -6,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-1.5 h-1.5 rounded-full bg-[#7aab94]"
                />
              </motion.div>
            ))}
          </div>

          {/* Right — Service Detail Panel */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 p-10 flex flex-col gap-6"
              >
                <div className="text-[#7aab94]">
                  {iconMap[services[activeService].icon]}
                </div>

                <div>
                  <p className="text-white/30 text-xs tracking-widest uppercase mb-2">
                    0{activeService + 1} / 0{services.length}
                  </p>
                  <h2 className="text-white text-2xl md:text-3xl font-light font-serif">
                    {services[activeService].title}
                  </h2>
                </div>

                <div className="h-px bg-white/10 w-16" />

                <p className="text-white/50 text-sm leading-8 font-light">
                  {services[activeService].description}
                </p>

                <p className="text-[#7aab94] text-lg font-light tracking-wide">
                  {services[activeService].price}
                </p>

                <div className="flex gap-4 mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-700 px-6 py-3 text-white text-xs tracking-widest uppercase rounded hover:bg-green-600 transition"
                  >
                    Get a Quote
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-white/20 px-6 py-3 text-white/50 text-xs tracking-widest uppercase rounded hover:border-white/50 hover:text-white transition"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="border-t border-white/10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-3xl md:text-4xl font-light font-serif mb-4">
              How We Work
            </h2>
            <p className="text-white/40 text-sm tracking-widest uppercase font-light">
              Our process from first conversation to final reveal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {content.services.process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="flex flex-col gap-4"
              >
                <span className="text-[#7aab94] text-4xl font-light">
                  {item.step}
                </span>
                <div className="h-px bg-white/10 w-full" />
                <h3 className="text-white text-lg font-light tracking-wide">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-7 font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="border-t border-white/10 py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center flex flex-col gap-6 items-center"
        >
          <h2 className="text-white text-3xl md:text-4xl font-light font-serif">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/40 text-sm leading-8 font-light">
            Let's start a conversation about your vision. Our team is ready to
            bring your dream space to life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-700 px-10 py-4 text-white text-xs tracking-widest uppercase rounded hover:bg-green-600 transition"
          >
            Start a Project
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
