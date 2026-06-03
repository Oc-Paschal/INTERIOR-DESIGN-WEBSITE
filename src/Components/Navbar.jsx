import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { LuMenu, LuX } from 'react-icons/lu'

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
]

const Navbar = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // if user scrolled more than 80px, set scrolled to true
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-20 py-6 z-30 text-white transition-all duration-500 ${
  scrolled
    ? "bg-[#080808]/95 backdrop-blur-sm border-b border-white/5"
    : "bg-transparent border-b border-transparent"
}`}
      >
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-semibold tracking-wide">
            BARRY <span className="text-gray-400 text-sm">interiors</span>
          </h1>
        </Link>

        {/* Desktop Nav Links */}
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
                    ? "text-white border-b border-green-600 pb-0.5"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="hidden md:block"
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

        {/* Mobile Hamburger */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white z-30"
        >
          {menuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
        </motion.button>

      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 bg-[#080808] z-20 flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {navLinks.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-2xl font-light tracking-widest uppercase transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-white"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                <button className="bg-green-700 px-8 py-3 text-white text-sm tracking-widest uppercase rounded hover:bg-green-600 transition mt-4">
                  Get in Touch
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar