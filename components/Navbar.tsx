"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="fixed top-6 left-1/2 z-50 hidden -translate-x-1/2 lg:block"
      >
        <div
          className="
            flex items-center gap-8
            rounded-full
            border border-white/10
            bg-white/5
            px-8 py-4
            backdrop-blur-xl
          "
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <button
            className="
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-violet-500
              px-4 py-2
              text-sm font-medium
              text-white
            "
          >
            Resume
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <div className="fixed top-5 right-5 z-50 lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            rounded-xl
            bg-slate-900/90
            p-3
            text-white
            backdrop-blur-lg
            border border-slate-700
          "
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-40
            bg-[#050816]/95
            backdrop-blur-xl
            flex
            flex-col
            items-center
            justify-center
            gap-8
          "
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="
                text-2xl
                font-semibold
                text-white
                transition
                hover:text-cyan-400
              "
            >
              {link.name}
            </a>
          ))}

          <button
            className="
              mt-4
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-violet-500
              px-6 py-3
              font-medium
              text-white
            "
          >
            Resume
          </button>
        </div>
      )}
    </>
  );
}