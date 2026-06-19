"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-6 left-1/2 z-50 -translate-x-1/2"
    >
      <div
        className="
          flex
          items-center
          gap-8
          rounded-full
          border
          border-white/10
          bg-white/5
          px-8
          py-4
          backdrop-blur-xl
          shadow-[0_0_30px_rgba(0,0,0,0.2)]
        "
      >
        <a href="#home" className="text-slate-300 transition hover:text-white">
          Home
        </a>

        <a href="#about" className="text-slate-300 transition hover:text-white">
          About
        </a>

        <a href="#projects" className="text-slate-300 transition hover:text-white">
          Projects
        </a>

        <a href="#education" className="text-slate-300 transition hover:text-white">
          Education
        </a>

        <a
          href="#certifications"
          className="text-slate-300 transition hover:text-white"
        >
          Certifications
        </a>

        <a href="#contact" className="text-slate-300 transition hover:text-white">
          Contact
        </a>

        <button
          className="
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            to-violet-500
            px-4
            py-2
            text-sm
            font-medium
            text-white
            transition
            hover:scale-105
          "
        >
          Resume
        </button>
      </div>
    </motion.nav>
  );
}