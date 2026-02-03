"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, Menu, X, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function GlassHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-10 left-0 right-0 z-50 pt-2 pb-0 flex justify-center">
      <div className="container mx-auto px-4 md:px-6 flex justify-center">
        <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between overflow-hidden bg-white/10 backdrop-blur-lg w-full">
          {/* Logo - Always Visible */}
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <img src="/images/logo.png" alt="Logo" className="w-12 h-12" />
            <span className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent whitespace-nowrap">
              Seattle Auto Glass LLC
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {[
              { name: "Home", href: "/" },
              { name: "Process", href: "/process/" },
              { name: "Costs", href: "/costs/" },
              { name: "Insurance", href: "/insurance/" },
              { name: "FAQ", href: "/faq/" },
              { name: "Contact", href: "/contact/" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors relative group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact#quote-form"
              className="glass-button hidden sm:flex items-center space-x-2 px-4 py-2 rounded-full text-white text-sm font-semibold transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get a Free Estimate</span>
            </Link>

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
                { name: "Home", href: "/" },
                { name: "Process", href: "/process/" },
                { name: "Costs", href: "/costs/" },
                { name: "Insurance", href: "/insurance/" },
                { name: "FAQ", href: "/faq/" },
                { name: "Contact", href: "/contact/" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-slate-700 py-2 px-4 hover:bg-white/20 rounded-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact#quote-form"
                className="glass-button flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-white font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageSquare className="w-5 h-5" />
                <span>Get a Free Quote</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
