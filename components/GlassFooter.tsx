"use client";

import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";

export default function GlassFooter() {
  const [droplets, setDroplets] = useState<
    { id: number; left: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDroplets(
        Array.from({ length: 20 }).map((_, i) => ({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 3 + Math.random() * 4,
        }))
      );
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="relative z-10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 p-12 mb-8 backdrop-blur-2xl shadow-xl">
          {/* Rain Droplets Animation */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {droplets.map((drop) => (
              <motion.div
                key={drop.id}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: "120%", opacity: [0, 1, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: drop.duration,
                  delay: drop.delay,
                  ease: "linear",
                }}
                style={{
                  left: `${drop.left}%`,
                  position: "absolute",
                }}
                className="w-[2px] h-12 bg-gradient-to-b from-transparent via-blue-400/60 to-blue-400/30 rounded-full blur-[1px]"
              >
                {/* Head of the droplet */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-500/80 rounded-full" />
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <img src="/images/logo.png" alt="Logo" className="w-12 h-12" />
                <span className="text-xl font-bold text-slate-800">
                  Seattle Auto Glass LLC
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Queens Annes Windshield Chip Repair Specialists. Fast,
                invisible, and guaranteed repairs serving Seattle with pride.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-slate-800 mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {["Services", "Process", "Insurance", "Reviews", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-slate-800 mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-slate-600">
                  <Phone className="w-5 h-5 text-blue-500 mt-0.5" />
                  <a href="tel:425-931-4095" className="hover:text-blue-600">
                    (425) 931-4095
                  </a>
                </li>
                <li className="flex items-start space-x-3 text-slate-600">
                  <Mail className="w-5 h-5 text-blue-500 mt-0.5" />
                  <a
                    href="mailto:info@seattleautoglassllc.com"
                    className="hover:text-blue-600"
                  >
                    info@seattleautoglassllc.com
                  </a>
                </li>
                <li className="flex items-start space-x-3 text-slate-600">
                  <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                  <span>Queen Anne, Seattle, WA</span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-bold text-slate-800 mb-6">Hours</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between text-red-500 font-bold">
                  <span>Emergency</span>
                  <span>24/7 Available</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 relative z-10">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Seattle Auto Glass LLC. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-slate-400 hover:text-blue-500 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
