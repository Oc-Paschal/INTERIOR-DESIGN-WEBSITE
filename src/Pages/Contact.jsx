import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LuMail, LuPhone, LuMapPin, LuInstagram, LuTwitter, LuFacebook, LuCircleCheck } from "react-icons/lu"
import content from "../data/content.json"

const { contact } = content.footer

const contactIconMap = {
  mail: <LuMail size={18} />,
  phone: <LuPhone size={18} />,
  location: <LuMapPin size={18} />,
}

const socials = [
  { icon: <LuInstagram size={20} />, href: "#", label: "Instagram" },
  { icon: <LuTwitter size={20} />, href: "#", label: "Twitter" },
  { icon: <LuFacebook size={20} />, href: "#", label: "Facebook" },
]

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Show success message
    setSubmitted(true)
    // Reset form
    setForm({ name: "", email: "", phone: "", message: "" })
  }

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
          Get In Touch
        </h1>
        <p className="text-white/40 text-sm tracking-widest uppercase font-light max-w-xl mx-auto">
          Let's start a conversation about your dream space
        </p>
      </motion.div>

      {/* Main Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div>
              <h2 className="text-white text-2xl font-light font-serif mb-2">
                Send Us a Message
              </h2>
              <div className="h-px w-10 bg-[#7aab94]" />
            </div>

            {/* Success Message */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-3 bg-[#7aab94]/10 border border-[#7aab94]/30 rounded px-4 py-3"
                >
                  <LuCircleCheck size={18} className="text-[#7aab94]" />
                  <p className="text-[#7aab94] text-sm font-light">
                    Message sent successfully! We'll be in touch soon.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-white/30 text-xs tracking-widest uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Barry Okafor"
                  className="bg-white/5 border border-white/10 text-white text-sm px-4 py-3 rounded outline-none placeholder:text-white/20 focus:border-[#7aab94] transition-colors duration-300"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-white/30 text-xs tracking-widest uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="hello@example.com"
                  className="bg-white/5 border border-white/10 text-white text-sm px-4 py-3 rounded outline-none placeholder:text-white/20 focus:border-[#7aab94] transition-colors duration-300"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-white/30 text-xs tracking-widest uppercase">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+234 800 000 0000"
                  className="bg-white/5 border border-white/10 text-white text-sm px-4 py-3 rounded outline-none placeholder:text-white/20 focus:border-[#7aab94] transition-colors duration-300"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-white/30 text-xs tracking-widest uppercase">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your space and what you have in mind..."
                  className="bg-white/5 border border-white/10 text-white text-sm px-4 py-3 rounded outline-none placeholder:text-white/20 focus:border-[#7aab94] transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-green-700 px-8 py-4 text-white text-xs tracking-widest uppercase rounded hover:bg-green-600 transition mt-2"
              >
                Send Message
              </motion.button>

            </form>
          </motion.div>

          {/* Right — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-10"
          >
            <div>
              <h2 className="text-white text-2xl font-light font-serif mb-2">
                Contact Information
              </h2>
              <div className="h-px w-10 bg-[#7aab94]" />
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-6">
              {contact.map((item) => (
                <div key={item.text} className="flex items-start gap-4">
                  <div className="text-[#7aab94] mt-0.5">
                    {contactIconMap[item.type]}
                  </div>
                  <div>
                    <p className="text-white/30 text-xs tracking-widest uppercase mb-1">
                      {item.type === "mail" ? "Email" : item.type === "phone" ? "Phone" : "Location"}
                    </p>
                    <p className="text-white/70 text-sm font-light">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10" />

            {/* Socials */}
            <div className="flex flex-col gap-4">
              <p className="text-white/30 text-xs tracking-widest uppercase">
                Follow Us
              </p>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#7aab94] hover:text-[#7aab94] transition-colors duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10" />

            {/* Office Hours */}
            <div className="flex flex-col gap-4">
              <p className="text-white/30 text-xs tracking-widest uppercase">
                Office Hours
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <p className="text-white/50 text-sm font-light">Monday — Friday</p>
                  <p className="text-white/70 text-sm font-light">9:00am — 6:00pm</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white/50 text-sm font-light">Saturday</p>
                  <p className="text-white/70 text-sm font-light">10:00am — 4:00pm</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white/50 text-sm font-light">Sunday</p>
                  <p className="text-white/70 text-sm font-light">Closed</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Contact