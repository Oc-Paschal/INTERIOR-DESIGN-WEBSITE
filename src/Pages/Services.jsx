import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="bg-[#0e0e0e] min-h-screen">
      < motion.div
      initial={{opacity:0,y:30}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.8,ease:"easeOut"}}
      className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-white text-4xl md:text-5xl font-light font-serif mb-4">Services Page</h1>
      <p className="text-white/40 text-sm tracking-widest uppercase font-light">Everything you need to transform your space from concept to reality</p>
    </motion.div>
      </div>
  );
};

export default Services;
