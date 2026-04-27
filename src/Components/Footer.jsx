import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import content from "../data/content.json";
import {
  LuInstagram,
  LuTwitter,
  LuFacebook,
  LuMapPin,
  LuMail,
  LuPhone,
} from "react-icons/lu";

const { brand, tagline, description, socials, links, services, contact } = content.footer;

// Icon maps — JSON stores the string, we map it to the real icon
const socialIconMap = {
  Instagram: <LuInstagram size={18} />,
  Twitter: <LuTwitter size={18} />,
  Facebook: <LuFacebook size={18} />,
};

const contactIconMap = {
  mail: <LuMail size={14} />,
  phone: <LuPhone size={14} />,
  location: <LuMapPin size={14} />,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="bg-[#080808] border-t border-white/10 pt-16 pb-8 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8"
      >

        {/* Column 1 — Brand */}
        <motion.div variants={itemVariants} className="md:col-span-1 flex flex-col gap-4">
          <h2 className="text-white text-xl font-semibold tracking-wide">
            {brand} <span className="text-gray-500 text-sm font-light">{tagline}</span>
          </h2>
          <p className="text-white/30 text-sm leading-relaxed font-light">
            {description}
          </p>

          {/* Socials */}
          <div className="flex gap-3 mt-2">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ y: -3, color: "#7aab94" }}
                transition={{ duration: 0.2 }}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#7aab94] transition-colors duration-300"
                aria-label={social.label}
              >
                {socialIconMap[social.label]}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Column 2 — Quick Links */}
        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          <h3 className="text-white text-sm tracking-widest uppercase font-light">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className={`text-sm font-light transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-[#7aab94]"
                      : "text-white/30 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 3 — Services */}
        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          <h3 className="text-white text-sm tracking-widest uppercase font-light">
            Services
          </h3>
          <ul className="flex flex-col gap-3">
            {services.map((service) => (
              <li
                key={service}
                className="text-white/30 text-sm font-light hover:text-white transition-colors duration-300 cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 4 — Contact */}
        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          <h3 className="text-white text-sm tracking-widest uppercase font-light">
            Get In Touch
          </h3>
          <ul className="flex flex-col gap-3">
            {contact.map((item) => (
              <li key={item.text} className="flex items-center gap-3 text-white/30 text-sm font-light">
                <span className="text-[#7aab94]">{contactIconMap[item.type]}</span>
                {item.text}
              </li>
            ))}
          </ul>

          {/* Newsletter */}
          <div className="mt-4 flex flex-col gap-2">
            <p className="text-white/30 text-xs tracking-widest uppercase">
              Newsletter
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/5 border border-white/10 text-white text-sm px-4 py-2 rounded-l outline-none placeholder:text-white/20 focus:border-[#7aab94] transition-colors duration-300 w-full"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-700 px-4 py-2 text-white text-sm rounded-r hover:bg-green-600 transition"
              >
                Join
              </motion.button>
            </div>
          </div>
        </motion.div>

      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="max-w-6xl mx-auto mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <p className="text-white/20 text-xs font-light">
          © {new Date().getFullYear()} Barry Interiors. All rights reserved.
        </p>
        <p className="text-white/20 text-xs font-light">
          Designed with elegance. Built by Ocpachal.
        </p>
      </motion.div>
    </footer>
  );
}