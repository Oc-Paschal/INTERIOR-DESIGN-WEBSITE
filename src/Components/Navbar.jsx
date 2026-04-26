import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
]

const Navbar = () => {
  const location = useLocation() // tells you what page you're currently on

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-20 py-6 z-20 text-white"
    >
      {/* Logo */}
      <Link to="/">
        <h1 className="text-2xl font-semibold tracking-wide">
          BARRY <span className="text-gray-400 text-sm">interiors</span>
        </h1>
      </Link>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-8 text-md">
        {navLinks.map((item, index) => (
          <motion.li
            key={item.label}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
          >
            <Link
              to={item.path}
              className={`transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-white border-b border-green-600 pb-0.5" // active link
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.4 }}
      >
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-700 px-4 py-2 text-sm rounded hover:bg-green-600 transition"
          >
            Get in Touch
          </motion.button>
        </Link>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar