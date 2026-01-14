"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function GlassHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Initial animation trigger
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 1500); // Wait 1.5s before expanding

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-center">
        <motion.div
          initial={{ width: "260px", opacity: 0, y: -50 }}
          animate={{
            width: isExpanded ? "100%" : "260px",
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: 0.5,
          }}
          className={clsx(
            "glass-panel rounded-full px-6 py-3 flex items-center justify-between overflow-hidden",
            isScrolled
              ? "bg-white/20 backdrop-blur-xl"
              : "bg-white/10 backdrop-blur-lg"
          )}
        >
          {/* Logo - Always Visible */}
          <div className="flex items-center space-x-2 shrink-0">
            <img src="/images/logo.png" alt="Logo" className="w-12 h-12" />
            <motion.span
              layout
              className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent whitespace-nowrap"
            >
              Seattle Auto Glass LLC
            </motion.span>
          </div>

          {/* Desktop Nav - Fades In on Expand */}
          <motion.nav
            animate={{ opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className={clsx(
              "hidden md:flex items-center space-x-8",
              !isExpanded && "pointer-events-none absolute opacity-0"
            )}
          >
            {["Services", "Process", "Reviews", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors relative group whitespace-nowrap"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </motion.nav>

          {/* CTA & Mobile Toggle - Fades In on Expand */}
          <motion.div
            animate={{ opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className={clsx(
              "flex items-center space-x-4",
              !isExpanded && "pointer-events-none absolute -right-96 opacity-0"
            )}
          >
            <a
              href="tel:425-931-4095"
              className="glass-button hidden sm:flex items-center space-x-2 px-4 py-2 rounded-full text-white text-sm font-semibold transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>(425) 931-4095</span>
            </a>

            <button
              className="md:hidden p-2 text-slate-700 hover:bg-white/20 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 p-4 md:hidden"
          >
            <div className="glass-panel rounded-2xl p-4 flex flex-col space-y-4 mx-4">
              {["Services", "Process", "Reviews", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-slate-700 py-2 px-4 hover:bg-white/20 rounded-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="tel:425-931-4095"
                className="glass-button flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-white font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
