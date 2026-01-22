"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function GlassHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if we're in static export mode
  const isStaticExport = typeof window !== 'undefined' && window.location.pathname.includes('.html');

  const getHref = (path: string) => {
    if (isStaticExport) {
      return path === '/' ? '/index.html' : `${path}.html`;
    }
    return path;
  };

  return (
    <header
      className="fixed top-14 left-0 right-0 z-50 py-6 flex justify-center"
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-center">
        <div
          className="glass-panel rounded-full px-6 py-3 flex items-center justify-between overflow-hidden bg-white/10 backdrop-blur-lg w-full"
        >
          {/* Logo - Always Visible */}
          <div className="flex items-center space-x-2 shrink-0">
            <img src="/images/logo.png" alt="Logo" className="w-12 h-12" />
            <span className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent whitespace-nowrap">
              Seattle Auto Glass LLC
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {[
              { name: "Home", href: getHref("/") },
              { name: "Process", href: getHref("/process") },
              { name: "Costs", href: getHref("/costs") },
              { name: "Insurance", href: getHref("/insurance") },
              { name: "FAQ", href: getHref("/faq") },
              { name: "Contact", href: getHref("/contact") }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors relative group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <a
              href={getHref("/contact#quote-form")}
              className="glass-button hidden sm:flex items-center space-x-2 px-4 py-2 rounded-full text-white text-sm font-semibold transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get a Free Quote</span>
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
          </div>
        </div>
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
              {[
                { name: "Home", href: getHref("/") },
                { name: "Process", href: getHref("/process") },
                { name: "Costs", href: getHref("/costs") },
                { name: "Insurance", href: getHref("/insurance") },
                { name: "FAQ", href: getHref("/faq") },
                { name: "Contact", href: getHref("/contact") }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-slate-700 py-2 px-4 hover:bg-white/20 rounded-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href={getHref("/contact#quote-form")}
                className="glass-button flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-white font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageSquare className="w-5 h-5" />
                <span>Get a Free Quote</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
