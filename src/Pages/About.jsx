import { motion } from "framer-motion";
import content from "../data/content.json";
import { LuStar, LuShield, LuHeart } from "react-icons/lu";

const { hero, story, team, values, whyUs } = content.about;

const iconMap = {
  star: <LuStar size={28} strokeWidth={1.2} />,
  shield: <LuShield size={28} strokeWidth={1.2} />,
  heart: <LuHeart size={28} strokeWidth={1.2} />,
};

const About = () => {
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
          {hero.heading}
        </h1>
        <p className="text-white/40 text-sm tracking-widest uppercase font-light max-w-xl mx-auto">
          {hero.subtext}
        </p>
      </motion.div>

      {/* Timeline — Our Story */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-3xl font-light font-serif mb-3">
            Our Story
          </h2>
          <div className="h-px w-12 bg-[#7aab94] mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

          <div className="flex flex-col gap-12">
            {story.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="flex gap-8 items-start pl-12 relative"
              >
                {/* Dot */}
                <div className="absolute left-[11px] top-1.5 w-3 h-3 rounded-full border-2 border-[#7aab94] bg-[#0e0e0e]" />

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <span className="text-[#7aab94] text-xs tracking-widest uppercase font-light">
                    {item.year}
                  </span>
                  <h3 className="text-white text-lg font-light tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-7 font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values — Bold Statements */}
      <section className="border-t border-white/10 py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                ease: "easeOut",
              }}
              className={`text-2xl md:text-4xl font-light font-serif text-white/20 hover:text-white transition-colors duration-500 cursor-default border-b border-white/5 pb-6 ${
                index % 2 === 0 ? "text-left" : "text-right"
              }`}
            >
              {value}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-3xl font-light font-serif mb-3">
              Meet the Team
            </h2>
            <div className="h-px w-12 bg-[#7aab94] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="flex flex-col gap-3 group"
              >
                {/* Placeholder Image */}
                {/* Image */}
                <div className="w-full aspect-square bg-[#1a1a1a] rounded-sm overflow-hidden relative">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/10 text-5xl font-light font-serif">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-[#7aab94]/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Name + Role */}
                <div>
                  <p className="text-white text-sm font-light tracking-wide">
                    {member.name}
                  </p>
                  <p className="text-white/30 text-xs tracking-widest uppercase mt-1">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-white/10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-3xl font-light font-serif mb-3">
              Why Choose Us
            </h2>
            <div className="h-px w-12 bg-[#7aab94] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="flex flex-col gap-5 p-8 border border-white/10 rounded-sm hover:border-[#7aab94]/40 transition-colors duration-500"
              >
                <div className="text-[#7aab94]">{iconMap[item.icon]}</div>
                <div className="h-px bg-white/10 w-10" />
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

      {/* CTA */}
      <section className="border-t border-white/10 py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center flex flex-col gap-6 items-center"
        >
          <h2 className="text-white text-3xl md:text-4xl font-light font-serif">
            Ready to Work With Us?
          </h2>
          <p className="text-white/40 text-sm leading-8 font-light">
            Let's create something extraordinary together. Reach out and let's
            start the conversation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-700 px-10 py-4 text-white text-xs tracking-widest uppercase rounded hover:bg-green-600 transition"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
